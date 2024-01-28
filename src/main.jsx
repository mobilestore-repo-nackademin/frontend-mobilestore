import React from 'react'
import ReactDOM from 'react-dom/client'
import 'index.css'
import AboutUsPage from "./AboutUsPage/HeroSectionAbout.jsx";
import App from "./App.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AboutUsPage/>
    <App/>

  </React.StrictMode>
)
