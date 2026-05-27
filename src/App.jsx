import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import About from './components/About/About';
import Bookmarks from './components/Bookmarks/Bookmarks';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('us');
  const [theme, setTheme] = useState(() => {
    // Default to dark mode for premium look, check storage
    return localStorage.getItem('worldwrap_theme') || 'dark';
  });

  // Orchestrate HTML attribute changes for dark/light themes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('worldwrap_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <Router>
        {/* Sleek top loading line */}
        <LoadingBar
          color='var(--accent-primary)'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />

        {/* Global Nav Control Tower */}
        <NavBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          country={country}
          setCountry={setCountry}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Main Routes Core */}
        <Routes>
          <Route exact path='/' element={
            <News 
              setProgress={setProgress} 
              key={`general-${country}`} 
              pageSize={6} 
              country={country} 
              category="general" 
              heading="WorldWrap - Global Headlines"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/general' element={
            <News 
              setProgress={setProgress} 
              key={`general-alt-${country}`} 
              pageSize={6} 
              country={country} 
              category="general" 
              heading="WorldWrap - Global Headlines"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/business' element={
            <News 
              setProgress={setProgress} 
              key={`business-${country}`} 
              pageSize={6} 
              country={country} 
              category="business" 
              heading="WorldWrap - Business Trends"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/entertainment' element={
            <News 
              setProgress={setProgress} 
              key={`entertainment-${country}`} 
              pageSize={6} 
              country={country} 
              category="entertainment" 
              heading="WorldWrap - Entertainment News"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/health' element={
            <News 
              setProgress={setProgress} 
              key={`health-${country}`} 
              pageSize={6} 
              country={country} 
              category="health" 
              heading="WorldWrap - Medical Science & Health"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/science' element={
            <News 
              setProgress={setProgress} 
              key={`science-${country}`} 
              pageSize={6} 
              country={country} 
              category="science" 
              heading="WorldWrap - Science Discoveries"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/sports' element={
            <News 
              setProgress={setProgress} 
              key={`sports-${country}`} 
              pageSize={6} 
              country={country} 
              category="sports" 
              heading="WorldWrap - Sports Highlights"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/technology' element={
            <News 
              setProgress={setProgress} 
              key={`technology-${country}`} 
              pageSize={6} 
              country={country} 
              category="technology" 
              heading="WorldWrap - Tech & Future Systems"
              searchQuery={searchQuery}
            />
          } />
          <Route exact path='/about' element={
            <About 
              setProgress={setProgress} 
              heading="Unwrapping WorldWrap" 
            />
          } />
          <Route exact path='/bookmarks' element={
            <Bookmarks 
              setProgress={setProgress} 
            />
          } />
        </Routes>

        {/* Global interactive toast notification box */}
        <div id="toast-notification" className="toast-msg"></div>
      </Router>
    </div>
  );
};

export default App;
