"use client";

import React from "react";
import Banner from "./components/banner";
import Filter from "./components/filter/index";
// import DoctorProfile from "./components/doctorprofiile";
import DoctorCard from "./components/doctorCard";
import NameCard from "./components/NameHolder";

const page = () => {
  return (
    <div>
      {/* <Banner />
      <Filter />
      <DoctorCard /> */}
      {/* <DoctorProfile /> */}
      <NameCard />
    </div>
  );
};

export default page;
