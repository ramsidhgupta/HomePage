
import React, { useEffect, useState } from "react";
import "./DivOpner.css";
import { motion, useAnimation } from "framer-motion";
import ImageSlider from "./ImageSlider";


const DivOpener = ({title, images, titles, descriptions, links}) => {
  const [hideBottom, setHideBottom] = useState(false);
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  useEffect(() => {
    const animateDivs = async () => {
      await Promise.all([
        controlsTop.start({ y: -450 }),
        controlsBottom.start({ y: 450 }),
      ]);
      await controlsTop.set({ height: 0, width: 0, opacity: 0 });
      await controlsBottom.set({ height: 0, width: 0, opacity: 0 });
      setHideBottom(true);
    };

    animateDivs();
  }, [controlsTop, controlsBottom]);

  return (
          <div className="main1">
             <motion.div
              className="top"
              initial={{ y: 0 }}
              animate={controlsTop} 
              transition={{ duration: 0.9, delay: 0.5, ease: "linear" }}
            >
              <h1 className="top-h">{title}</h1>
            </motion.div> 
             <div className="center">
            <ImageSlider
              images={images}
              titles={titles}
              descriptions={descriptions}
              links={links}
            />
           </div>
             <motion.div
              className="bottom"
              initial={{ y: 0 }}
              animate={controlsBottom}
              transition={{ duration: 0.9, delay: 0.5, ease: "linear" }}
            >
              <h1 className="bottom-h">{title}</h1>
            </motion.div> 
           </div> 
  
  );
};

export default DivOpener;
