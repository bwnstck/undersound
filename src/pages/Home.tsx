import Image from 'next/image'

import ImageContainer from '$components/ImageContainer'

import styled from 'styled-components'

// import { getData } from '$lib/data'
// import authors from '$meta/authors.yml'
// import { AuthorContent } from '$types/data'
const LandingPage = () => {
  // const author = getData({ data: authors, slug: 'luis' }) as AuthorContent

  return (
    <PageWrapper backgroundUrl={'/images/background.png'}>
      <ImageWrapper>
        <Image src={'/images/logo.svg'} alt="Logo" width={300} height={150} />
      </ImageWrapper>
    </PageWrapper>
  )
}

export default LandingPage

const PageWrapper = styled(ImageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

// const Title = styled.h1`
//   text-align: center;
//   padding: 0;
// `
const ImageWrapper = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;

  > div {
    transition: all 300ms;
    :hover {
      transform: scale(0.9) translateY(40px);
    }
  }
`

// const Paragraph = styled.p`
//   text-align: center;
// `
