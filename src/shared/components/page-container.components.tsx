import { Container, ContainerProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

type PageContainerProps = PropsWithChildren &
  Pick<ContainerProps, 'component' | 'maxWidth'>
export const PageContainer: FC<PageContainerProps> = ({
  children,
  component = 'main',
  maxWidth = 'xl',
}) => {
  const props = { component, maxWidth }
  return <Container {...props}>{children}</Container>
}
