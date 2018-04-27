import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../../actions'

class BookList extends Component {

  renderBookList () {
    return this.props.books.map(book => {
      return (
        <li 
        onClick={() => this.props.selectBook(book)}
        key={book.title} 
        className="list-group-item">{book.title}
        </li>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {selectBook: selectBook},
    dispatch
  )
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)