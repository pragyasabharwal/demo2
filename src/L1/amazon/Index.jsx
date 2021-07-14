import Modified from '../modified/Index'
import { useState } from 'react'

const Amazon = () => {
  const [counter, setCounter] = useState('Welcome to the modified component')

  function buttonStyle3() {
    if (counter === 'Welcome to the modified component') {
      return 'orange'
    }
  }
  return (
    <>
      <span>..</span>
      <Modified buttonStyle={buttonStyle3} counter={counter} />
    </>
  )
}

export default Amazon
