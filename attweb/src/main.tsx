import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

function body(){
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {body()}
    <App/>
  </React.StrictMode>,
)



