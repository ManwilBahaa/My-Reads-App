<h2>What is It</h2>
It is a <b>React</b> based project which allows user to save their prefrences about books
It is a virtual book library based project where the user can place each individual book to a shelf and the shelves would update automatically.
The user can also query an External API for more books each of which can be placed or removed from different shelves.
You can also toggle each book to change its shelf.
<h2>Installation</h2>
    <ol>
      <li>once youve cloned the files open command line in the file directory by using : </li>
         <code>> cd '{FILE_PATH}'</code>
      <li>run command</li>
        <code>> npm install</code>
      <li>Once all the required files are installed you can then start by running:</li>
        <code>> npm start</code>
    </ol>

<h2>Main Page</h2>
It displays Users previous book selections. This is done as follows :
<ul>
  <li>At the beggining of new session an API is quried for the previous selections made by the user</li>
  <li>This data is then stored in local state of the root component (App)</li>
  <li>Whenever changes are made in any book the state is updated ad a rerender occurs</li>
</ul>

<h2>Search Page</h2>
<ul>
  <li>This is where the Search Logic is hadeled</li>
  <li>
    It first listens to any change to the search bar
    <ul>
      <li>then if there is any similarity with existing books that user previously searched for durng the same session
        it displays these books</li>
        <li>If there is no match in existing books API request is made </li>
    </ul>
  </li>
</ul>
    
<h2>Book Categorisation</h2>
Each book the users interact with have certain properties uniqe to each book<br>
      books can be categorised as follows:
      <ul>
        <li>Want to Read</li>
        <li>Continue Reading</li>
        <li>Read</li>
      </ul><br>

Any change made in any books will update the API and these changes appear in Main Page 
