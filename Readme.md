Styled-components - São abstrações de CSS, são componentes estilizados.

## controlled - uncontrolled

## controlled component
É quando mantemos em tempo real o valor dos inputs em estado. Então significa que se eu ficar monitorando o campo a cada letra digitada pelo usuário esse é um input controlado.

fazer isso de pode ser ruim para paginas em que tem muitos campos e componentes por que o react vai recalcular TODO o componente em que aquele estado está sendo alterado.


## uncontrolled component

Busca o valor do input somente quando precisarmos dela. Nesse caso iriamos pegar o valor do input pela propriedade name do input.

a desvantagem é que eu perco a fluídez e comunicação de estado, porém não causa tantos re-renders. Eai o ideal dessas uncontrolled forms são para formularios com muitas informações a serem preenchidas +50 ou seila até menos inputs. Pode depender da poder de hw do usuário.

## E ai passaremos a utilizar uma biblioteca que entrega o melhor entre os dois mundos

[react-hook-form](https://react-hook-form.com/)

o register é uma função que recebe como parametro a prop name que seria do input e retorna as funções que iremos colocar no input onChange onBlur e etc.