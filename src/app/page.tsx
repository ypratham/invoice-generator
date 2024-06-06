import InvoiceForm from "@/components/InvoiceForm";
import InvoiceThemeF from "@/components/theme/InvoiceThemeF";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  ">
      <section className="flex p-16 flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          Open-Source <br /> Invoice Generator
        </h1>
      </section>

      <section className="grid grid-cols-12">
        <InvoiceForm />
        <InvoiceThemeF />
      </section>
    </main>
  );
}
