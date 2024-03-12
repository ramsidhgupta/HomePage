import React, { useEffect, useState } from "react";
import "./TimeLine.css";


import az from "./images/az.jpg";
import hu from "./images/hu.jpg";
import ju from "./images/ju.jpg";
import kk from "./images/kk.jpg";
import n from "./images/n.jpg";
import r from "./images/r.jpg";
import u from "./images/u.jpg";
import ui from "./images/ui.jpg";
import uy from "./images/uy.jpg";
import y from "./images/y.jpg";
import ravi from "./images/raviTeja.jpeg"



const TimeLine = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');


  const boldText = <strong style={{ fontSize: "20px" }}>Digital Verification Engineer</strong>;
  const boldText2 = <strong style={{ fontSize: "20px" }}>Analog Engineer</strong>;
  
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const scrollPosition = window.scrollY;
  
      let activeIndex = -1; 
  
      
      timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top + window.scrollY;
        const itemHeight = item.offsetHeight;
  
        
        if (scrollPosition >= itemTop - 35 && scrollPosition < itemTop + itemHeight - 35) {
          activeIndex = index; 
        }
      });
      console.log('Active Index:', activeIndex);
      if (activeIndex !== -1 && activeIndex !== activeItem) {
        setActiveItem(activeIndex);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]); 
   
  
  useEffect(() => {
    setBackgroundImage(timelineData[activeItem].img);
  }, [activeItem]);
  
  
  return (
    <>
   
      <div className="timeline-container" id="timeline-1" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="timeline-header">
          <h2 className="timeline-header__title">MEET OUR TEAM</h2>
          <h3 className="timeline-header__subtitle">NEW AND CREATIVE</h3>
        </div>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} data-text="MEET OUR TEAM" className={`timeline-item ${index === activeItem ? 'timeline-item--active' : ''}`}>
              <div className="timeline__content">
                <img className="timeline__img" src={item.img} alt={item.title} />
                <h2 className="timeline__content-title">{item.title}</h2>
                <h3>{item.role}</h3>
                <p className="timeline__content-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const timelineData = [
  
  {
    img: az,
    title: "Rajnikantha D.",
    role:"Design Verification engineer",
    description: "Design Verification Engineer at the forefront of ensuring digital designs perform flawlessly. With a blend of technical expertise and a passion for innovation, Rajnikanth meticulously tests and validates intricate circuits, ensuring they meet the highest standards of quality and reliability. Welcome to the realm where precision meets creativity in the pursuit of digital perfection.",
  },
  {
    img: hu,
    title: "Vijay Kumar",
    role:"Analog engineer",
    description: "Vijay, an Analog Engineer driven by a deep curiosity for understanding the intricacies of the physical world. With a  foundation in physics and a passion for circuit design, Vijay Kumar crafts elegant solutions to complex analog challenges. From amplifiers to sensors, [Name] harnesses the power of analog electronics to create robust, efficient, and reliable systems. Welcome to the realm where every waveform tells a story, and innovation knows no bounds.",
  },
  {
    img: ravi,
    title: "Ravi Teja",
    role:"Design Verification engineer",
    description: "A Design Verification Engineer with a passion for unraveling the complexities of digital systems. With a keen eye for detail and a knack for problem-solving, Ravi Teja ensures the seamless functionality and reliability of cutting-edge technologies through rigorous verification processes. Welcome to the world where every bit matters, and precision is paramount.",
  },
  {
    img: ju,
    title: "Ranjani",
    role:"RTL engineer",
    description: "Ranjani, an RTL Engineer with a flair for transforming design concepts into tangible digital architectures. With a keen understanding of hardware description languages and a passion for optimizing performance, [Name] thrives in the realm of Register Transfer Level design. From microprocessors to complex SoCs, [Name] meticulously crafts efficient and scalable designs that power the technology of tomorrow. Welcome to the world where logic meets creativity, and innovation takes shape bit by bit.",
  },
  {
    img: kk,
    title: "Bhavani",
    role:"Design for Teastability",
    description: "A DFT (Design for Testability) Engineer poised at the intersection of design and testing in the semiconductor industry. With a focus on ensuring the manufacturability and testability of complex integrated circuits, [Name] applies ingenious techniques to embed testability features into designs. From scan chains to built-in self-test circuits, [Name] is dedicated to ensuring the reliability and efficiency of semiconductor products. Welcome to the forefront of technology, where every circuit holds the promise of innovation and reliability.",
  },
  {
    img: n,
    title: "Sharath",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
  {
    img: r,
    title: "Akash",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
  {
    img: u,
    title: "Name",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
  {
    img: ui,
    title: "Name",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
  {
    img: uy,
    title: "Name",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
  {
    img: y,
    title: "Last Employee",
    role:"Design Verification engineer",
    description: "Meet [Name], a Digital Verification Engineer with a passion for unraveling the complexities of digital systems...",
  },
];

export default TimeLine;





      {/* <div class="timeline-container" id="timeline-1">
        <div class="timeline-header">
          <h2 class="timeline-header__title">MEET OUR TEAM</h2>
          <h3 class="timeline-header__subtitle">NEW AND CREATIVE</h3>
        </div>
        <div class="timeline">
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={u} />
              <h2 class="timeline__content-title">Name One</h2>
              <p class="timeline__content-desc">
                Meet [Name], a Digital Verification Engineer with a passion for
                unraveling the complexities of digital systems. With a keen eye
                for detail and a knack for problem-solving, [Name] ensures the
                seamless functionality and reliability of cutting-edge
                technologies through rigorous verification processes. Welcome to
                the world where every bit matters, and precision is paramount.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={r} />
              <h2 class="timeline__content-title">Name Two</h2>
              <p class="timeline__content-desc">
                Introducing [Name], a Digital Verification Engineer at the
                forefront of ensuring digital designs perform flawlessly. With a
                blend of technical expertise and a passion for innovation,
                [Name] meticulously tests and validates intricate circuits,
                ensuring they meet the highest standards of quality and
                reliability. Welcome to the realm where precision meets
                creativity in the pursuit of digital perfection.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={y} />
              <h2 class="timeline__content-title">Name Three</h2>
              <p class="timeline__content-desc">
                Meet [Name], an Analog Engineer driven by a deep curiosity for
                understanding the intricacies of the physical world. With a
                foundation in physics and a passion for circuit design, [Name]
                crafts elegant solutions to complex analog challenges. From
                amplifiers to sensors, [Name] harnesses the power of analog
                electronics to create robust, efficient, and reliable systems.
                Welcome to the realm where every waveform tells a story, and
                innovation knows no bounds.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={ad} />
              <h2 class="timeline__content-title">Name Four</h2>
              <p class="timeline__content-desc">
                Introducing [Name], an RTL Engineer with a flair for
                transforming design concepts into tangible digital
                architectures. With a keen understanding of hardware description
                languages and a passion for optimizing performance, [Name]
                thrives in the realm of Register Transfer Level design. From
                microprocessors to complex SoCs, [Name] meticulously crafts
                efficient and scalable designs that power the technology of
                tomorrow. Welcome to the world where logic meets creativity, and
                innovation takes shape bit by bit.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={az} />
              <h2 class="timeline__content-title">Name Five</h2>
              <p class="timeline__content-desc">
                Meet [Name], a DFT (Design for Testability) Engineer poised at
                the intersection of design and testing in the semiconductor
                industry. With a focus on ensuring the manufacturability and
                testability of complex integrated circuits, [Name] applies
                ingenious techniques to embed testability features into designs.
                From scan chains to built-in self-test circuits, [Name] is
                dedicated to ensuring the reliability and efficiency of
                semiconductor products. Welcome to the forefront of technology,
                where every circuit holds the promise of innovation and
                reliability.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={ui} />
              <h2 class="timeline__content-title">Name Six</h2>
              <p class="timeline__content-desc">
                Introducing [Name], a VLSI (Very Large Scale Integration) Design
                Engineer at the forefront of shaping the digital landscape. With
                a passion for pushing the boundaries of technology, [Name]
                crafts intricate chip designs that power the devices we rely on
                every day. From concept to implementation, [Name] leverages
                cutting-edge tools and methodologies to optimize performance,
                minimize power consumption, and ensure manufacturability.
                Welcome to the world where creativity meets precision, and every
                transistor counts in the pursuit of technological excellence.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={uy} />
              <h2 class="timeline__content-title">Name Seven</h2>
              <p class="timeline__content-desc">
                Meet [Name], a Physical Design Engineer orchestrating the
                intricate dance of electrons on silicon. With a meticulous eye
                for detail and a passion for optimizing performance, [Name]
                navigates the complexities of layout and timing closure to bring
                digital designs to life. From floor planning to tape-out, [Name]
                ensures that every transistor finds its place with precision and
                efficiency, shaping the future of semiconductor technology.
                Welcome to the realm where creativity meets precision, and
                innovation thrives in silicon symphonies.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={ju} />
              <h2 class="timeline__content-title">Name Eight</h2>
              <p class="timeline__content-desc">
                Introducing [Name], a DFT (Design for Testability) Engineer
                mastering the art of ensuring the reliability and testability of
                digital systems. With a blend of technical expertise and
                strategic foresight, [Name] embeds test features into designs,
                paving the way for efficient and comprehensive testing
                methodologies. From scan chains to boundary scan architectures,
                [Name] is dedicated to ensuring that every chip emerges from
                manufacturing ready for rigorous testing and flawless
                performance. Welcome to the forefront of semiconductor
                engineering, where innovation and reliability intersect to drive
                technological advancement.
              </p>
            </div>
          </div>
          <div class="timeline-item" data-text="NEW TIMELINE DESIGN">
            <div class="timeline__content">
              <img class="timeline__img" src={kk} />
              <h2 class="timeline__content-title">Name Nine</h2>
              <p class="timeline__content-desc">
                Meet [Name], an Analog Layout Engineer shaping the physical
                manifestation of innovative circuit designs. With an acute
                attention to detail and a deep understanding of semiconductor
                physics, [Name] meticulously crafts the layouts that bring
                analog circuits to life. From transistor placement to routing
                delicate signal paths, [Name] ensures optimal performance and
                manufacturability, pushing the boundaries of analog design.
                Welcome to the realm where precision meets creativity, and every
                layout is a masterpiece of engineering ingenuity.
              </p>
            </div>
          </div>
        </div>
      </div> */}
//     </>
//   );
// };

// export default TimeLine;
