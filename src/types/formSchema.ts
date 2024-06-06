import z from "zod"
export const invoiceSchema = z.object({
    company: z.object({
        name: z.string(),
        address: z.string(),
        email: z.string()
    }),
    business: z.object({
        name: z.string(),
        address: z.string(),
        taxId: z.string(),
    }),
    invoiceId: z.string(),
    reference: z.string(),
    invoiceDate: z.date(),
    subject: z.string(),
    dueDate: z.date(),
    items: z.object({
        name: z.string(),
        description: z.string(),
        quantity: z.number(),
        rate: z.number(),
        amount: z.number(),
        discount: z.number(),
    }).array(),
    subtotal: z.number(),
    tax: z.number(),
    total: z.number(),
    note: z.string(),
});

export type TInvoiceSchema = z.infer<typeof invoiceSchema>;