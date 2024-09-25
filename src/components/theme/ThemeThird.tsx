import React from "react";
import { format } from "date-fns";
import { TInvoiceSchema } from "@/types/formSchema";

const InvoiceThemeThird = ({ data }: { data: TInvoiceSchema }) => {
  return (
    <div className="max-w-4xl bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-indigo-600 text-white p-8 md:w-auto ">
          <h1 className="text-4xl font-bold mb-6">
            {data.business?.name || "Panda, Inc"}
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">INVOICE</h2>
            <p className="text-sm opacity-80">#{data.invoiceId || "INV-001"}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Date Issued:</h3>
            <p className="text-sm opacity-80">
              {data.invoiceDate
                ? format(new Date(data.invoiceDate), "dd MMMM yyyy")
                : "DD MMMM YYYY"}
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Due Date:</h3>
            <p className="text-sm opacity-80">
              {data.dueDate
                ? format(new Date(data.dueDate), "dd MMMM yyyy")
                : "DD MMMM YYYY"}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Due:</h3>
            <p className="text-3xl font-bold">
              $
              {(
                data.items?.reduce(
                  (acc, item) => acc + item.quantity * item.rate,
                  0
                ) *
                (1 + (data.tax || 0) / 100)
              )}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 md:w-2/3">
          {/* Client Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Bill To:
            </h3>
            <p className="text-gray-600">
              {data.company?.name || "Client Name"}
            </p>
            <p className="text-gray-600">
              {data.company?.email || "client@example.com"}
            </p>
            <p className="text-gray-600">
              {data.company?.address || "Client Address"}
            </p>
          </div>

          {/* Invoice Items */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 text-left text-sm font-semibold text-gray-600">
                  Item
                </th>
                <th className="py-2 text-right text-sm font-semibold text-gray-600">
                  Qty
                </th>
                <th className="py-2 text-right text-sm font-semibold text-gray-600">
                  Rate
                </th>
                <th className="py-2 text-right text-sm font-semibold text-gray-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data.items?.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-3 text-sm text-gray-800">
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-500">
                      {item.description}
                    </div>
                  </td>
                  <td className="py-3 text-right text-sm text-gray-800">
                    {item.quantity}
                  </td>
                  <td className="py-3 text-right text-sm text-gray-800">
                    ${item.rate}
                  </td>
                  <td className="py-3 text-right text-sm text-gray-800">
                    ${(item.quantity * item.rate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div className="flex justify-end mb-8">
            <div className="w-1/2">
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">Subtotal:</span>
                <span className="text-sm text-gray-800">
                  $
                  {data.items
                    ?.reduce((acc, item) => acc + item.quantity * item.rate, 0)
                    }
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">
                  Tax ({data.tax || 0}%):
                </span>
                <span className="text-sm text-gray-800">
                  $
                  {(
                    (data.items?.reduce(
                      (acc, item) => acc + item.quantity * item.rate,
                      0
                    ) *
                      (data.tax || 0)) /
                    100
                  )}
                </span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-gray-300">
                <span className="text-base font-semibold text-gray-800">
                  Total:
                </span>
                <span className="text-base font-semibold text-gray-800">
                  $
                  {(
                    data.items?.reduce(
                      (acc, item) => acc + item.quantity * item.rate,
                      0
                    ) *
                    (1 + (data.tax || 0) / 100)
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          {data.note && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Notes:
              </h3>
              <p className="text-sm text-gray-600">{data.note}</p>
            </div>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-gray-500">
            <p>Thank you for your business!</p>
            <p className="mt-2">
              {data.business?.email} | {data.business?.phoneNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceThemeThird;
