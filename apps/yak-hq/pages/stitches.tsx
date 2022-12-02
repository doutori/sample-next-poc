import { styled } from '@stitches/react'
import { MainLayout } from '../src/layouts/main'

export default function Stitches() {
  return (
    <MainLayout>
      <Form>
        <div style={{ display: 'flex', gap: '12px' }}>
          <label htmlFor="email">薬局名</label>
          <input name="pharmacy_name" type="text" />
        </div>

        <fieldset>
          <legend>事業の種類</legend>
          <div style={{ display: 'flex', gap: '20px' }}>
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
      </Form>
    </MainLayout>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '12px',
  border: 0,
  padding: '12px 32px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})
