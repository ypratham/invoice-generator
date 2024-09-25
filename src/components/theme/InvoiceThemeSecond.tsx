import React from "react";
import { format } from "date-fns";
import { TInvoiceSchema } from "@/types/formSchema";

const InvoiceThemeSecond = ({ data }: { data: TInvoiceSchema }) => {
  return (
    <div className="max-w-3xl bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
      <div className="px-8 py-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-3xl font-light text-gray-800 mb-2">
              {data.business?.name || "Panda, Inc"}
            </h1>
            <p className="text-sm text-gray-500">
              {data.business?.email || "ypratham0014@gmail.com"}
            </p>
            <p className="text-sm text-gray-500">
              {data.business?.phoneNumber || "+91 8356943220"}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-light text-gray-800 mb-2">INVOICE</h2>
            <p className="text-sm text-gray-500">
              Invoice #: {data.invoiceId || "INV-001"}
            </p>
            <p className="text-sm text-gray-500">
              Date:{" "}
              {data.invoiceDate
                ? format(new Date(data.invoiceDate), "dd MMMM yyyy")
                : "DD MMMM YYYY"}
            </p>
            <p className="text-sm text-gray-500">
              Due Date:{" "}
              {data.dueDate
                ? format(new Date(data.dueDate), "dd MMMM yyyy")
                : "DD MMMM YYYY"}
            </p>
          </div>
        </div>

        {/* Business and Client Details */}
        <div className="flex justify-between mb-12">
          <div>
            <h3 className="text-lg font-light text-gray-800 mb-2">From:</h3>
            <p className="text-sm text-gray-600">
              {data.business?.name || "Panda, Inc"}
            </p>
            <p className="text-sm text-gray-600">
              {data.business?.address || "Business Address"}
            </p>
            <p className="text-sm text-gray-600">
              City, State IN - {data.business?.zipCode || "00000"}
            </p>
            <p className="text-sm text-gray-600">
              TAX ID: {data.business?.taxId || "00XXXXX1234X0XX"}
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-light text-gray-800 mb-2">To:</h3>
            <p className="text-sm text-gray-600">
              {data.company?.name || "Client Name"}
            </p>
            <p className="text-sm text-gray-600">
              {data.company?.email || "client@example.com"}
            </p>
            <p className="text-sm text-gray-600">
              {data.company?.address || "Client Address"}
            </p>
          </div>
        </div>

        {/* Invoice Items */}
        <table className="w-full mb-12">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left text-sm font-normal text-gray-600">
                Item
              </th>
              <th className="py-3 text-left text-sm font-normal text-gray-600">
                Description
              </th>
              <th className="py-3 text-right text-sm font-normal text-gray-600">
                Qty
              </th>
              <th className="py-3 text-right text-sm font-normal text-gray-600">
                Rate
              </th>
              <th className="py-3 text-right text-sm font-normal text-gray-600">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.items?.map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 text-sm text-gray-800">{item.name}</td>
                <td className="py-3 text-sm text-gray-600">
                  {item.description}
                </td>
                <td className="py-3 text-right text-sm text-gray-800">
                  {item.quantity}
                </td>
                <td className="py-3 text-right text-sm text-gray-800">
                  ${item.rate}
                </td>
                <td className="py-3 text-right text-sm text-gray-800">
                  ${item.quantity * item.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="flex justify-end mb-12">
          <div className="w-1/3">
            <div className="flex justify-between py-2">
              <span className="text-sm text-gray-600">Subtotal:</span>
              <span className="text-sm text-gray-800">
                $
                {data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-gray-600">
                Tax ({data.tax || 0}%):
              </span>
              <span className="text-sm text-gray-800">
                $
                {(data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                ) *
                  (data.tax || 0)) /
                  100}
              </span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-200">
              <span className="text-base font-medium text-gray-800">
                Total:
              </span>
              <span className="text-base font-medium text-gray-800">
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

        {/* Notes */}
        {data.note && (
          <div className="mb-12">
            <h3 className="text-lg font-light text-gray-800 mb-2">Notes:</h3>
            <p className="text-sm text-gray-600">{data.note}</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceThemeSecond;
