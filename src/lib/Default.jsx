import { useState, useEffect } from 'react'
import axios from 'axios'
import { useThemeContext } from '../context'

const Default = (props) => {
  //   console.log(props)

  function buttonStyle1() {
    if (props.counter === 'Welcome to the modified component') {
      return 'red'
    } else {
      return 'pink'
    }
  }

  const [res, setRes] = useState('')

  const buttonStyle = props.buttonStyle || buttonStyle1

  //   console.log(buttonStyle)

  const { state } = useThemeContext()

  console.log(state)

  useEffect(() => {
    (async function () {
      const response = await axios.get('https://randomuser.me/api/')
      console.log(response.data.results[0])
      setRes(response?.data?.results[0]?.name?.first)
    })()
  }, [])

  return (
    <div>
      <h1>{props.heading ? '' : 'Default'} </h1>
      <span>{res}</span>
      <br />
      <span>{state}</span>
      <br />
      <button style={{ background: buttonStyle() }}>
        {props.counter ? props.counter : 'Default component'}
      </button>
    </div>
  )
}

export default Default
