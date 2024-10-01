import React from "react";
import { format } from "date-fns";
import { TInvoiceSchema } from "@/types/formSchema";
import { UserIcon, CalendarIcon, File } from "lucide-react";

export default function SpotifyInvoiceTheme({
  data,
}: {
  data: TInvoiceSchema;
}) {
  return (
    <div className="w-[500px] h-[700px] mx-auto bg-[#121212] text-white rounded-xl shadow-2xl overflow-hidden">
      <div className="h-full overflow-y-auto p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#1DB954] mb-2">
              {data.business?.name || "Panda, Inc"}
            </h1>
            <p className="text-xs text-gray-400">
              {data.business?.email || "ypratham0014@gmail.com"}
            </p>
            <p className="text-xs text-gray-400">
              {data.business?.phoneNumber || "+91 8356943220"}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold mb-2">INVOICE</h2>
            <p className="text-xs text-gray-400">
              #{data.invoiceId || "INV-001"}
            </p>
            <p className="text-xs text-gray-400">
              {data.invoiceDate
                ? format(new Date(data.invoiceDate), "dd/MM/yyyy")
                : "DD/MM/YYYY"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#282828] p-3 rounded-lg">
            <h3 className="text-sm font-semibold mb-2 flex items-center">
              <File className="mr-2 text-[#1DB954] h-4 w-4" /> From:
            </h3>
            <p className="text-xs text-gray-300">
              {data.business?.name || "Panda, Inc"}
            </p>
            <p className="text-xs text-gray-300">
              {data.business?.address || "Business Address"}
            </p>
            <p className="text-xs text-gray-300">
              City, State IN - {data.business?.zipCode || "00000"}
            </p>
            <p className="text-xs text-gray-300">
              TAX ID: {data.business?.taxId || "00XXXXX1234X0XX"}
            </p>
          </div>
          <div className="bg-[#282828] p-3 rounded-lg">
            <h3 className="text-sm font-semibold mb-2 flex items-center">
              <UserIcon className="mr-2 text-[#1DB954] h-4 w-4" /> To:
            </h3>
            <p className="text-xs text-gray-300">
              {data.company?.name || "Client Name"}
            </p>
            <p className="text-xs text-gray-300">
              {data.company?.email || "client@example.com"}
            </p>
            <p className="text-xs text-gray-300">
              {data.company?.address || "Client Address"}
            </p>
          </div>
        </div>

        <div className="bg-[#282828] rounded-lg overflow-hidden mb-6">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1DB954] text-black">
                <th className="py-2 px-3 text-left text-xs">Item</th>
                <th className="py-2 px-3 text-right text-xs">Qty</th>
                <th className="py-2 px-3 text-right text-xs">Rate</th>
                <th className="py-2 px-3 text-right text-xs">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.items?.map((item, index) => (
                <tr key={index} className="border-b border-[#3E3E3E]">
                  <td className="py-2 px-3">
                    <div className="text-xs">{item.name}</div>
                    {item.description && (
                      <div className="text-[10px] text-gray-400 mt-1">
                        {item.description}
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-3 text-right text-xs">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-3 text-right text-xs">${item.rate}</td>
                  <td className="py-2 px-3 text-right text-xs">
                    ${item.quantity * item.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-6">
          <div className="w-1/2 bg-[#282828] p-3 rounded-lg">
            <div className="flex justify-between py-1">
              <span className="text-xs font-semibold">Subtotal:</span>
              <span className="text-xs">
                $
                {data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-xs font-semibold">
                Tax ({data.tax || 0}%):
              </span>
              <span className="text-xs">
                $
                {(data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                ) *
                  (data.tax || 0)) /
                  100}
              </span>
            </div>
            <div className="flex justify-between py-1 border-t border-[#3E3E3E] mt-2">
              <span className="text-sm font-semibold text-[#1DB954]">
                Total:
              </span>
              <span className="text-sm font-semibold text-[#1DB954]">
                $
                {data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                ) *
                  (1 + (data.tax || 0) / 100)}
              </span>
            </div>
          </div>
        </div>

        {data.note && (
          <div className="bg-[#282828] p-3 rounded-lg mb-6">
            <h3 className="text-sm font-semibold mb-2 flex items-center">
              <CalendarIcon className="mr-2 text-[#1DB954] h-4 w-4" /> Notes:
            </h3>
            <p className="text-xs text-gray-300">{data.note}</p>
          </div>
        )}

        <div className="text-center text-xs text-gray-400">
          <p>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
}
