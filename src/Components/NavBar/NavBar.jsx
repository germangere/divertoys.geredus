import Cart from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <img src="./assets/logo.png" alt="logo" />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#"><Cart /></a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default NavBar;