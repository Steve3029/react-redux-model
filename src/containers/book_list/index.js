import React, { Component } from 'react'

class BookList extends Component {
  
  render () {
    const bookList = this.props.books.map(book => {
      return (
        <li className="list-group-item"></li>
      )
    })

    return (
      <div className="col-md-4">
        <ul className="list-group"></ul>
      </div>
    )
  }
}