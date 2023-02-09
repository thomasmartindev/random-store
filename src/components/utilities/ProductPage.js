import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
  padding: 6rem;

  @media (max-width: 1024px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 400px) {
    padding: 6rem 2rem;
  }
`

export const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
`

export const Loader = styled.span`
  animation: rotation 1s linear infinite;
  border: 3px solid;
  border-color: 
    #FFFFFF
    #FFFFFF
    transparent
    transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 100px;
  width: 100px;
  z-index: 1;

  &::before,
  &::after {
    animation: rotationBack 0.5s linear infinite;
    border: 3px solid;
    border-color: 
      transparent 
      transparent
      #FFFFFF
      #FFFFFF;
    border-radius: 50%;
    bottom: 0;
    box-sizing: border-box;
    content: '';
    height: 85px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center center;
    width: 85px;
  }

  &::before {
    animation: rotation 1.5s linear infinite;
    border-color: 
      ${({ theme }) => theme.blue} 
      ${({ theme }) => theme.blue}
      transparent
      transparent;
    height: 70px;
    width: 70px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const Overlay = styled.div`
  background-color: #000000;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: fixed;
  top: 0;
  transition: left 0.75s ease-in-out;
  width: 100%;
`

export const Products = styled.div`
  animation: fadeIn ease 2s;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 4rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(28rem, 46rem));
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 56rem);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 46rem);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 36rem);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 31rem);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 26rem);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  height: 50vh;
  justify-content: center;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`