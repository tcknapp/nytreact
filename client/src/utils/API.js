import axios from "axios";

export default {
    // Query NYT API
    // Grabs articles from the New York Times using the the New York Times article search API.
    getBooks: function (query, begin, end) {
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const APIKEY = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        return axios.get(queryURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "0101&end_date=" + end + "0101");
    },
    // Retrieves saved articles from the db
    // Saves an article to the database
    saveBooks: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    // Retrieves saved articles from the db
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
};



