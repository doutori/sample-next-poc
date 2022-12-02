import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Container,
  FormLabel,
  FormControl,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string(),
  kind: z.string(),
})

type Schema = z.infer<typeof schema>

export default function Sample() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ resolver: zodResolver(schema) })

  const onSubmit: SubmitHandler<Schema> = (values) => console.log(values)

  return (
    <Container py={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={6}>
          <Box w="100%">
            <FormControl>
              <FormLabel htmlFor="name">薬局名</FormLabel>
              <Input id="name" placeholder="MICIN薬局" {...register('name')} />
            </FormControl>
          </Box>
          <Box w="100%">
            <FormControl as="fieldset">
              <FormLabel as="legend">事業の種類</FormLabel>
              <Controller
                name="kind"
                control={control}
                render={({ field }) => {
                  const { onChange, value } = field
                  return (
                    <RadioGroup onChange={onChange} value={value}>
                      <Stack direction="row">
                        <Radio value="1">法人</Radio>
                        <Radio value="2">個人</Radio>
                      </Stack>
                    </RadioGroup>
                  )
                }}
              />
            </FormControl>
          </Box>
          <Box>
            <Button mt={4} isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Box>
        </VStack>
      </form>
    </Container>
  )
}
