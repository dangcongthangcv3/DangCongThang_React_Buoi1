import React, { Component } from 'react'
import '../asset/css/content.css'

export default class Item extends Component {
  render() {
    return (
      <section id='content'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <div className='list'>
              <div className='card'>
                <i className='bx bx-collection'></i>
                <h3>Fresh new layout</h3>
                <p>With Bootstrap 5, we've created a fresh new layout for this template</p>
              </div>
            </div>
            </div>
            <div className="col-md-6">
              <div className='list'>
              <div className='card'>
                <i className='bx bx-collection'></i>
                <h3>Fresh new layout</h3>
                <p>With Bootstrap 5, we've created a fresh new layout for this template</p>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}
