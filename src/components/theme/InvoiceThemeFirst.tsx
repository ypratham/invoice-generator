import React from "react";
import { format } from "date-fns";
import { TInvoiceSchema } from "@/types/formSchema";

const InvoiceThemeFirst = ({ data }: { data: TInvoiceSchema }) => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {data.business?.name || "Panda, Inc"}
            </h1>
            <p className="text-sm text-gray-600">
              {data.business?.email || "ypratham0014@gmail.com"}
            </p>
            <p className="text-sm text-gray-600">
              {data.business?.phoneNumber || "+91 8356943220"}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              INVOICE
            </h2>
            <p className="text-sm text-gray-600">
              Invoice #: {data.invoiceId || "INV-001"}
            </p>
            <p className="text-sm text-gray-600">
              Date:{" "}
              {data.invoiceDate
                ? format(new Date(data.invoiceDate), "dd/MM/yyyy")
                : "DD/MM/YYYY"}
            </p>
            <p className="text-sm text-gray-600">
              Due Date:{" "}
              {data.dueDate
                ? format(new Date(data.dueDate), "dd/MM/yyyy")
                : "DD/MM/YYYY"}
            </p>
          </div>
        </div>

        {/* Business and Client Details */}
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">From:</h3>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">To:</h3>
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
        <table className="w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                Item
              </th>
              <th className="py-2 px-4 text-right text-sm font-semibold text-gray-700">
                Qty
              </th>
              <th className="py-2 px-4 text-right text-sm font-semibold text-gray-700">
                Rate
              </th>
              <th className="py-2 px-4 text-right text-sm font-semibold text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.items?.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">
                  <div className="text-sm text-gray-700">{item.name}</div>
                  {item.description && (
                    <div className="text-xs  w-3/5 text-gray-600 mt-1">
                      {item.description}
                    </div>
                  )}
                </td>
                <td className="py-2 px-4 text-right text-sm text-gray-700">
                  {item.quantity}
                </td>
                <td className="py-2 px-4 text-right text-sm text-gray-700">
                  ${item.rate}
                </td>
                <td className="py-2 px-4 text-right text-sm text-gray-700">
                  ${item.quantity * item.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="flex justify-end mb-8">
          <div className="w-1/3">
            <div className="flex justify-between py-2">
              <span className="text-sm font-semibold text-gray-700">
                Subtotal:
              </span>
              <span className="text-sm text-gray-700">
                $
                {data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-semibold text-gray-700">
                Tax ({data.tax || 0}%):
              </span>
              <span className="text-sm text-gray-700">
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
              <span className="text-base font-semibold text-gray-800">
                Total:
              </span>
              <span className="text-base font-semibold text-gray-800">
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
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Notes:</h3>
            <p className="text-sm text-gray-600">{data.note}</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          <p>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceThemeFirst;
