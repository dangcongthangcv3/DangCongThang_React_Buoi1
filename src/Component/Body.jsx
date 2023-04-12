import React, { Component } from 'react'
import '../asset/css/Carousel.css'

export default class Body extends Component {
  render() {
    return (
      <section id='Carousel' className='my-3'>
          <div className='Content bg-light p-5 my-4'>
            <h1>A warm welcome!</h1>
            <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='btn btn-primary text-center'>Call to action</button>

          </div>
      </section>
    )
  }
}
