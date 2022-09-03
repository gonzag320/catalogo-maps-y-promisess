import {navBarOptions} from '../helpers/strings'
import CartWidget from './CartWidget';

function Navbar() {
    return (
      <header>
      <ul className="navbar">
      {navBarOptions.map(navBarOption => <li key={navBarOption.id}>{navBarOption.category} </li>)} 
      <CartWidget/>
      </ul>
      
  </header>
    );
  }

  export default Navbar;