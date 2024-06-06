"use client";
import { useInvoiceStore } from "@/store/useInvoiceStore";

const InvoiceThemeF = () => {
  const data = useInvoiceStore((state) => state.data);

  return (
    <div className="col-span-auto">
      <div>
        <p>Panda, Inc</p>
        <p>ypratham0014@gmail.com</p>
        <p>+91 8356943220</p>
      </div>
      <div>
        <p>Business address</p>
        <p>City, State IN - 00000</p>
        <p>TAX ID 00XXXXX1234X0XX</p>
      </div>
    </div>
  );
};

export default InvoiceThemeF;
