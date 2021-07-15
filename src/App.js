import './App.css'
// import { Main } from './imports'
import React, { Suspense } from 'react'

let Render

if (window.location.href.split('-')[0] === 'https://client1') {
  Render = 'amazon'
} 

if(window.location.href.split('-')[0] === 'https://client2'){
  Render = 'modified'
}

const Main = React.lazy(() => import(`./L1/${Render}/Index`))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </div>
  )
}

export default App
