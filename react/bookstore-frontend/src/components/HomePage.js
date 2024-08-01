import NavBar from "./NavBar.js";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
      <>
      <header>
        <nav>
        <NavBar/>
        {/* <Link to="create/book">Create Book</Link>         */}
      </nav>
      </header>
      </>
    );
  };
  
  export default HomePage;