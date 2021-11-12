import ContentWrapper from '$pages/Home'

import styled from 'styled-components'

import HomeContent from '$meta/home.yml'

const Survey = () => {
  return (
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
  )
}

export default Survey

const SurveyWrapper = styled(ContentWrapper)`
  background-color: var(--color-cta);
`
