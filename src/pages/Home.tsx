import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Fade } from 'react-slideshow-image'

import Image from 'next/image'

import Footer from '$components/Footer'

import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

import FooterContent from '$meta/footerContent.yml'
import HomeContent from '$meta/home.yml'

export type MetaState = 'notShown' | 'impress' | 'dataSecurity'

const LandingPage = () => {
  const [showImpress, setShowImpress] = useState<MetaState>('notShown')

  const impressRef = useRef(null)
  const dataSecurityRef = useRef(null)

  const handleShowMeta = (type: MetaState) => {
    if (type === 'impress') {
      setShowImpress('impress')
    }
    if (type === 'dataSecurity') {
      setShowImpress('dataSecurity')
    }
    if (type === 'notShown') {
      setShowImpress('notShown')
    }
    if (showImpress !== 'notShown') {
      setTimeout(() => {
        impressRef.current?.scrollIntoView({ behavior: 'smooth' })
        dataSecurityRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
  return (
    <>
      <TitleWrapper>
        <Image src={'/images/logo.svg'} alt="Logo" width={363} height={189} />
      </TitleWrapper>
      <SlideContainer className="slide-container">
        <Fade
          duration={5000}
          transitionDuration={1000}
          arrows={false}
          cssClass={'Fader'}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((slideNr) => (
            <div className="each-fade" key={slideNr}>
              <Image
                src={`/images/slides/slide_${slideNr}.png`}
                alt="slide"
                height={740}
                width={1440}
              />
            </div>
          ))}
        </Fade>
      </SlideContainer>
      <ContentWrapper>
        <Body>{HomeContent.body}</Body>
      </ContentWrapper>
      <SurveyWrapper>
        <iframe
          src={HomeContent.surveyUrl}
          width={'100%'}
          height={1500}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Wird geladen…
        </iframe>
      </SurveyWrapper>
      <Footer onSetImpress={handleShowMeta} />
      <ImpressWrapper visible={showImpress === 'impress'} ref={impressRef}>
        <TitleAndClose>
          <h3>Impressum</h3>
          <button onClick={() => handleShowMeta('notShown')}>X</button>
        </TitleAndClose>
        <Body>{FooterContent.impressBody}</Body>
      </ImpressWrapper>
      <DataSecurityWrapper
        visible={showImpress === 'dataSecurity'}
        ref={dataSecurityRef}
      >
        <TitleAndClose>
          <h3>Datenschutz</h3>
          <button onClick={() => handleShowMeta('notShown')}>X</button>
        </TitleAndClose>
        <Body>{FooterContent.dataSecurityBody}</Body>
      </DataSecurityWrapper>
    </>
  )
}

export default LandingPage

const SlideContainer = styled.div`
  .Fader {
    height: 51vw;
    div {
      width: 100vw;
    }
    img {
      width: 100%;
      background-position: center !important;
      background-size: cover !important;
    }
  }
`

interface ImpressProps {
  visible: boolean
}
const ImpressWrapper = styled.div<ImpressProps>`
  display: ${(props) => (props.visible ? 'inherit' : 'none')};
  background-color: white;
  padding: 1rem 2rem;
`

const DataSecurityWrapper = styled(ImpressWrapper)``

const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: calc(25vw - 95px);
  left: 0;
  right: 0;
  z-index: 100;

  padding: 1rem;

  img {
    max-width: 660px !important;
    width: 62vw;
  }
`
const TitleAndClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: 0;
    font-size: 2.5rem;
  }
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
const ContentWrapper = styled.div`
  /* width: 90%; */
  background-color: var(--color-white);
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`
const SurveyWrapper = styled(ContentWrapper)`
  background-color: var(--color-cta);
`
