import { extendTheme } from '@chakra-ui/theme-utils'

// NOTE: https://www.figma.com/file/1BHo35hMBOh4cTiKvnNxRW/MOMOdesignguideline?node-id=36%3A2&t=8pG8ZGT9dpZ3o5tH-0
export const theme = extendTheme({
  colors: {
    blue: {
      B50: '#EBF5FA',
      B200: '#B4DAED',
      B500: '#2097E5',
      B800: '#046CC2',
    },
    yellow: {
      Y50: '#FFFAEB',
      Y200: '#F7E5BC',
      Y500: '#E5A020',
      Y800: '#C27502',
    },
    red: {
      R50: '#FFF3F2',
      R200: '#FFBBB5',
      R600: '#E33B24',
      R800: '#C92208',
    },
    gray: {
      N50: '#F4F7FA',
      N200: '#D3DDE8',
      N400: '#93A3B5',
      N600: '#637182',
      N900: '#637182',
    },
    green: {
      G50: '#F0FAF5',
      G200: '#A7D1BB',
      G600: '#2BA168',
      G800: '#157A4B',
    },
  },
})
