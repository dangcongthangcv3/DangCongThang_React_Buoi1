import React, { Component } from 'react'
import '../asset/css/Carousel.css'
export default class Content extends Component {
  render() {
    return (
      <section id='content'>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <i class="bi bi-collection"></i>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </section>
    )
  }
}
