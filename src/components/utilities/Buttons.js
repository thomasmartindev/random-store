import styled, { css } from 'styled-components'
import { MdClose } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export const AddToCartButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.grey};
  }

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
`

export const BlueButton = styled.button`
  background-color: ${({ theme }) => theme.blue};
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3.5rem;
  width: ${({ children }) => children === 'Shop Now' ? 'max-content' : '100%'};

  &:hover {
    background-color: ${({ theme }) => theme.blueHover};
  }

  ${({ children }) =>
    children === 'Shop Now' &&
    css`
      @media (max-width: 1024px) {
        font-size: 1.8rem;
        padding: 1.5rem 10rem;
      }

      @media (max-width: 400px) {
        padding: 1.2rem 8rem;
      }
    `     
  }

  ${({ children }) =>
    children === 'Checkout' &&
    css`
      margin: 1rem 0;
    `     
  }
`

export const CartButton = styled(HiOutlineShoppingBag)`
  height: 25px;
  width: 25px;
`

export const CloseButton = styled(MdClose)`
  color: ${({ theme }) => theme.lightGrey};
  cursor: pointer;
  height: 25px;
  margin-left: auto;
  width: 25px;

  &:hover {
    color: ${({ theme }) => theme.grey};
  }
`

export const MenuButton = styled(RxHamburgerMenu)`
  color: ${({ theme }) => theme.lightGrey};
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    color: ${({ theme }) => theme.grey};
  }

  @media (min-width: 800px) {
    display: none;
  }
`

export const TextButton = styled.p`
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.blueHover};
  }
`