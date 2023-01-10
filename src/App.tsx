import { useState } from 'react';
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
    </div>
  )
}

export default App
