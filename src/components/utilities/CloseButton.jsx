import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

export const CloseButton = ({ clickHandler }) => {
  return (
    <Button
      onClick={clickHandler}
    />
  )
}

const Button = styled(MdClose)`
  color: ${({ theme }) => theme.lightGrey};
  cursor: pointer;
  height: 25px;
  margin-left: auto;
  width: 25px;

  &:hover {
    color: ${({ theme }) => theme.grey};
  }
`