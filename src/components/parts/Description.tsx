import ReactMarkdown from 'react-markdown'

import styled from 'styled-components'

import HomeContent from '$meta/home.yml'

const Description = () => {
  return (
    <ContentWrapper>
      <Body>{HomeContent.body}</Body>
    </ContentWrapper>
  )
}

export default Description

const ContentWrapper = styled.div`
  /* width: 90%; */
  background-color: var(--color-white);
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`

const Body = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  max-width: 600px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
`
