import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
// import Card from "../../components/Card";
// import CardBtn from "../../components/CardBtn";

class Home extends Component {
  state = {
    query: "",
    books: [],
    results: [],
    title: "",
    author: "",
    begin: "",
    end: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  //Method for retrieving saved 'Articles' from DB
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  //For deleting Articles
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  //For handling topic in Input field
  handleInputChange = event => {
    this.setState({
      query: event.target.value 
    });
  }

  //For handling Start Year
  handleStartYear = (event) => {
    this.setState({
      begin: event.target.value
    });
  }

  //For handling end Year
  handleEndYear = (event) => {
    this.setState({
      end: event.target.value
    });
  }

  //For handling article save
  handleSave = id => {
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      begin: this.state.begin,
      end: this.state.end
    })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }


  //For handling submission/ article search
  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.query, this.state.begin, this.state.end)
      .then(res => {
        this.setState({ 
          books: res.data.response });
      })
      .catch(err => console.log(err));
    };

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

            <Jumbotron>
              <h1>NYTimes Search</h1>
            </Jumbotron>

            <form> Topic:
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Topic (required)"
              />
              Start Year:
              <Input
                value={this.state.begin}
                onChange={this.handleStartYear}
                name="start-year"
                placeholder="YYYY"
              />
              End Year:
              <Input
                value={this.state.end}
                onChange={this.handleEndYear}
                name="end-year"
                placeholder="YYYY"
              />
              
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.books}
              <List>
                {this.state.books.map(book => {
                  return (
                  <ListItem 
                    _id={book._id}
                    key={book._id}
                    title={book.headline.main}
                    date= {book.pub_date}
                    url= {book.web_url}
                    />
                  )}
                )};
                   
                    <SaveBtn onClick={() => this.handleSave()} />
                    <DeleteBtn onClick={() => this.deleteBook()} />
                
              </List>
              <Jumbotron>
              <h1>Results</h1>
              </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
