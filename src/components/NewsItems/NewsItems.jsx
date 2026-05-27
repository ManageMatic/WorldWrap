import React, { useState, useEffect } from 'react';
import './NewsItems.css';

const NewsItems = ({
  title,
  description,
  imageurl,
  newsurl,
  author,
  date,
  sourceName,
  onRemove,
  isBookmarkedPage = false
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('worldwrap_bookmarks');
    if (saved) {
      const array = JSON.parse(saved);
      const exists = array.some(item => item.url === newsurl);
      setIsBookmarked(exists);
    }
  }, [newsurl]);

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isBookmarkedPage) {
      if (onRemove) onRemove();
      return;
    }

    const saved = localStorage.getItem('worldwrap_bookmarks');
    let array = saved ? JSON.parse(saved) : [];

    if (isBookmarked) {
      array = array.filter(item => item.url !== newsurl);
      setIsBookmarked(false);
      showToast('Removed from bookmarks');
    } else {
      const newBookmark = {
        title,
        description,
        urlToImage: imageurl,
        url: newsurl,
        author,
        publishedAt: date,
        source: { name: sourceName || 'Global' }
      };
      array.push(newBookmark);
      setIsBookmarked(true);
      showToast('Saved to offline library');
    }

    localStorage.setItem('worldwrap_bookmarks', JSON.stringify(array));
  };

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description || 'Check out this global news!',
          url: newsurl
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(newsurl).then(() => {
      showToast('Link copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy link');
    });
  };

  const showToast = (message) => {
    const toast = document.getElementById('toast-notification');
    if (toast) {
      toast.innerText = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2200);
    }
  };

  const getReadTime = () => {
    const contentText = `${title || ''} ${description || ''}`;
    const wordCount = contentText.split(/\s+/).length;
    const time = Math.max(1, Math.ceil(wordCount / 200));
    return `${time} min read`;
  };

  const trimmedTitle = title ? (title.length > 70 ? `${title.slice(0, 70)}...` : title) : 'Breaking News Updates';
  const trimmedDesc = description ? (description.length > 120 ? `${description.slice(0, 120)}...` : description) : 'Unwrapping the truth. Read the complete story and browse local analyses by clicking below.';

  return (
    <div className="news-card-wrapper h-100">
      <div className="news-card">
        <div className="news-card-img-container">
          {imageurl ? (
            <img src={imageurl} className="news-card-img" alt={title || 'News'} onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop';
            }} />
          ) : (
            <div className="news-card-img d-flex flex-column justify-content-center align-items-center text-center p-3" style={{ background: 'var(--accent-gradient)', color: 'white' }}>
              <h2 className="brand-title text-white mb-1" style={{ fontSize: '1.6rem' }}>
                World<span style={{ color: '#fff', opacity: 0.8 }}>Wrap</span>
              </h2>
              <span className="brand-slogan text-white" style={{ fontSize: '8px', opacity: 0.9 }}>
                Unwrapping the Truth
              </span>
            </div>
          )}
          
          {sourceName && (
            <span className="news-category-badge">
              {sourceName}
            </span>
          )}
        </div>

        <div className="news-card-body">
          <h5 className="news-card-title">{trimmedTitle}</h5>
          <p className="news-card-text">{trimmedDesc}</p>
          
          <div className="news-meta">
            <span>By <strong>{!author ? 'Correspondent' : author}</strong></span>
            <span>Published {new Date(date || Date.now()).toGMTString()}</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>⚡ {getReadTime()}</span>
          </div>

          <div className="news-actions">
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn-read-more">
              Read Story
            </a>
            
            <div className="d-flex">
              <button 
                onClick={handleShare} 
                className="card-action-icon" 
                title="Share article"
                aria-label="Share article"
              >
                <i className="share-btn">🔗</i>
              </button>

              <button 
                onClick={toggleBookmark} 
                className="card-action-icon" 
                title={isBookmarked || isBookmarkedPage ? 'Remove bookmark' : 'Save bookmark'}
                aria-label="Save bookmark"
                style={{
                  background: isBookmarked || isBookmarkedPage ? 'var(--accent-primary)' : 'var(--input-bg)',
                  color: isBookmarked || isBookmarkedPage ? 'white' : 'var(--text-primary)',
                  borderColor: isBookmarked || isBookmarkedPage ? 'transparent' : 'var(--glass-border)'
                }}
              >
                {isBookmarked || isBookmarkedPage ? '★' : '☆'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
