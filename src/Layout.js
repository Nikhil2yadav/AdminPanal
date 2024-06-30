import React, { Component } from 'react'
import Header from './components/Header/Header'
import Sidedbar from './components/Dashboard/Sidedbar'
import Footer from './components/Footer/Footer'
import Home from './components/Dashboard/Home'

export default class Layout extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
          <Sidedbar/>
          <Footer/>
      </div>
    )
  }
}
