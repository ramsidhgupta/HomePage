import React, {useState} from "react";
import "./EmpQuotes1.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import personOne from "./images/person1.jpg";
import personTwo from "./images/person2.jpg";
import personThree from "./images/person3.jpg";
import ComponentCall from "./ComponentCall";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const EmpQuotes1 = () => {
  

  const [animationClass, setAnimationClass] = useState("animate-box");
  const [animationClass1, setAnimationClass1] = useState("progressBar");
  

  const handleBeforeChange = () => {
    setAnimationClass("");
    setAnimationClass1("");
  };

  const handleAfterChange = () => {
    setTimeout(() => {
      setAnimationClass("animate-box");
      setAnimationClass1("progressBar");
     
    }, 100);
  };
  

  return (
    <>
      <div className="intro">
          <h2 className="text-center fw-bold">Testimonials</h2>
          <p className="text-center fw-bold">
            Our employees love us! Read what they have to say below. 
          </p>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
          pauseOnHover={false}
          arrows={true}
        >
            <ComponentCall
            description="“Of all the many things that I appreciate about working at DCI Consulting Group, I think that the culture that we’ve built and are continuously building is what separates us from other organizations. It’s a culture that embraces flexibility, celebrates diversity of thought and approach, and one that makes it easier to come to work every day. It’s been an awesome 5 years and I’m excitedly looking forward to the next 5!” "
            image={personOne}
            name="John Doe"
            role="CEO"
            skillDevelopment={100}
            workSatisfaction={90}
            workLife={82}
            jobSecurity={96}
            salaryBenefit={96}
            companyCulture={98}
            promotion={82}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
          <ComponentCall
            description="“I feel valued and appreciated as a member of the team, and I'm constantly learning and growing in my role.”"
            image={personTwo}
            name="Ram Sidh"
            role="Web Developer"
            skillDevelopment={50}
            workSatisfaction={80}
            workLife={92}
            jobSecurity={56}
            salaryBenefit={26}
            companyCulture={88}
            promotion={32}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
          
          <ComponentCall
            description="“I started my software development career as an intern and now have completed two years at Techsoc. Being a night owl, one of the perks that I enjoy are flexible work hours. I was assigned responsibilities very early in my career which improved my decision-making skills. Moreover, Jeavio changed my notion of work-life which I used to perceive as boring before starting my corporate life, into completely enjoyable by the activities that happen at regular intervals. Working with Techsoc has been a great experience!”"
            image={personThree}
            name="Tom Cruise"
            role="DV engineer"
            skillDevelopment={50}
            workSatisfaction={80}
            workLife={92}
            jobSecurity={56}
            salaryBenefit={26}
            companyCulture={88}
            promotion={32}
            handleBeforeChange={handleBeforeChange}
            handleAfterChange={handleAfterChange}
            animationClass={animationClass}
            animationClass1={animationClass1}
          />
        </Carousel>
      
    </>
  );
};

export default EmpQuotes1;
