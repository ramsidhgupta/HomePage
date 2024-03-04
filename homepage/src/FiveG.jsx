import React from "react";
import { useInView } from "react-intersection-observer";
import HeadSection from "./HeadSection";
import fiveG from './assets/5g.png';
import fiveGone from './assets/5g1.jpg';
import fiveGtwo from './assets/5g2.jpg';
const FiveG = () => {
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <>
      <section class="wrapper bg-soft-primary">
        <HeadSection
          header1="5G Technologies"
          header2="Pool of programming and equipment specialists in 5G innovation."
          imageUrl={fiveG}
        />
      </section>
      <div class="container pt-md-16"></div>
      <section class="wrapper bg-light">
        <div class="container pt-md-14 pt-8 pt-md-16">
          <div class="row">
            <div class="col-md-6 mb-2" data-cue="slideInUp">
              <p class="lead">
                The Semiconductor administrations of TechsoC give configuration
                administrations and arrangements in the space of FGPA/ASIC
                Design, Design Verification, UVM, Gate Level Simulation,
                Emulation, Formal Verification, DFT, Pre and Post Silicon
                Validation, AMS Verification and SystemC Modeling.
              </p>

              <p class="lead">
                Our architects have insight in full chip and module level
                signoff of static planning investigation, dynamic and spillage
                power, formal confirmation and actual check, low power plan
                Implementation.
              </p>

              <p class="lead">
                Our administrations incorporate plan, prototyping and copying.
                We can deal with multi Fpga's, sheets, and various sellers and
                their families including XILINX, ALTERA and so forth. We have
                encounters in various connection points included AXI, AHB, SATA,
                UART, DDR, MAC, CAN, SPI, I2C and so on. We have offered types
                of assistance in various merchant streams, and devices like
                XILINX Vivado, ISE, Mentor Precision, Cadence Quickturn,
                Synopsys synplify and so on.
              </p>
              <div
                ref={ref3}
                className={`${
                  inView3 ? "animate__animated animate__fadeInLeft" : ""
                }`}
              >
                <img
                  src={fiveGone}
                  class="w-100 rounded mb-5"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </div>

              <p class="lead">
                We offer types of assistance like Full Chip/IP/Subsystem
                Verification Architecture improvement, Test Bench advancement,
                and for various processors. Approval can incorporate boundaries
                like idleness, throughput, execution, power-mindful utilitarian
                check. We additionally support Verification Flow and strategy,
                IP advancement check, confirmation signoff including code
                inclusion, utilitarian inclusion, declarations, Gate-level
                reproduction and so on.
              </p>
            </div>
            <div class="col-md-6 mb-2" data-cue="slideInUp">
              <p class="lead">
                TechsoC is equipped for offering talented types of assistance
                both in Front End and Backend DFT. Our DFT arrangement gives an
                entire scope of DFT stream from definition and design to silicon
                and incorporates MBIST, customary output, AC check, filter
                pressure, limit examine (JTAG), power-mindful test and ATPG.
              </p>
              <div
                ref={ref2}
                className={`${
                  inView2 ? "animate__animated animate__fadeInRight" : ""
                }`}
              >
                <img
                  src={fiveGtwo}
                  class="w-100 rounded mb-5"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              </div>
              <p class="lead">
                Exhaustively, it incorporates Test Methodology and Flow
                Development Scan Compression procedures including Scan, BIST,
                JTAG structure inclusion, exceptional test for complex IOs and
                IOs, ATPG Flow Development, inclusion examination and
                improvement, design recreations, power Aware Test Implementation
                and post-silicon support.
              </p>

              <p class="lead">
                {" "}
                The AMS check ranges of abilities incorporate
                Analog/inconsistent message block reenactments, Analog and
                contradicting message blocks utilizing Verilog-AMS
                demonstrating, contradicting message test seat advancements, AMS
                full-chip confirmation.
              </p>

              <p class="lead">
                {" "}
                Our group has specialized skill on various interaction hubs
                coordinated with innovation suppliers for 28nm, 20nm, 16nm, 10
                nm, 7nm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FiveG;
