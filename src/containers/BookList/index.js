import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {

  renderBookList () {
    return this.props.books.map(book => {
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

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)