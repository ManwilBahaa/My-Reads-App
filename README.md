                        { This is My-Reads-App }

-Installation
  |> open command line
  |> Direct to project Repositery
  |> run command { npm insatall}
  |> Once done run command { npm start }

-It is a react based project which allows user to save their prefrences about books
-Main Page
    +It displays Users previous book categories

-SearchPage.js
    +This is where the Search Logic is hadeled
    +It first listens to aany change to the search bar
        - then if there is any similarity with existing books that user previously searched for durng the same session
          it displays these books
        - If there is no match in existing books API request is made 

-Book Categorisation
    + Each book the users interact with have certain properties uniqe to each book
      books can be categorised as follows:
        - Want to Read 
        - continue Reading
        - Read

-Any cahange made in any books properties will update the API and these changes appear in Main Page 