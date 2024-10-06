"use client";
import React, { useState } from "react";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InvoiceThemeFirst from "./theme/InvoiceThemeFirst";
import InvoiceThemeSecond from "./theme/InvoiceThemeSecond";
import InvoiceThemeThird from "./theme/ThemeThird";
import SpotifyInvoiceTheme from "./theme/InvoiceSpotify";

const InvoiceWithThemes = () => {
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const data = useInvoiceStore((state) => state.data);

  const renderInvoice = () => {
    switch (currentTheme) {
      case "theme1":
        return <InvoiceThemeFirst data={data} />;
      case "theme2":
        return <InvoiceThemeSecond data={data} />;
      case "theme3":
        return <InvoiceThemeThird data={data} />;
      case "theme4":
        return <SpotifyInvoiceTheme data={data} />;
      default:
        return <InvoiceThemeFirst data={data} />;
    }
  };

  return (
    <div className="max-w-4xl mt-0 mx-auto ">
      <div className="mb-6">
        <Select onValueChange={setCurrentTheme} defaultValue={currentTheme}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="theme1">Default Theme</SelectItem>
            <SelectItem value="theme2">Modern Theme</SelectItem>
            <SelectItem value="theme3">Colored Theme</SelectItem>
            <SelectItem value="theme4">Spotify Theme</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {renderInvoice()}
    </div>
  );
};

export default InvoiceWithThemes;
