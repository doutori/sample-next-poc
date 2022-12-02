import { styled } from '@stitches/react'
import { MainLayout } from '../src/layouts/main'

export default function Stitches() {
  return (
    <MainLayout>
      <Form>
        <div style={{ display: 'flex', gap: '12px' }}>
          <label htmlFor="pharmacy_name">薬局名</label>
          <TextInput name="pharmacy_name" type="text" />
        </div>

        <fieldset>
          <legend>事業の種類</legend>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label>
              <input name="kind" type="radio" value="0" />
              法人
            </label>
            <label>
              <input name="kind" type="radio" value="1" />
              個人
            </label>
          </div>
        </fieldset>

        <div>
          <Button>Submit</Button>
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

const TextInput = styled('input', {
  border: '1px solid #ddd',
  borderRadius: '0.25em',
})

const Button = styled('button', {
  color: 'white',
  backgroundColor: 'rgb(14 165 233)',
  borderRadius: '0.25em',
  border: 0,
  padding: '0.5em 1.5em',
})
