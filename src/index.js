import React from "react"
import ReactDom from "react-dom/client"
//Linking Css File
import './style.css'
// Linking Components through App
import App from "./components/App"



const root=ReactDom.createRoot(document.querySelector(".container"))
root.render(<App></App>)