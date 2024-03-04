import React, { useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  useEffect(() => {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 550;
    const handleScroll = () => {
      if (window.scrollY > offset) {
        document.querySelector('.progress-wrap').classList.add('active-progress');
      } else {
        document.querySelector('.progress-wrap').classList.remove('active-progress');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const handleProgressClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    document.querySelector('.progress-wrap').addEventListener('click', handleProgressClick);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('scroll', handleScroll);
      document.querySelector('.progress-wrap').removeEventListener('click', handleProgressClick);
    };
  }, []);



  return (
    <>
      <div class="progress-wrap">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            // style={{
            //   transition: "stroke-dashoffset 10ms linear 0s",
            //   strokeDasharray: "307.919 307.919",
            //   strokeDashoffset: "253.012",
            // }}
          />
        </svg>
      </div>
    </>
  );
};

export default ProgressBar;
