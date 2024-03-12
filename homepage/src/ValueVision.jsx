import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import CharaAnim from "./CharaAnim";

const ValueVision = () => {
  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 1, x: -250 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 1, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  const variants4 = {
    hidden: { opacity: 1, y: -350 },
    visible: { opacity: 1, y: 0 },
  };
  const vision =  "To be the most respected and confided in organization universally that gives top tier business arrangements utilizing the most recent advancements."
  const mission = "To offer worldwide types of assistance across businesses ina fair and entrusted way and construct a relationship with all partners while developing with development."
  const PHILOSOPHY = "The business reasoning of TechsoC is to lay accentuation on Human Values and Personal Relations."


  return (
    <div className="container pt-14 pb-16 pt-md-16 pb-md-10">
      <div className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
        <div className="col-lg-12 order-lg-6">
          <div className="row gx-md-5 gy-5">
            <motion.div
              className="col-md-5 offset-md-1"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 0.8, delay: 0.1, ease: easeInOut }}
            >
              <Card
                sx={{
                  minWidth: 175,
                  backgroundColor: "#fef3e4",
                  margin: "15px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    MISSION
                  </Typography>
                  <Typography variant="body2">
                  <CharaAnim text={mission} />
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-md-6 align-self-end"
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 0.2, delay: 0.1, ease: easeInOut }}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#fae6e7",
                  margin: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    VISION
                  </Typography>
                  <Typography variant="body2">
                  <CharaAnim text={vision} />
                    
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-md-6"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants3}
              transition={{ duration: 0.8, delay: 0.3, ease: easeInOut }}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#eaf3ef",
                  margin: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    VALUES
                  </Typography>
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <Icon icon="flat-color-icons:ok" /> Integrity
                    </li>
                    <li>
                      <Icon icon="flat-color-icons:ok" /> Trustworthiness
                    </li>
                    <li>
                      <Icon icon="flat-color-icons:ok" /> Fair practices
                    </li>
                    <li>
                      <Icon icon="flat-color-icons:ok" /> Accountability
                    </li>
                    <li>
                      <Icon icon="flat-color-icons:ok" /> Quality Orientation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-md-6 align-self-start"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 1 }}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#e0e9fa",
                  margin: "10px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    PHILOSOPHY
                  </Typography>
                  <Typography variant="body2">
                  <CharaAnim text={PHILOSOPHY} />
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueVision;
