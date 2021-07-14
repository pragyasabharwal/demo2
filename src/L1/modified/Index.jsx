import Default from '../../lib/Default'

const Modified = (props) => {
  //   const [counter, setCounter] = useState('Welcome to the modified component')

  // const props = 'abc'


  function buttonStyle2() {
    if (props.counter === 'Welcome to the modified component') {
      return 'green'
    }
    else{
        return 'yellow'
    }
  }

  const buttonStyle = props?.buttonStyle || buttonStyle2

  const heading = 'modified'

  return (
    <div>
      <h2>{heading}</h2>
      <Default
        buttonStyle={buttonStyle}
        counter={props.counter ? props.counter :'Modified'}
        heading={heading}
      ></Default>
    </div>
  )
}

export default Modified
