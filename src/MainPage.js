import React , { Component } from 'react'
import './App.css'
import { Link} from 'react-router-dom'
import CreateBook from './CreateBook'

class MainPage extends Component {
render(){
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h3>MyReads</h3>
                <div className="open-search">
                    <Link to ='/search'>
                        <button >Add a book</button>
                    </Link>
                </div>
            </div>
            <div className="list-books-content">
            {/* Curreently reading section */}
                <div className="bookshelf">
                    <h4 className="bookshelf-title">Currently Reading</h4>
                    <CreateBook bookList={this.props.books.filter((book)=>{
                        return book.shelf === "currentlyReading"
                    })} handelBookShelf={this.props.handelBookShelf}/>
                </div>
            {/* want to read section */}
                <div className="bookshelf">
                        <h4 className="bookshelf-title">want to read</h4>
                        <CreateBook bookList={this.props.books.filter((book)=>{
                            return book.shelf === "wantToRead"
                        })} handelBookShelf={this.props.handelBookShelf}/>
                </div>
            {/* read section */}
                <div className="bookshelf">
                        <h4 className="bookshelf-title">Read</h4>
                        <CreateBook bookList={this.props.books.filter((book)=>{
                            return book.shelf === "read"
                        })} handelBookShelf={this.props.handelBookShelf}/>
                </div>
            </div>
        </div>
        )
    }
}

export default MainPage
  