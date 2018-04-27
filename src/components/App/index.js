import React from 'react'
import BookList from '../../containers/BookList'
import BookDetail from '../../containers/BookDetail'

const App = () => {
    return (
      <div className="container">
        <div className="row">
          <BookList />
          <BookDetail />
        </div>
      </div>
    )
}

export default App