import { z } from 'zod'

export const schema = z.object({
  name: z.string(),
  kind: z.string(),
})

export type Schema = z.infer<typeof schema>
