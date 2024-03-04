import React from "react";
import "./SemiEngg.css";
import { Icon } from "@iconify/react";
import HeadSection from "./HeadSection";
import semi1 from './assets/semi1.jpg'
import tech from './assets/tech.jpg'
import one from './assets/1.png'
import two from './assets/2.png'
import three from './assets/3.png'
import sm1 from './assets/sm1.jpg'
import sm3 from './assets/sm3.png'
import case2 from './assets/case2.jpg'




const SemiEngg = () => {
  

  return (
    <>
    <section class="wrapper bg-soft-primary">
    <HeadSection
          header1="Semiconductor Engineering"
          header2="Administrations oblige a scope of requirements including System"
          imageUrl={semi1}
        />
        
      </section>
      
      <div className="container pt-md-16"></div>

      <section className="wrapper bg-light">
        <div className="container pt-md-14 pt-8 pt-md-16">
          <div className="row">
            <div className="col-lg-12 mb-10">
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-6">
                  <p className="lead">
                    The Semiconductor administrations of TechsoC give
                    configuration administrations and arrangements in the space
                    of Design Verification, UVM, Gate Level Simulation,
                    Emulation, Formal Verification, DFT, Pre and Post Silicon
                    Validation, AMS Verification and SystemC Modeling.
                  </p>
                  <p className="lead">
                    Our architects have insight in full chip and module level
                    signoff of static planning examination, dynamic and spillage
                    power, formal confirmation and actual check, low power plan
                    Implementation.
                  </p>
                </div>
                <div className="col-xl-6">
                  <p className="lead">
                    Our ASIC solutions offer mixed-signal, high precision, high
                    voltage, and ultra-low power technologies primarily within
                    IoT, intelligent tracking, and medical applications, used
                    for digitization and integration of sensor-based ASICs.
                    Additionally, our solutions include comprehensive packaging.
                  </p>
                  <p className="lead">
                    We also have significant expertise in SRAM and non-volatile
                    emerging memories for leading edge technology nodes. We
                    leverage state of the art synthesis flows in order to
                    minimize design risk and layout effort for an accelerated
                    time to market, for products which have traditionally shied
                    away from such innovation. This along with our unique
                    top-down design and verification strategy has allowed us to
                    maintain a perfect track record of First-Time-Right
                    execution.
                  </p>
                  <p className="lead">
                    Our in-house experts have decades of experience in design,
                    layout, testing and manufacturing. Our product development
                    takes into account Design for Test (DfT) and Design for
                    Manufacturability (DfM) from the initial specification, so
                    that production costs can be minimized through intelligent
                    test strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a id="offerings"></a>
      <section
        className="wrapper image-wrapper bg-image bg-overlay movImage"
        style={{
          backgroundImage:
            `url(${tech})`,
        }}
      >
        <div className="container py-18">
          <div className="row text-center">
            <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
              <h3 className="display-4 mb-0 text-white px-lg-5 px-xxl-0">
                Our Technical Competence
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container pt-md-8 pt-8 pt-md-0">
          <div className="row">
            <div className="col-lg-12 mb-10">
              <div className="card col-12 h-100">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link active flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-1"
                      >
                        <img
                          src={one}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          ASIC Design and Verification
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-2"
                      >
                        <img
                          src={two}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          PHYSICAL DESIGN AND DFT SERVICES
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          Emulation
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-0 mt-md-5">
                    <div className="tab-pane fade show active" id="tab3-1">
                      <div className="row">
                        <div className="col-md-8">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns ">
                            <li>
                              <Icon icon="flat-color-icons:ok" />System Verilog
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Based
                              Constrained Random Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Test Bench
                              Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SoC and IP
                              Functional Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Subsystem
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Formal
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Power Aware
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Performance Tests
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SystemC/TLM
                              Modelling
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />VIP Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Development
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={sm1}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-2">
                      <p>
                        With a team of specialized engineers of Physical Design,
                        DFT Synthesis, and STA, TechsoC can give you a one-stop
                        solution for building all kinds of next-generation
                        leadership products. We help customers accelerate their
                        end-to-end product development with our extensive design
                        capabilities.
                      </p>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-6 order-1 order-md-1">
                              <h4>Physical Design Services</h4>
                              <p>
                                Proficient in implementing complex ASICs in 7nm,
                                10nm, 14nm, 16nm and 28nm.
                              </p>
                            </div>
                            <div className="col-md-6 order-2 order-md-3">
                              <p>
                                <strong>
                                  Our physical design services cover the
                                  following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Die-size
                                  Estimation
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Floor Plan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Pad Ring &
                                  RDL
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Partition &
                                  Budgeting
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Power-grid
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-Power
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Block/Chip
                                  Level
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Clocking
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />DRC/LVS/DFM
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6 order-3 order-md-2">
                              <h4>DFT, Synthesis and STA</h4>
                              <p>
                                We have experience across various DFT Techniques
                                like Scan, ATPG, Bist, and Boundary Scan, then
                                make TechsoC your first choice.
                              </p>
                            </div>
                            <div className="col-md-6 order-4  order-md-4">
                              <p>
                                <strong>
                                  Our DFT Service suite includes the following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Insertion
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Compression
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />ATPG, MBIST
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />JTAG, B-Scan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Aware Synth
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Timing
                                  Closure
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />SI Analysis
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Formal
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-power
                                  Checks
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <img
                            src={sm3}
                            className="w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-3">
                      <div className="row">
                        <div className="col-md-8">
                          <p>
                            Experience bug free software with TechsoC’s test
                            automation frameworks and error diagnosis system.
                            Our team of competent engineers working in the STA
                            Emulation and Validation team are experts in
                            prototyping and emulating complex IC designs for
                            streamlined system debugging and software bring-up.
                            Be it board bring-up, development of test automation
                            frameworks, error diagnosis or system debug, our STA
                            Emulation and Validation Services team can provide
                            you with the most suitable solution.
                          </p>

                          <p>
                            Our distinguished team has experience in working
                            with various semiconductor industries across the
                            globe for System Level Testing, Signal Integrity,
                            Bench Marking, Test Content Development and
                            Automation.
                          </p>
                          <p>
                            <strong>
                              Our FPGA Emulation and Validation Portfolio
                              include the following services
                            </strong>
                          </p>
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns">
                            <li>
                              <Icon icon="flat-color-icons:ok" />GLS
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA design
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA prototyping
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Emulation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Post Silicon
                              Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />IP Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Protocol
                              Qualification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Processor Based
                              Emulation
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={case2}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="bg-dark text-inverse">
  <div className="container py-13 py-md-15">
    <div className="row gy-6 gy-lg-0">
      <div className="col-lg-4">
        <div className="widget">
          <p className="mb-4">© 2022 TechsoC. All rights reserved.</p>
          
          <!-- /.social -->
        </div>
        <!-- /.widget -->
      </div>
      <!-- /column -->
      
    </div>
    <!--/.row -->
  </div>
  <!-- /.container -->
</footer>  */}
    </>
  );
};

export default SemiEngg;
