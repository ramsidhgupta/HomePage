import React from "react";
import Layout from "./Layout";

import HomeFifth from "./HomeFifth";
import HomeFourth from "./HomeFourth";
import HomeSecond from "./HomeSecond";
import HomeSeventh from "./HomeSeventh";
import HomeSixth from "./HomeSixth";
import HomeThird from "./HomeThird";
import HomeFirst from "./HomeFirst";
import WhyTech from "./WhyTech";

export const Header = () => {
  return (
    <>
      <Layout>
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
        <HomeFourth />
        <HomeFifth />
        <HomeSixth />
        <WhyTech/>
        <HomeSeventh />
      </Layout>
    </>
  );
};
