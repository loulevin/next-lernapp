import { z } from 'zod';


const vocabelObjectSchema = z.object({
    japanese: z.string().min(1).max(10),
    reading: z.string().min(1).max(20),
    kanji: z.string().min(1).max(10),
    translate: z.string().min(1).max(30),
    level: z.string().min(1).max(10),
})

const vocabelArraySchema = z.array(vocabelObjectSchema)

type vocabelType = z.infer<typeof vocabelArraySchema>

export { vocabelArraySchema as vocabelSchema }

export type { vocabelType }