import { Component } from "react"
import React from 'react'

class CreateBook extends Component{
  render(){
    let {bookList}=this.props
    if(!Array.isArray(bookList)){
      bookList=[]
      console.log("We do not have any books")
    }
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
              bookList.map((book)=>(
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={
                      {
                        width: 128,
                        height: 193,
                        backgroundImage:book.imageLinks ? `url(${book.imageLinks.thumbnail})`:`url(http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api)`
                      }}></div>
  
                    <div className="book-shelf-changer">
  
                    <select onChange={
                      async (e)=>{
                        console.log('\n\nCreateBook :',book.title,"==>>",e.target.value)
                        this.props.handelBookShelf(book,e.target.value)
                        }
                    }value={book.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="none" >None</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="read" >Read</option>
                        
                    </select>
  
  
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
            
          }
        
      </ol>
  </div>
    )
  }
}
export default CreateBook