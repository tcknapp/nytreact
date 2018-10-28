const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require ("axios");


//To get Articles
router.get("/", (req, res) => {

  // variables for NYT API
  
  const apiKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
  const query = req.query.query;
  const beginYear = req.query.begin_date;
  const endYear = req.query.end_date;
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${query}&sort=newest&begin_date=${beginYear}0101&end_date=${endYear}0101`

  axios 
    .get(queryURL)
    .then(results => {
      res.json(results.data.response);
    })
    .catch(err => console.log(err));
  });



// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
