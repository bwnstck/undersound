import ImageContainer from '../components/ImageContainer'

import styled from 'styled-components'

import social from '$meta/social.yml'
const Social = () => {
  return (
    <ImageContainer backgroundUrl={'/images/socialBackground.jpg'}>
      <Title>{social.title || 'Soziales'}</Title>
      <IconContainer>
        <SpotifyIcon href={social.spotify}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="spotify"
            className="svg-inline--fa fa-spotify"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
            ></path>
          </svg>
          <span>hören ja?</span>
        </SpotifyIcon>
        <BandCampIcon href={social.bandcamp}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="bandcamp"
            className="svg-inline--fa fa-bandcamp"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z"
            ></path>
          </svg>
          <span>kaufen pls</span>
        </BandCampIcon>
        <YoutubeIcon href={social.youtube}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            className="svg-inline--fa fa-youtube"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"
            ></path>
          </svg>
          <span>schau mal</span>
        </YoutubeIcon>
        <FacebookIcon href={social.facebook}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            className="svg-inline--fa fa-facebook"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
            ></path>
          </svg>
          <span>lez b frens</span>
        </FacebookIcon>
        <SoundCloudIcon href={social.soundcloud}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="soundcloud"
            className="svg-inline--fa fa-soundcloud"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#ff8800" />
                <stop offset="100%" stopColor="#ff3300" />
              </linearGradient>
            </defs>
            <path
              fill="url('#myGradient')"
              d="M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2 .8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1 .6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7 .6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3 .1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"
            ></path>
          </svg>
          <span>hören ja?</span>
        </SoundCloudIcon>
        <InstaIcon href={social.insta}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            className="svg-inline--fa fa-instagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <defs>
              <linearGradient id="myGradient2" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#405de6" />
                <stop offset="11%" stopColor="#5851db" />
                <stop offset="22%" stopColor="#833ab4" />
                <stop offset="33%" stopColor="#c13584" />
                <stop offset="44%" stopColor="#e1306c" />
                <stop offset="55%" stopColor="#fd1d1d" />
                <stop offset="66%" stopColor="#f56040" />
                <stop offset="77%" stopColor="#f77737" />
                <stop offset="88%" stopColor="#fcaf45" />
                <stop offset="100%" stopColor="#ffdc80" />
              </linearGradient>
            </defs>
            <path
              fill="url('#myGradient2')"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
          <span>folgen pls</span>
        </InstaIcon>
      </IconContainer>
      {/* <ImageWrapper>
        <Image src={profilePicture} alt="Das ist Luis" />
      </ImageWrapper> */}
    </ImageContainer>
  )
}

export default Social

const Title = styled.h1`
  position: absolute;

  top: 25vh;
  right: clamp(20px, 5vw, 350px);
  transform: rotate(18deg);
  color: var(--color-text);
`

const IconContainer = styled.div`
  position: absolute;
  top: 36%;
  left: 25vw;
  transform: rotate(18deg);
  padding: 1em;
  display: grid;
  row-gap: 0.5rem;
  grid-template-columns: repeat(8, 6vw);
  grid-template-rows: repeat(3, 15vw);
  grid-template-areas:
    ' . bandcamp . . . . insta .  '
    '. . spotify . . soundcloud . .  '
    '. youtube . . . . facebook .  ';

  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 24vw);
    grid-template-areas:
      ' . bandcamp . . . . insta .  '
      'spotify . . . .  . . soundcloud '
      '. youtube . . . . facebook .  ';
  }
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 600px;
    > a {
      margin: 2rem;
    }
  }
`

const BaseIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* height: 4.5rem; */
  /* border-radius: 50%; */
  /* background-color: green; */
  > svg {
    height: 4rem;
  }
  > span {
    margin-top: 0.5rem;
    width: 7rem;
    text-align: center;
  }
`
const BandCampIcon = styled(BaseIcon)`
  grid-area: bandcamp;
  transform: rotate(-18deg);
  > svg {
    height: 7rem;
    border-radius: 50%;
    color: #629aa9;
    background-color: white;
  }
`
const SpotifyIcon = styled(BaseIcon)`
  grid-area: spotify;
  transform: rotate(-12deg);
  > svg {
    background-color: #191414;
    border-radius: 50%;
    color: #1db954;
  }
`
const SoundCloudIcon = styled(BaseIcon)`
  grid-area: soundcloud;
  > svg {
  }
`
const InstaIcon = styled(BaseIcon)`
  grid-area: insta;
  transform: rotate(-36deg);
  > svg {
    height: 7rem;
  }
`
const YoutubeIcon = styled(BaseIcon)`
  grid-area: youtube;
  transform: rotate(-30deg);
  > svg {
    height: 5rem;
    color: #ff0000;
    /* background-color: #282828; */
  }
`
const FacebookIcon = styled(BaseIcon)`
  grid-area: facebook;
  > svg {
    transform: rotate(-180deg);
    /* height: 4rem; */
    color: #1877f2;
    background-color: white;
    border-radius: 50%;
  }
`
