import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Fade } from 'react-slideshow-image'

import Image from 'next/image'

import Footer from '$components/Footer'

import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

import HomeContent from '$meta/home.yml'

const LandingPage = () => {
  const [showImpress, setShowImpress] = useState<boolean>(false)

  const messagesEndRef = useRef(null)

  const handleShowImpress = () => {
    setShowImpress(!showImpress)
    if (!showImpress) {
      setTimeout(
        () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }),
        100
      )
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
      <Footer onSetImpress={handleShowImpress} />
      <ImpressWrapper visible={showImpress} ref={messagesEndRef}>
        <TitleAndClose>
          <h3>Impressum</h3>
          <button onClick={handleShowImpress}>X</button>
        </TitleAndClose>
        <p>
          Impressum Angaben gemäß § 5 TMG Fiona GöbelBrüsseler Platz 17 50674
          Köln Vertreten durch:Fiona Göbel Kontakt:Telefon: 0049–162
          3085325E‑Mail: fiona.goebel@gmail.com Verantwortlich für den Inhalt
          nach § 55 Abs. 2 RStV:Fiona GöbelBrüsseler Platz 1750674 Köln
          Konzeption und Design:Sara-Lena BolayE‑Mail: hola@maniana-design.de
          Haftungsausschluss: Haftung für Inhalte Die Inhalte unserer Seiten
          wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
          Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
          für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
          oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
          jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          Haftung für Links Unser Angebot enthält Links zu externen Webseiten
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
          wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
          derartige Links umgehend entfernen. Urheberrecht Die durch die
          Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen. Datenschutz Die
          Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E‑Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich.Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
        </p>
        {/* <div ref={messagesEndRef} /> */}
      </ImpressWrapper>
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
