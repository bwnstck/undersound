import { useState } from 'react'

import Image from 'next/image'

import styled from 'styled-components'

import profilePic from '$images/Vector.png'

export default function Navigation() {
  // const router = useRouter()
  const [active, setActive] = useState(false)
  const handleOnClick = () => setActive(!active)

  return (
    <>
      {active && (
        <MenuWrapper onClick={handleOnClick}>
          <h2>MENU</h2>
          <ul>
            <li>Ich bins 👨‍🎤</li>
          </ul>
          {}
        </MenuWrapper>
      )}
      <ButtonWrapper onClick={handleOnClick}>
        <MenuMan src={profilePic} alt="Das ist das Menü" />
      </ButtonWrapper>
    </>
  )
}

const MenuWrapper = styled.div`
  position: fixed;
  right: calc(5% + 52px);
  bottom: calc(5% + 52px);
  z-index: 10;

  height: 300px;
  width: 200px;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 16px;

  > * {
    color: white;
  }
`
const MenuMan = styled(Image)`
  position: absolute;
  bottom: 0;
`
export const StyledImage = styled(Image)`
  border-radius: 50%;
`
const ButtonWrapper = styled.button`
  border: 3px solid #fcaf45;
  border-radius: 50%;
  background-color: #333333;
  padding: 12px;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 5%;
  bottom: 5%;

  :active {
    background-color: #ef4189;
  }
`
