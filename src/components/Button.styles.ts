import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}


// ⬇️ extendo as minhas propriedades com esse generic: <ButtonContainerProps>
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  //  ⬇️ esse props aqui está pegando os tipos de um HTMLButtonAttributes e Element e unificando com o tipo criado acima ButtonContainerProps
  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}
`;