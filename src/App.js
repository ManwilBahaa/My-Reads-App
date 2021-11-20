import React , { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route} from 'react-router-dom'
import SearchPage from './SearchPage'
import MainPage from './MainPage'


class BooksApp extends Component {
    state={
        books:[]
    }
    componentDidMount=async()=>{
        const PrevBooks=await BooksAPI.getAll()
        this.setState({books:PrevBooks})
    }
    handelBookShelf=async(book,shelf)=>{
        BooksAPI.update(book,shelf)
        .then((e)=>{
            console.log("API updated successfully")
            BooksAPI.get(book.id)
                .then((newBook)=>{
                    this.setState((prev)=>({
                        books: prev.books.filter(b => b.id !== book.id).concat([newBook ])
                    }))
                })
            console.log("New book should now have been moved")
        })
    }
    render() {
        return (
        <div className="app">
            <Route exact path='/Search' render={() => (
                <SearchPage handelBookShelf={this.handelBookShelf}/>
            )} />

            <Route exact path='/' render={() => (
                <MainPage books={this.state.books} handelBookShelf={this.handelBookShelf}/>
            )} />  
        </div>
        )
    }
}

export default BooksApp
