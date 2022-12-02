import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Button,
  Container,
  Input,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  Stack,
  VStack,
} from '@chakra-ui/react'

const schema = z.object({
  pharmacy_name: z.string(),
  kind: z.string(),
})

type Schema = z.infer<typeof schema>

export default function Home() {
  const { handleSubmit, register } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const onSubmit: SubmitHandler<Schema> = (data) => console.log(data)

  return (
    <Container py={8}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6}>
          <Box w="100%">
            <FormControl>
              <FormLabel htmlFor="pharmacy_name">薬局名</FormLabel>
              <Input {...register('pharmacy_name')} />
            </FormControl>
          </Box>

          <Box w="100%">
            <FormControl as="fieldset">
              <FormLabel as="legend">事業の種類</FormLabel>
              <RadioGroup>
                <Stack spacing={4} direction="row">
                  <Radio {...register('kind')} value="0">
                    法人
                  </Radio>
                  <Radio {...register('kind')} value="1">
                    個人
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <Button>Submit</Button>
          </Box>
        </VStack>
      </form>
    </Container>
  )
}
