import "./LifeComp.css";
import DivOpener from "./DivOpner";
import slide_image_1 from "../src/images/quotes.webp";
import slide_image_2 from "../src/images/image2.jpg";
import slide_image_3 from "../src/images/image3.jpg";
import slide_image_4 from "../src/images/reco.webp";


function LifeComp() {
  return (
    <>
      
        
            <DivOpener title="L I F E" images={[
              slide_image_1,
              slide_image_2,
              slide_image_3,
              slide_image_4,
            ]}
            titles={[
              "Employee Testimonials & Quotes",
              "Photos & Events",
              "Values & Mission",
              "Recognition & Awards",
            ]}
            descriptions={[
              "Genuine quotes or testimonials from current employees",
              "Employees at work, team events, atmosphere and culture of the workplace.",
              "Company's core values and mission for growth of an employee",
              "Awards, Recognition, incentive given to best employees",
            ]}
            links={[
              "/employee-quotes",
              "/photos-events",
              "/values-mission",
              "/recognition-awards",
            ]}/>
         
    </>
  );
}

export default LifeComp;
