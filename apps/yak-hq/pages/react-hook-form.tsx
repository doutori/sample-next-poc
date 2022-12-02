import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './tailwind'
import { MainLayout } from '../src/layouts/main'

// ReactHookForm の ValueObject は zod schema で定義
const schema = z.object({
  pharmacy_name: z.string(),
  kind: z.string(),
})

type Schema = z.infer<typeof schema>

export default function ReactHookForm() {
  const { handleSubmit, register } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data)

  return (
    <MainLayout>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <label htmlFor="pharmacy_name">薬局名</label>
          <input
            type="text"
            className="border border-gray-500 rounded"
            {...register('pharmacy_name')}
          />
        </div>

        <fieldset>
          <legend>事業の種類</legend>
          <div className="flex gap-3">
            <label>
              <input {...register('kind')} type="radio" value="0" />
              法人
            </label>
            <label>
              <input {...register('kind')} type="radio" value="1" />
              個人
            </label>
          </div>
        </fieldset>

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </MainLayout>
  )
}
