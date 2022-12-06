import { Container } from '@chakra-ui/react'
import { Box, Center } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box>
    <Box px={4} py={6} bg="gray.N50" as="header">
      Header
    </Box>
    <Container py={6} as="main">
      {children}
    </Container>
    <Center py={6} bg="gray.N50" as="footer">
      Footer
    </Center>
  </Box>
)

export default BaseLayout
