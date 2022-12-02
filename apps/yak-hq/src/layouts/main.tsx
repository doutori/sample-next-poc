import type { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <main style={{ padding: '20px' }}>{children}</main>
)
