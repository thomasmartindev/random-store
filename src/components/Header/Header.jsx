import styled from 'styled-components'
import { Banner } from './Banner'
import { Navbar } from './Navbar'
import { useState } from 'react'

export const Header = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true)

  const closeBanner = () => setIsBannerOpen(false)

  return (
    <Container>
      {
        isBannerOpen
          ? <Banner 
              closeBanner={closeBanner} 
            />
          : null
      }
      <Navbar />
    </Container>
  )
}

const Container = styled.header`
  background-color: #FFFFFF;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.2), 
              0 1px 10px 0 rgba(60, 60, 60, 0.2);
`