import { styled } from '@stitches/react'
import { MainLayout } from '../src/layouts/main'
import { FC, PropsWithChildren } from 'react'

export default function Tailwind() {
  return (
    <MainLayout>
      <form className="flex flex-col gap-3">
        <div className="flex gap-2">
          <label htmlFor="email">薬局名</label>
          <input className="border round" name="pharmacy_name" type="text" />
        </div>

        <fieldset>
          <legend>事業の種類</legend>
          <div className="flex gap-3">
            <label>
              <input name="kind" type="radio" />
              法人
            </label>
            <label>
              <input name="kind" type="radio" />
              個人
            </label>
          </div>
        </fieldset>

        <div>
          <Button>Sign In</Button>
        </div>
      </form>
    </MainLayout>
  )
}

const Button: FC<PropsWithChildren> = ({ children }) => (
  <button className="text-white px-6 py-2 bg-sky-500 rounded">
    {children}
  </button>
)
