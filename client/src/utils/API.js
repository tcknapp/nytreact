import axios from "axios";


export default {

  getBooks: function(query, begin_date, end_date) {
    // Get request
    return axios.get("/api/books", 
    	{ params: 
    		{ 
    			query: query,
    			begin_date: begin_date,
    			end_date: end_date
    		}
    	}
    );
  },

  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books")
  //   ;
  // },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
