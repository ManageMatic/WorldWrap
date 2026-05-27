import React, { useState, useEffect } from 'react';
import NewsItems from '../NewsItems/NewsItems';
import './Bookmarks.css';

const Bookmarks = ({ setProgress }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    setProgress(10);
    const saved = localStorage.getItem('worldwrap_bookmarks');
    if (saved) {
      setBookmarkedArticles(JSON.parse(saved));
    }
    setProgress(50);
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);

  const handleRemoveBookmark = (url) => {
    const updated = bookmarkedArticles.filter(item => item.url !== url);
    setBookmarkedArticles(updated);
    localStorage.setItem('worldwrap_bookmarks', JSON.stringify(updated));

    const toast = document.getElementById('toast-notification');
    if (toast) {
      toast.innerText = 'Removed from bookmarks';
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }
  };

  return (
    <div className="container bookmarks-container">
      <h1 className="text-center mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        Your Saved Library
      </h1>
      <p className="text-center text-muted mb-5">
        Read your handpicked bookmarks, preserved offline.
      </p>

      {bookmarkedArticles.length === 0 ? (
        <div className="text-center py-5 glass-effect rounded" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Your Library is Empty</h3>
          <p className="text-muted">
            Articles you bookmark from global categories will appear here for easy offline reading.
          </p>
        </div>
      ) : (
        <div className="row">
          {bookmarkedArticles.map((element, index) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={`${element.url}-${index}`}>
              <NewsItems
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                sourceName={element.source?.name}
                onRemove={() => handleRemoveBookmark(element.url)}
                isBookmarkedPage={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
