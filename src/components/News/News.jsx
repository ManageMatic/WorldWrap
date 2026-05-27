import React, { useEffect, useState, useCallback } from "react";
import NewsItems from "../NewsItems/NewsItems";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { mockArticles } from "../../data/mockData";
import './News.css';

const News = ({
  country = 'us',
  pageSize = 6,
  category = 'general',
  heading = 'WorldWrap - Top Headlines',
  setProgress,
  searchQuery = ''
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeProvider, setActiveProvider] = useState("newsapi");

  const newsApiKey = import.meta.env.VITE_NEWS_API;
  const gnewsApiKey = import.meta.env.VITE_GNEWS_API;
  const currentsApiKey = import.meta.env.VITE_CURRENTS_API;

  const updateNews = useCallback(async () => {
    setProgress(10);
    setLoading(true);
    setPage(1);

    // List of active providers to try in priority order
    const providersToTry = [];
    if (gnewsApiKey) providersToTry.push("gnews");
    if (currentsApiKey) providersToTry.push("currents");
    providersToTry.push("newsapi"); // Always fall back to News API

    let success = false;
    let articlesList = [];
    let total = 0;
    let successfulProvider = "newsapi";

    for (let i = 0; i < providersToTry.length; i++) {
      const provider = providersToTry[i];
      let url = "";

      if (provider === "gnews") {
        const gCategory = category === 'general' ? 'general' : category;
        url = `https://gnews.io/api/v4/top-headlines?category=${gCategory}&lang=en&country=${country === 'us' ? 'us' : country}&max=${pageSize}&apikey=${gnewsApiKey}&page=1`;
      } else if (provider === "currents") {
        url = `https://api.currentsapi.services/v1/search?category=${category}&country=${country}&language=en&apiKey=${currentsApiKey}&page_number=1&page_size=${pageSize}`;
      } else {
        // newsapi
        const key = newsApiKey || '9d6a90ffed354199b2336ac851290d8b';
        url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}&page=1&pagesize=${pageSize}`;
      }

      try {
        console.log(`WorldWrap: Trying fetch from provider: ${provider}`);
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`status ${res.status}`);
        }

        const parsedData = await res.json();
        
        if (parsedData.status === 'error' || parsedData.status === 'failure') {
          throw new Error(parsedData.message || 'API Error');
        }

        if (provider === "gnews") {
          articlesList = (parsedData.articles || []).map(article => ({
            title: article.title,
            description: article.description,
            urlToImage: article.image,
            url: article.url,
            author: article.source?.name || 'GNews',
            publishedAt: article.publishedAt,
            source: { name: article.source?.name || 'GNews' }
          }));
          total = parsedData.totalArticles || articlesList.length;
        } else if (provider === "currents") {
          articlesList = (parsedData.news || []).map(article => ({
            title: article.title,
            description: article.description,
            urlToImage: article.image !== 'None' ? article.image : null,
            url: article.url,
            author: article.author || 'Currents',
            publishedAt: article.published,
            source: { name: article.author || 'Currents' }
          }));
          total = articlesList.length;
        } else {
          articlesList = parsedData.articles || [];
          total = parsedData.totalResults || 0;
        }

        if (articlesList.length === 0) {
          throw new Error('Empty articles array returned');
        }

        // If we made it here, this provider works!
        success = true;
        successfulProvider = provider;
        console.log(`WorldWrap: Successful fetch from provider: ${provider}`);
        break; 
      } catch (err) {
        console.warn(`WorldWrap: Provider ${provider} failed: ${err.message}. Trying next in sequence...`);
      }
    }

    if (success) {
      setArticles(articlesList);
      setTotalResults(total);
      setIsOffline(false);
      setActiveProvider(successfulProvider);
    } else {
      console.warn("WorldWrap: All news API endpoints failed. Loading local mock news instead.");
      const fallbackList = mockArticles[category] || mockArticles.general || [];
      setArticles(fallbackList);
      setTotalResults(fallbackList.length);
      setIsOffline(true);
      showToast('Loaded offline fallback news.');
    }
    
    setLoading(false);
    setProgress(100);
  }, [country, category, pageSize, setProgress, newsApiKey, gnewsApiKey, currentsApiKey]);

  useEffect(() => {
    updateNews();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    if (isOffline) {
      return;
    }

    let url = "";
    if (activeProvider === "gnews") {
      const gCategory = category === 'general' ? 'general' : category;
      url = `https://gnews.io/api/v4/top-headlines?category=${gCategory}&lang=en&country=${country === 'us' ? 'us' : country}&max=${pageSize}&apikey=${gnewsApiKey}&page=${nextPage}`;
    } else if (activeProvider === "currents") {
      url = `https://api.currentsapi.services/v1/search?category=${category}&country=${country}&language=en&apiKey=${currentsApiKey}&page_number=${nextPage}&page_size=${pageSize}`;
    } else {
      const key = newsApiKey || '9d6a90ffed354199b2336ac851290d8b';
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}&page=${nextPage}&pagesize=${pageSize}`;
    }
    
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch more.');
      const parsedData = await res.json();
      
      let newArticles = [];
      if (activeProvider === "gnews") {
        newArticles = (parsedData.articles || []).map(article => ({
          title: article.title,
          description: article.description,
          urlToImage: article.image,
          url: article.url,
          author: article.source?.name || 'GNews',
          publishedAt: article.publishedAt,
          source: { name: article.source?.name || 'GNews' }
        }));
      } else if (activeProvider === "currents") {
        newArticles = (parsedData.news || []).map(article => ({
          title: article.title,
          description: article.description,
          urlToImage: article.image !== 'None' ? article.image : null,
          url: article.url,
          author: article.author || 'Currents',
          publishedAt: article.published,
          source: { name: article.author || 'Currents' }
        }));
      } else {
        newArticles = parsedData.articles || [];
      }

      setArticles(prev => prev.concat(newArticles));
    } catch (err) {
      console.warn("Failed to load more pages, shifting to static mode.", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const showToast = (message) => {
    const toast = document.getElementById('toast-notification');
    if (toast) {
      toast.innerText = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  };

  const filteredArticles = articles.filter(article => {
    const titleMatch = article.title ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const descMatch = article.description ? article.description.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    return titleMatch || descMatch;
  });

  return (
    <>
      <div className="container news-container">
        {/* News Heading Banner */}
        <div className="text-center mb-4">
          <h1 className="display-5" style={{ fontFamily: "var(--font-heading)", fontWeight: '800' }}>
            {heading}
          </h1>
          {isOffline && (
            <span className="badge bg-warning text-dark px-3 py-2 mt-2 rounded-pill shadow-sm">
              🛰️ Premium Offline Mode Enabled
            </span>
          )}
        </div>

        {/* Sleek Skeleton Load Grids */}
        {loading && <Spinner />}

        {!loading && (
          <InfiniteScroll
            dataLength={filteredArticles.length}
            next={fetchMoreData}
            hasMore={!isOffline && articles.length < totalResults}
            loader={<Spinner />}
            style={{ overflow: 'hidden' }}
            endMessage={
              filteredArticles.length > 0 && (
                <p className="text-center text-muted my-4">
                  ✨ You have unwrapped all headlines for this category.
                </p>
              )
            }
          >
            <div className="row my-2 px-1">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((element, index) => (
                  <div className="col-12 col-sm-6 col-lg-4 mb-4" key={`${element.url}-${index}`}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      sourceName={element.source?.name || 'Global'}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5 glass-effect rounded" style={{ padding: '40px', maxWidth: '500px', margin: '40px auto' }}>
                  <h4 style={{ fontFamily: "var(--font-heading)" }}>No Headlines Found</h4>
                  <p className="text-muted mb-0">
                    We couldn't find any articles matching "{searchQuery}" in this category.
                  </p>
                </div>
              )}
            </div>
          </InfiniteScroll>
        )}
      </div>

      {/* Floating Scroll-to-Top trigger */}
      <button 
        onClick={scrollToTop} 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        ▲
      </button>
    </>
  );
};

export default News;
