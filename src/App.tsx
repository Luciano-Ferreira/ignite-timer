import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { defaultTheme } from './styles/themes/default';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
     <Button
      variant='primary'
     >
      Enviar
     </Button>
     <Button
      variant='secondary'
     >
      Enviar
     </Button>
     <Button
      variant='danger'
     >
      Enviar
     </Button>
     <Button
      variant='success'
     >
      Enviar
     </Button>
    </ThemeProvider>
  )
}

export default App
