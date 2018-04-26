import React, { Component } from 'react'

class BookList extends Component {

  renderBookList () {
    return this.props.book.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  
  render () {
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {this.renderBookList()}
        </ul>
      </div>
    )
  }
}