import React from "react";
import "./NewsHero.css";

const NewsHero = () => (
  <section className="news-hero">
    <div className="news-hero__overlay">
      <div className="news-hero__content">
        <h1 className="news-hero__title">Latest News & Updates</h1>
        <p className="news-hero__subtitle">
          Stay informed with the latest stories, events, and milestones from the Smallest Library in Africa Initiative.
        </p>
      </div>
    </div>
  </section>
);

export default NewsHero;