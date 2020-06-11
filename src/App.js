import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardGroup, Container} from "semantic-ui-react";
import {setBooks} from "./actions/books";
import axios from  'axios';
import Menu from "./components/Menu";
import BookCard from "./components/BookCard";


class App extends Component{
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) =>{
            setBooks(data);
        });
    }

    render() {
      const { books, isReady } = this.props;
      return(
          <Container>
              <Menu/>
              <CardGroup itemsPerRow={4}>
                  {
                      !isReady
                          ? 'Loading...'
                          : books.map(book => (
                              <BookCard {...book} />
                          ))
                  }
              </CardGroup>

          </Container>
      );
  }

}

const mapStateToProps = ({books}) =>({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch =>({
    setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
