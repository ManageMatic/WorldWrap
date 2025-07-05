import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = 'in',
  pageSize = 6,
  category = 'general',
  heading = 'WorldWrap - Top Headlines',
  setProgress
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d6a90ffed354199b2336ac851290d8b&page=${page}&pagesize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    setProgress(30);
    const parseddata = await data.json();
    setProgress(60);
    setArticles(parseddata.articles || []);
    setTotalResults(parseddata.totalResults || 0);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    updateNews();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [country, category, pageSize, setProgress]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d6a90ffed354199b2336ac851290d8b&page=${nextPage}&pagesize=${pageSize}`;
    setPage(nextPage);
    const data = await fetch(url);
    const parseddata = await data.json();
    setArticles(prevArticles => prevArticles.concat(parseddata.articles || []));
    setTotalResults(parseddata.totalResults || 0);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "90px 30px 30px", fontFamily: "adamina", overflowX: "hidden" }}>
        {heading}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container my-2" style={{ fontFamily: "adamina", overflowX: "hidden" }}>
          <div className="row my-3">
            {articles.map((element, index) => (
              <div className="col-md-4 mb-4" key={`${element.url}-${index}`}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  heading: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
