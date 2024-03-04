import React from "react";
import PropTypes from "prop-types";
import "./EmpQuotes1.css";

const ComponentCall = ({
  description,
  image,
  name,
  role,
  skillDevelopment,
  workSatisfaction,
  workLife,
  jobSecurity,
  salaryBenefit,
  companyCulture,
  promotion,
  handleBeforeChange,
  handleAfterChange,
  animationClass,
  animationClass1,
}) => {
  
  return (
    <div class="container pt-12 pt-md-12 pb-6 pb-md-0 pt-xs-12">
      <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
        <div className="col-lg-6 item">
          <div className={`box ${animationClass}`}>
            <p className="description">{description}</p>
          </div>
          <div className="card-footer">
            <div class="author d-flex flex-row">
              <img
                className={`img-fluid ${animationClass}`}
                src={image}
                alt="Image First"
                style={{
                  maxWidth: "200px",
                  borderRadius: "20px",
                  border: "5px solid transparent",
                  opacity: 0,
                }}
              />

              <div
                class={`author-info mt-5 ${animationClass}`}
                style={{ opacity: 0 }}
              >
                <h5 className="card-title name">{name}</h5>
                <p className="card-text title">{role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item ">
          <div className="skill-box">
            <span className="title fw-bold">Skill Development</span>

            <div className="skill-bar ">
              <span
                className={`skill-per nodejs ${animationClass1}`}
                style={{ width: `${skillDevelopment}%` }}
              >
                <span className="tooltip1">{skillDevelopment}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Work Satisfaction</span>
            <div className="skill-bar">
              <span
                className={`skill-per javascript ${animationClass1}`}
                style={{ width: `${workSatisfaction}%` }}
              >
                <span className="tooltip1">{workSatisfaction}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Work Life Balance</span>
            <div className="skill-bar">
              <span
                className={`skill-per nodejs ${animationClass1}`}
                style={{ width: `${workLife}%` }}
              >
                <span className="tooltip1">{workLife}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Job Security</span>
            <div className="skill-bar">
              <span
                className={`skill-per reactjs ${animationClass1}`}
                style={{ width: `${jobSecurity}%` }}
              >
                <span className="tooltip1">{jobSecurity}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Salary Benefits</span>
            <div className="skill-bar">
              <span
                className={`skill-per expressjs ${animationClass1}`}
                style={{ width: `${salaryBenefit}%` }}
              >
                <span className="tooltip1">{salaryBenefit}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Company Culture</span>
            <div className="skill-bar">
              <span
                className={`skill-per culture ${animationClass1}`}
                style={{ width: `${companyCulture}%` }}
              >
                <span className="tooltip1">{companyCulture}%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title fw-bold">Promotion/Appraisal</span>
            <div className="skill-bar">
              <span
                className={`skill-per promotion ${animationClass1}`}
                style={{ width: `${promotion}%` }}
              >
                <span className="tooltip1">{promotion}%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ComponentCall.propTypes = {
  handleBeforeChange: PropTypes.func.isRequired,
  handleAfterChange: PropTypes.func.isRequired,
  animationClass: PropTypes.string.isRequired,
  animationClass1: PropTypes.string.isRequired,
};


export default ComponentCall;
