"use client";
import React, { useState } from "react";
import { FancySwitch } from "@omit/react-fancy-switch";

const ThemeSwitch = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const options = ["apple", "banana", "cherry"];

  return (
    <FancySwitch
      options={options}
      value={selectedOption}
      onChange={() => {}}
      className="some-class"
      radioClassName="radio-button"
      highlighterClassName="highlighter"
    />
  );
};

export default ThemeSwitch;
