import React, {Component} from 'react';
import {CardGroup, Container} from "semantic-ui-react";
import axios from  'axios';
import Menu from "./Menu";
import BookCard from "./BookCard";
import Filter from "./Filter";


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
              <Filter/>
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



export default App;
