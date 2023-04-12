import React, { Component } from 'react'
import Menu from './Menu'
import Carousel from './Carousel'
import Content from './Content'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Carousel/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}
