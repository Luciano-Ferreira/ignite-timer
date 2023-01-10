import { ReactNode } from 'react';
import { ButtonContainer, ButtonVariant } from './Button.styles';

interface Props {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ variant='primary', children }: Props) {
  return (
    <ButtonContainer
      variant={variant}
    >
      {children}
    </ButtonContainer>
  )
}