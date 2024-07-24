import { z } from 'zod';

export const AVALIABL_SIZE = ["S", "M", "L"] as const
export const AVALIABL_COLOR = ["white", "beige", "blue", "green", "purple"] as const
export const AVALIABL_SORT = ["none", "price-asc", "price-desc"] as const

export const ProductFilterValidater = z.object({
    size: z.array(z.enum(AVALIABL_SIZE)),
    color: z.array(z.enum(AVALIABL_COLOR)),
    sort: z.enum(AVALIABL_SORT),
    price: z.tuple([z.number(), z.number()]),
})

export type ProductState = Omit<z.infer<typeof ProductFilterValidater>, "price"> & {
    price: { isCustom: boolean, range: [number, number] }
}