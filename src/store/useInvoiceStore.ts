import { TInvoiceSchema } from "@/types/formSchema";
import { create } from "zustand";

type State = {
  data: TInvoiceSchema;
};

type Actions = {
  updateState: (state: TInvoiceSchema) => void;
  updateTotal: () => void;
  updateSubtotal: () => void;
  updateBusinessInfo?: () => void;
  updateCompanyInfo?: () => void;
  updateInvoiceInfo?: () => void;
};

export const useInvoiceStore = create<State & Actions>((set) => ({
  data: {
    business: {
      address: "",
      name: "",
      taxId: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
    },
    company: {
      address: "",
      name: "",
      email: "",
    },
    dueDate: new Date(),
    invoiceDate: new Date(),
    items: [],
    invoiceId: "",
    reference: "",
    note: "",
    subject: "",
    subtotal: 0,
    total: 0,
    tax: 0,
  },
  updateState: (payload: TInvoiceSchema) =>
    set(() => ({
      data: payload,
    })),
  updateTotal: () =>
    set((state) => ({
      data: {
        ...state.data,
        total: state.data.subtotal + state.data.tax,
      },
    })),
  updateSubtotal() {
    return set((state) => {
      const t = state.data.items.map(
        (item) => item.amount * item.quantity - item.discount
      );

      return {
        data: {
          ...state.data,
          subtotal: t.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ),
        },
      };
    });
  },
}));
