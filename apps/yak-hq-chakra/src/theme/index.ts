import { extendTheme } from '@chakra-ui/theme-utils'
import { colors } from '~/theme/colors'
import { FormLabel } from '~/theme/components'

// NOTE: https://www.figma.com/file/1BHo35hMBOh4cTiKvnNxRW/MOMOdesignguideline?node-id=36%3A2&t=8pG8ZGT9dpZ3o5tH-0
export const theme = extendTheme({
  colors,
  components: {
    FormLabel,
  },
})
