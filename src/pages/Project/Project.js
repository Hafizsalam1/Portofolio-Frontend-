import React, { useState, useEffect } from "react";
import "./ProjectStyle.css";
import Loading from "../../Util/Loading/Loading";
  

const Project = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [hoverStates, setHoverStates] = useState([]);


  const [isAnimated, setIsAnimated] = React.useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimated(true);
    }, 200);

    return () => clearTimeout(animationTimeout);
  }, []);

  useEffect(() => {
    fetch('/portofolio')
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data.data);
        setHoverStates(Array(data.data.length).fill(false));
      })
      .catch((error) => console.error(error));
  }, []);
  

  const handleMouseOver = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
  };

  if (portfolioData.length === 0) {
    return <div className="project-container">
      <Loading/>
      </div>;
  }

  return (
    <div className="project-container" style={{

      opacity: isAnimated ? 1 : 0, 
      transform: isAnimated ? "none" : "translateY(20px)", 
      transition: "opacity 1s ease, transform 1s ease", 
    }}>
      {portfolioData.map((portfolioItem, index) => (
        <div
          className="portfolio-item"
          key={portfolioItem.id}
          onMouseEnter={() => handleMouseOver(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={{ transform: hoverStates[index] ? 'scale(1.1)' : 'scale(1)' }}
        >
          <a href={portfolioItem.link} target="_blank" className="no-underline" >
          <h1>{portfolioItem.title}</h1>
          <p>{portfolioItem.description}</p>
          <img className="portfolio-thumbnail" src={portfolioItem.thumbnail} alt="Thumbnail" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;

