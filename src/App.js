import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#00d1cd'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={6} country="us" category="general" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={6} country="us" category="business" heading="WorldWrap - Business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={6} country="us" category="entertainment" heading="WorldWrap - Entertainment" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={6} country="us" category="general" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={6} country="us" category="health" heading="WorldWrap - Health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={6} country="us" category="science" heading="WorldWrap - Science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={6} country="us" category="sports" heading="WorldWrap - Sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={6} country="us" category="technology" heading="WorldWrap - Technology" />} />
          <Route exact path='/about' element={<About setProgress={setProgress} heading="About Us" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
