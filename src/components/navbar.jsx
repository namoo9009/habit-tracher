import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
  render() {
    console.log('navbar')
    return (
        <nav className='navbar'>
        <h1>
          <span className='leaf'><i className="fa-solid fa-leaf"></i></span>
          Habit Tracker
          <span className='total-count'>{this.props.totalCount}</span>
        </h1>
      </nav>
    )
  }
}
