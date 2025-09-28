import {
  Link
} from "react-router-dom";

function Menu() {
    return (
        <header className="menu">
            {/* <!-- This is an A11y Change --> */}
            <nav role="navigation">
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    {/* <!-- Fixed HTML --> */}
                    <li><Link to="/about">About</Link></li>
                    {/* <!-- Fixed HTML --> */}
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;
