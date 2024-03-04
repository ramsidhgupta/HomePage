import React from "react";
import { useInView } from "react-intersection-observer";
import HeadSection from "./HeadSection";
import banner2 from './assets/banner2.jpg';
import turnkey from './assets/turnkey.jpg'

const TurnKey = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <>
      <section class="wrapper bg-soft-primary">
      <HeadSection
          header1="Turnkey"
          header2="We offer great END to End services for VLSI Design & Verification."
          imageUrl={banner2}
        />
        
      </section>

      <div class="container pt-md-16"></div>
      <section class="wrapper bg-light">
        <div class="container pt-md-14 pt-8 pt-md-16">
          <div class="row">
            <div class="col-md-6 mb-2">
              <p>
                We have proven experience of driving turnkey projects and ODC
                for Semiconductor product companies. With our experienced
                technical know how and stringent process, we have delivered
                dozen’s of tape outs with high quality
              </p>

              <p>
                We can uphold you as your minimal expense seaward advancement
                place, empowering you to zero in on your vital assets and
                passing on the remainder of the improvement work to us.
              </p>
            </div>
            <div class="col-md-6 mb-2">
              <p>
                TechsoC Systems works in executing ASIC configuration projects
                from determination to GDSII. We influence the times of
                involvement and specialized expertise to execute projects inside
                time and right at the first go. We can rapidly increase groups
                and oversee programs forcefully to guarantee speedy opportunity
                to market and superior grade.
              </p>
            </div>

            <div class="row mb-10">
              <div
                ref={ref2}
                className={`col-md-6 col-lg-6 ${
                  inView2 ? "animate__animated animate__fadeInLeft" : ""
                }`}
              >
                <h4> Benifits</h4>
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Technical excellence</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Cutting Edge solutions</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Less development times</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Reduced Risk</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Cost Saving</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>Bundled products e.g. IP, VIP</span>
                  </li>
                </ul>
              </div>
              <div
                ref={ref3}
                className={`col-md-6 col-lg-6 ${
                  inView3 ? "animate__animated animate__fadeInRight" : ""
                }`}
              >
                <h4>Areas of Expertise</h4>

                <ul class="icon-list bullet-bg bullet-soft-primary mb-0 ">
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>
                      Micro Architecture / RTL: - Have executed multiple
                      automotive and infotainment SoC
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>
                      Design Verification: - Executed complete verification of
                      smartphone SoC, display IC
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>
                      Analog & Mixed Signal: - Owned the complete SerDes, DDR
                      and PM design & Layout
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check"></i>
                    </span>
                    <span>
                      Physical Design: - Successfully tapeout multiple
                      Networking , Wireless and automotive SoCs at various Tech
                      nodes (45nm, 28nm, 16nm,7nm) with multiple foundries using
                      various implementation EDA tools
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="wrapper text-white"
        style={{ backgroundColor: "#e5af2b" }}
      >
        <div class="container py-10">
          <h3 class="text-white mb-5">Some of the key highlights includes</h3>
          <ul
            ref={ref}
            className={`icon-list bullet-bg bullet-soft-primary mb-0 two-columns ${
              inView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            <li>
              <span>
                <i class="uil uil-check"></i>
              </span>
              <span>
                Rich Legacy - Operational for over 15 years with several
                first-pass tape outs
              </span>
            </li>
            <li>
              <span>
                <i class="uil uil-check"></i>
              </span>
              <span>
                Over 600 Chip design & Embedded Software practitioners with a
                cross regional spread India
              </span>
            </li>
            <li>
              <span>
                <i class="uil uil-check"></i>
              </span>
              <span>
                Engagement models: ODCs, On-site Managed Services & Turnkey
                Fixed Price Projects
              </span>
            </li>
            <li>
              <span>
                <i class="uil uil-check"></i>
              </span>
              <span>
                Expertise in implementing complex SoCs / ASICs in 5nm, 7nm,
                10nm, 14nm, 16nm, 28nm and other older technology nodes
              </span>
            </li>
            <li>
              <span>
                <i class="uil uil-check"></i>
              </span>
              <span>
                Our Customers include: Global Top 20 Semiconductor and Systems
                Companies across North America, Europe and their counterparts in
                India
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section class="wrapper">
        <div class="container py-10">
          <h4>Offerings</h4>
          <p>
            We provide a comprehensive range of customized semiconductor
            solution to suit the specific requirements of the clients. Some of
            our semiconductor solutions include.
          </p>

          <div class="row">
            <div class="col-md-8 mb-5">
              <p>
                TechsoC is a worldwide semiconductor administrations and
                arrangements supplier and helps its clients' address
                market-driven difficulties. We work intimately with a few
                incorporated gadget makers (IDMs), fabless Semiconductor
                Companies, Original gear makers, Pure Play foundries,
                Engineering Design computerization (EDA) and IP sellers to speed
                up their items to the market.
              </p>

              <p>
                Our ability in VLSI plan and confirmation administrations can
                change your item thoughts into practical, strong, execution and
                region streamlined System-on-Chip (SoC). We take special care of
                the developing requests of the 5G, Data Center Infrastructure,
                Automotive, Consumer Electronics and Industrial business
                sectors.
              </p>
            </div>
            <div
              ref={ref}
              className={`col-md-4 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <img
                src={turnkey}
                class="w-100 rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TurnKey;
