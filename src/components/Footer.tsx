import React from 'react'

import Image from 'next/image'

import { MetaState } from '$pages/Home'

import styled from 'styled-components'

import FooterContent from '$meta/footerContent.yml'
function Footer({ onSetImpress }: { onSetImpress: (type: MetaState) => void }) {
  return (
    <FooterWrapper>
      <Image src={'/images/logo.svg'} alt="Logo" width={318} height={166} />
      <p>
        {FooterContent.footerMeta} © {new Date().getFullYear()}
        <button onClick={() => onSetImpress('impress')}>Impressum</button>
        <button onClick={() => onSetImpress('dataSecurity')}>
          Datenschutz
        </button>
      </p>
      <Credits>
        made with ❤️ by <a href="https://weinstock.it">bwnstck</a>
      </Credits>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  height: 264;
  background-color: var(--color-background);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 1rem 0 3rem;
    font-size: var(--fontSize-small);
    color: var(--color-white);

    button {
      color: var(--color-white);
      border: 0;
      background-color: transparent;
    }
    button:active,
    button:hover {
      color: var(--primary-color);
    }
    button:first-child {
      padding: 0 0.75rem;
    }
  }
`

const Credits = styled.span`
  color: var(--color-white);
  font-size: var(--fontSize-small);
`
