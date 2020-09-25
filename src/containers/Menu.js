import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy';
import {removeFromCart} from "../actions/cart";
import MenuComponent from "../components/Menu";

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
});

export default connect(mapStateToProps,{removeFromCart})(MenuComponent);
