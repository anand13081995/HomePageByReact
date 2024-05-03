import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PartOne from './components/PartOne/PartOne.jsx'
import PartTwo from './components/PartTwo/PartTwo.jsx'
import PartThree from './components/PartThree/PartThree.jsx'
import PartFour from './components/PartFour/PartFour.jsx'
import PartFive from './components/PartFive/PartFive.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PartOne />
    <PartTwo />
    <PartThree />
    <PartFour />
    <PartFive />
  </React.StrictMode>
)
