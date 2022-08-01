import React , { Component } from 'react'
import './App.css'
import { Link} from 'react-router-dom'
import CreateBook from './CreateBook'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state={
        query:'',
        bookList:[]
    }
    handleChange = (event)=> {
        this.setState({
          query: event.target.value,
        });
        event.persist()


        if(event.target.value !== ''){
          // Is this correct ?
          // throttle((c)=>{
          //   this.queryAPI(event.target.value)
          //   console.log(c,'throtteled')
          // },100)
          // It doesn't give me any result when any search is made
          this.queryAPI(event.target.value)

       }else{
           this.setState({
               bookList:[]
           })
       }
     }


   queryAPI = async(query)=>{
     await BooksAPI.search(query)
      .then((books)=>{
       this.setState({
           bookList:books
       })
    })
}
    
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to ='/'>
              <button className="close-search">Close</button>
            </Link>
              <div className="search-books-input-wrapper">
              
                <input type="text" placeholder="Search by title or author" 
                       value={this.state.query} 
                       onChange={this.handleChange}/>
              
              </div>
          </div>
          <div className="search-books-results">
            <CreateBook bookList={this.state.bookList} handelBookShelf={this.props.handelBookShelf}/>
          </div>
          </div>
        )
    }
}

export default SearchPage
  





























// import React , { Component } from 'react'
// import './App.css'
// import { Link} from 'react-router-dom'
// import CreateBook from './CreateBook'
// import * as BooksAPI from './BooksAPI'

// class SearchPage extends Component {
//     state={
//         query:'',
//         bookList:[]
//     }
//     handleChange = (event)=> {
//       event.persist()
//         this.setState({
//           query: event.target.value,
//         });
//         setInterval(()=>{
//         if(event.target.value !== ''){
//           this.queryAPI(event.target.value)
//         }else{
//           this.setState({
//               bookList:[]
//           })
//         }
//       },250)}
//     queryAPI = async(query)=>{
//         await BooksAPI.search(query)
//             .then((books)=>{
//                 this.setState({
//                     bookList:books
//                 })
//             })
//     }
//     render(){
//         return(
//             <div className="search-books">
//             <div className="search-books-bar">
//             <Link to ='/'>
//               <button className="close-search">Close</button>
//             </Link>
//               <div className="search-books-input-wrapper">
//                 <input type="text" placeholder="Search by title or author" 
//                        value={this.state.query} 
//                        onChange={this.handleChange}/>
//               </div>
//           </div>
//           <div className="search-books-results">
//             <CreateBook bookList={this.state.bookList} handelBookShelf={this.props.handelBookShelf}/>
//           </div>
//           </div>
//         )
//     }
// }

// export default SearchPage
  