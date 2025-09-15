// rrd imports
import { Form, NavLink } from "react-router-dom";

// library imports
import { TrashIcon } from '@heroicons/react/24/solid'


// assets
import logomark from "../assets/logomark.svg";

const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink 
            to="/"
            aria-label="Go to Home"
        >
          <img src={logomark} alt="Logo" height={30}/>
          <span>HomeBudget</span>
        </NavLink>
          {
            userName && (
                <Form 
                    method="post"
                    action="/logout"
                    onSubmit={(e) => {
                        if(!confirm("Are you sure you want to delete your user account?")) {
                            e.preventDefault();
                        }}}
                >
                    <button type="submit" className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )
          }
    </nav>
  )
}

export default Nav