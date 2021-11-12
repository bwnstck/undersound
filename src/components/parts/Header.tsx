import { Fade } from 'react-slideshow-image'

import Image from 'next/image'

import styled from 'styled-components'

const Header = () => {
  return (
    <LandingWrapper>
      <TitleWrapper>
        <Image
          src={'/images/logo.svg'}
          alt="Logo"
          width={363}
          height={189}
          priority
        />
      </TitleWrapper>
      <SlideContainer className="slide-container">
        <Fade
          duration={3000}
          transitionDuration={1000}
          arrows={false}
          cssClass={'Fader'}
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((slideNr) => (
            <div className="each-fade" key={slideNr}>
              <Image
                src={`/images/slides/slide_${slideNr}.png`}
                alt="slide"
                height={1480}
                width={2880}
              />
            </div>
          ))}
        </Fade>
      </SlideContainer>
    </LandingWrapper>
  )
}

export default Header

const LandingWrapper = styled.div`
  position: relative;
`
const SlideContainer = styled.div`
  .Fader {
    height: 51vw;
  }
`
const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: calc(25vw - 95px);
  left: 0;
  right: 0;
  z-index: 100;

  padding: 1rem;

  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));

  img {
    max-width: 660px !important;
    width: 62vw;
  }
`
