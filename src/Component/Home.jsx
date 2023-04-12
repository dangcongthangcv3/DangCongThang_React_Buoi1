import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Item from './Item'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Item/>
        <Footer/>
      </div>
    )
  }
}
