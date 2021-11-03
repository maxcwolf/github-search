import { ReactNode } from 'react'
import { Container } from 'theme-ui'
import { LayoutHeader } from './LayoutHeader'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Container sx={{ height: 'screenHeight' }}>
    <LayoutHeader />
    {children}
  </Container>
)
