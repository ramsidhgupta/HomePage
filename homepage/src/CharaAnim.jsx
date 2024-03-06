import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";


const textVariants = {
    initial:{},
    animate:{
        transition:{
            staggerChildren:0.1,
            delayChildren:0.2,
        },
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.2,
            delay:0.2,
        },
    },
};

const charVariants = {
    initial:{
        opacity:0,
        y:-250,
    },
    animate:{
        opacity:1,
        y:-10,
    },
};

const CharaAnim = ({text}) => {
  const [key, setKey] = useState(Math.random());
  return(
    <AnimatePresence>
        <div>
            <motion.span key={key} variants={textVariants} initial="initial" animate="animate" exit="exit" onAnimationComplete={()=> setKey(Math.random())}>
                {text.split("").map((char, index)=>(
                    <motion.span key={index} variants={charVariants}>
                    {char}
                    </motion.span>
                ))}
                 </motion.span>
            </div>
    </AnimatePresence>

  );
};

export default CharaAnim;