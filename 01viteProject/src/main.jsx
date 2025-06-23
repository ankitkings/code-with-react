import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div><h2>React my function</h2></div>

  )
}
 
const MyName = "Ankit Parmar";
const AnotherDiv = {
    type: 'a',
    props: {
        href: "https::google.com",
        target: '_blank'
    },
    text: 'Click on Google !!!!!',

}

const anotherEle = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const BreakedElement = React.createElement(
  'a',
  { 
    href: 'https://google.com',
    target: '_blank'
  },
  "CLICK ME FOR GOOGLE",
  MyName
  
)

createRoot(document.getElementById('root')).render(
  BreakedElement
)
