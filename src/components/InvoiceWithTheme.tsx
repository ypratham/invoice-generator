"use client";
import React, { useState, useRef } from "react";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import InvoiceThemeFirst from "./theme/InvoiceThemeFirst";
import InvoiceThemeSecond from "./theme/InvoiceThemeSecond";
import InvoiceThemeThird from "./theme/ThemeThird";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import SpotifyInvoiceTheme from "./theme/InvoiceSpotify";


const InvoiceWithThemes = () => {
  const [currentTheme, setCurrentTheme] = useState("theme1");
  const data = useInvoiceStore((state) => state.data);
  const invoiceRef = useRef<HTMLDivElement>(null);

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

  const downloadPDF = async () => {
    if (invoiceRef.current) {
      const canvas = await html2canvas(invoiceRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    }
  };

  return (
    <div className="max-w-4xl mt-0  ">
      <div className="mb-6 flex justify-between items-center">
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
        <Button onClick={downloadPDF}>Download PDF</Button>
      </div>
      <div ref={invoiceRef}>
        {renderInvoice()}
      </div>
    </div>
  );
};

export default InvoiceWithThemes;


