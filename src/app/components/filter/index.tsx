"use client";
import React from "react";
import ExpertiseDropdown from "../expertise";
import GenderDropdown from "../gender";
import FeesDropdown from "../fees";
import LanguageDropdown from "../language";
import FilterDropdown from "../filter";

const index = () => {
  return (
    <div className="flex gap-[54px] self-center w-full justify-center py-4 border-y-[1px] border-[#EDEDED] ">
      <ExpertiseDropdown />
      <GenderDropdown />
      <FeesDropdown />
      <LanguageDropdown />
      <FilterDropdown />
    </div>
  );
};

export default index;
