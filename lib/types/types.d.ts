import { z } from 'zod';


const vocabelSchema = z.object({
    japanese: z.string().min(1).max(10),
    reading: z.string().min(1).max(20),
    kanji: z.string().min(1).max(10),
    translate: z.string().min(1).max(30),
    level: z.string().min(1).max(10),
})

const vocabelSchema = z.array(vocabelSchema)

type vocabelType = z.infer<typeof vocabelSchema>

export { vocabelSchema }

export type { vocabelType }