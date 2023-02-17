import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Container>
      <p>
        thomasmartindev
      </p>
      <Link
        href='https://github.com/thomasmartindev'
        target='_blank'
      >
        <Github />
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  align-items: center;
  background-color: #FFFFFF;
  border-top: 1px solid ${({ theme }) => theme.border};
  bottom: 0;
  box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.2), 
              0 1px 10px 0 rgba(60, 60, 60, 0.2);
  column-gap: 1rem;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 1rem 0;
  position: absolute;
  width: 100%;
`

const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.grey};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover { 
    transform: rotate(360deg) scale(1.2);
  }
`

const Link = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.grey};
  display: flex;
  font-size: 1.8rem;
`