import InvoiceForm from "@/components/InvoiceForm";
import InvoiceThemeF from "@/components/theme/InvoiceThemeF";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <section className="flex p-16 flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
          Open-Source <br /> Invoice Generator
        </h1>
      </section>

      <section className="flex  pb-12 items-start container justify-between">
        <InvoiceForm />
        <InvoiceThemeF />
      </section>
    </main>
  );
}
