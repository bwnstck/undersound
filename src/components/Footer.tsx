import React from 'react'

import Image from 'next/image'

import styled from 'styled-components'

function Footer({ onSetImpress }: { onSetImpress: () => void }) {
  return (
    <FooterWrapper>
      <Image src={'/images/logo.svg'} alt="Logo" width={318} height={166} />
      <p>
        Fiona Göbel & Johanna © {new Date().getFullYear()}
        <button onClick={onSetImpress}>Impressum</button>
        <button onClick={onSetImpress}>Datenschutz</button>
      </p>
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
    button:first-child {
      padding: 0 0.75rem;
    }
  }
`
