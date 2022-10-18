import untitled2 from '../image/Untitled2.svg'
import {Link} from "react-router-dom"
import './nav.css'

function Nav() {
  return (
      <div className='navbar'>
          <nav>
              <Link to="/" className="brand">
              <img src={untitled2} alt="" className="logo-img" />
              </Link>
              <Link to="/create">Create Recipes</Link>
      </nav>
      </div>
  )
}

export default Nav;