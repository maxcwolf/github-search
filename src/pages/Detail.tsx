/** @jsxImportSource theme-ui */
import { ReactNode } from 'react'
import { Avatar, Container, Divider, Flex, Link, Paragraph, Text } from 'theme-ui'
import { useObservable } from '../hooks'
import { repo$ } from '../observables'

type DetailFieldProps = {
  title: string
  children: ReactNode
}
const DetailField = ({ children, title }: DetailFieldProps) => (
  <Flex>
    <Text sx={{ fontWeight: 'light', mr: 2 }}>{title}</Text>
    <Text sx={{ fontWeight: 'semibold', fontStyle: 'italic' }}>{children}</Text>
  </Flex>
)

export const Detail = () => {
  const repo = useObservable(repo$)
  return (
    <Container>
      <Flex sx={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', width: ['100%', '50%'] }}>
          <Flex sx={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text sx={{ fontSize: 5 }}>Repo Details</Text>
          </Flex>
          <Divider />
          <Flex
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              mb: 3,
            }}
          >
            <Link sx={{ fontSize: 4, color: 'dark' }} href={repo?.url}>
              {repo?.name}
            </Link>
            <a href={repo?.owner.url}>
              <Avatar src={repo?.owner.avatarUrl} />
            </a>
          </Flex>
          <Flex sx={{ flexDirection: 'column', justifyContent: 'center', mb: 2 }}>
            <DetailField title="Owner: ">
              {<Link href={repo?.owner.url}>repo?.owner.login</Link>}
            </DetailField>
            <DetailField title="Primary Language:">{repo?.primaryLanguage?.name}</DetailField>
            <DetailField title="Stars: ">{repo?.stargazers.totalCount}</DetailField>
          </Flex>
          <Flex>
            <Paragraph>{repo?.description}</Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
