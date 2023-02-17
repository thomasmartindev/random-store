import styled from 'styled-components'

export const NoMatch = () => {
  return (
    <Container>
      <h1>
        Page not found.
      </h1>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 6rem;

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 6rem 4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 6rem 2rem;
  }
`