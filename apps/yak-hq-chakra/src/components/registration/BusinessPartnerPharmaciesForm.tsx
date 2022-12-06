import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { schema, Schema } from './BusinessPartnerPharmaciesForm.schema'

export const BusinessPartnerPharmaciesForm: FC = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = (values) => console.log(values)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={6} align="stretch">
        <Box>
          <FormControl>
            <FormLabel htmlFor="name">薬局名</FormLabel>
            <Input id="name" placeholder="MICIN薬局" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl as="fieldset">
            <FormLabel as="legend">事業の種類</FormLabel>
            <Controller
              name="kind"
              control={control}
              render={({ field }) => {
                const { onChange, value } = field
                return (
                  <RadioGroup onChange={onChange} value={value}>
                    <HStack spacing={4}>
                      <Radio value="1">法人</Radio>
                      <Radio value="2">個人</Radio>
                    </HStack>
                  </RadioGroup>
                )
              }}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel htmlFor="name">法人名</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel htmlFor="name">法人名フリガナ</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel htmlFor="name">法人名英語表記</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel htmlFor="name">法人番号（法人マイナンバー）</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel htmlFor="name">代表役職名・肩書</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>代表者名</FormLabel>
            <HStack spacing={4}>
              <Input id="name" placeholder="姓" {...register('name')} />
              <Input id="name" placeholder="名" {...register('name')} />
            </HStack>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>代表者名フリガナ</FormLabel>
            <HStack spacing={4}>
              <Input id="name" placeholder="セイ" {...register('name')} />
              <Input id="name" placeholder="メイ" {...register('name')} />
            </HStack>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>電話番号（ハイフン不要）</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>

          <Text color="gray.N600" as="small">
            ※日中ご連絡が可能な電話番号をご記入ください。
          </Text>
        </Box>

        <Box>
          <FormControl>
            <FormLabel>申込者（担当者）メールアドレス</FormLabel>
            <Input id="name" {...register('name')} />
          </FormControl>
        </Box>

        <Text>所在地</Text>

        <Box>
          <Button
            colorScheme="green"
            mt={4}
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </VStack>
    </form>
  )
}
