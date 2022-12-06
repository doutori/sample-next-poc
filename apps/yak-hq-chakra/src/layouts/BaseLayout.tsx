import { Container } from '@chakra-ui/react'
import { Box, Center } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box>
    <Box px={4} py={6} bg="gray.N50">
      <header>Header</header>
    </Box>
    <Container py={6}>
      <main>{children}</main>
    </Container>
    <Center py={6} bg="gray.N50">
      <footer>Footer</footer>
    </Center>
  </Box>
)

export default BaseLayout
