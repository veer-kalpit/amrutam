"use client";
import React from "react";
import ExpertiseDropdown from "../expertise";
import GenderDropdown from "../gender";
import FeesDropdown from "../fees";
import LanguageDropdown from "../language";
import FilterDropdown from "../filter";

const Index = () => {
  return (
    <div className="flex flex-wrap gap-4 self-center w-full justify-center py-4 border-y-[1px] border-[#EDEDED]">
      {/* Dropdowns */}
      <ExpertiseDropdown />
      <GenderDropdown />
      <FeesDropdown />
      <LanguageDropdown />
      <FilterDropdown />
    </div>
  );
};

export default Index;
