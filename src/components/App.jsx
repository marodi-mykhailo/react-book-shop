import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import BookCard from '../components/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady, addToCart } = this.props;
    debugger
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} addToCart={addToCart} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
