import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = ({ setProgress, heading = "About Us" }) => {
  useEffect(() => {
    setProgress(10);
    setProgress(40);
    window.scrollTo(0, 0);
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="container about-container">
      {/* Title */}
      <h1 className="text-center mb-4" style={{ fontFamily: "var(--font-heading)", fontWeight: '800' }}>
        {heading}
      </h1>

      {/* Main intro card */}
      <div className="about-card glass-effect text-center mb-5">
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: 0 }}>
          Welcome to <strong style={{ color: 'var(--accent-primary)' }}>WorldWrap</strong>, your premium destination for comprehensive, real-time, and reliable news from every corner of the globe. Our mission is to keep you informed, engaged, and inspired by delivering top stories across global domains.
        </p>
      </div>

      <div className="row g-4 mb-5">
        {/* Vision Card */}
        <div className="col-md-6">
          <div className="about-card glass-effect h-100">
            <h2 className="text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              👁️ Our Vision
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              We envision a highly connected world where accurate information is accessible instantly to everyone. We strive to provide balanced, objective reporting that empowers readers to critically analyze modern current affairs and make conscious global decisions.
            </p>
          </div>
        </div>

        {/* Commitment Card */}
        <div className="col-md-6">
          <div className="about-card glass-effect h-100">
            <h2 className="text-center mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              🤝 Our Commitment
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              At WorldWrap, we prioritize journalistic integrity, data transparency, and responsive software delivery. From intelligent read-time counts to fast regional filters, we compile custom readers designed to optimize your visual absorption.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Accordion */}
      <h2 className="text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        📦 Unwrapping Categories
      </h2>
      
      <div className="accordion mb-5" id="categoriesAccordion">
        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingBusiness">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseBusiness" 
              aria-expanded="false" 
              aria-controls="collapseBusiness"
            >
              💼 Business & Markets
            </button>
          </h2>
          <div id="collapseBusiness" className="accordion-collapse collapse" aria-labelledby="headingBusiness" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              Stay ahead in corporate developments, market fluctuations, global stock indices, and federal trade agreements. We summarize critical economic shifts so you stay updated on macroeconomic trends.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingEntertainment">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseEntertainment" 
              aria-expanded="false" 
              aria-controls="collapseEntertainment"
            >
              🎬 Entertainment & Pop Culture
            </button>
          </h2>
          <div id="collapseEntertainment" className="accordion-collapse collapse" aria-labelledby="headingEntertainment" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              Uncover breaking releases, film festival achievements, musical updates, digital media distributions, and celebrity profiles from across global arts.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingHealth">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseHealth" 
              aria-expanded="false" 
              aria-controls="collapseHealth"
            >
              ❤️ Health & Medical Science
            </button>
          </h2>
          <div id="collapseHealth" className="accordion-collapse collapse" aria-labelledby="headingHealth" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              Deep-dive into mental well-being guides, wellness journals, medical technological breakthroughs, health care policy, and nutritional innovations.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingScience">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseScience" 
              aria-expanded="false" 
              aria-controls="collapseScience"
            >
              🔬 Science & Cosmology
            </button>
          </h2>
          <div id="collapseScience" className="accordion-collapse collapse" aria-labelledby="headingScience" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              Explore deep-space telescopes, quantum simulations, micro-biological discoveries, environmental ecological surveys, and revolutionary physics.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingSports">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseSports" 
              aria-expanded="false" 
              aria-controls="collapseSports"
            >
              ⚽ Sports & Athletics
            </button>
          </h2>
          <div id="collapseSports" className="accordion-collapse collapse" aria-labelledby="headingSports" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              Follow international campaigns, underdogs championships, biometric training wearables news, and live game commentary digests.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion-item-custom">
          <h2 className="accordion-header" id="headingTech">
            <button 
              className="accordion-button accordion-button-custom collapsed" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTech" 
              aria-expanded="false" 
              aria-controls="collapseTech"
            >
              💻 Technology & Future Systems
            </button>
          </h2>
          <div id="collapseTech" className="accordion-collapse collapse" aria-labelledby="headingTech" data-bs-parent="#categoriesAccordion">
            <div className="accordion-body text-muted" style={{ fontSize: '0.98rem' }}>
              From generative neural networks and solid-state cell breakthroughs to quantum chips, we parse developer announcements in a crisp, readable feed.
            </div>
          </div>
        </div>
      </div>

      {/* Community Callout */}
      <div className="about-card glass-effect text-center p-5">
        <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)" }}>Join Our Community</h3>
        <p className="text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
          Be part of an informed global readership. Follow our topics, bookmark articles for offline travel, and explore headlines on any mobile or desktop device.
        </p>
        <Link to="/" className="btn-read-more" style={{ display: 'inline-block' }}>
          Explore Live Headlines
        </Link>
      </div>
    </div>
  );
};

export default About;
