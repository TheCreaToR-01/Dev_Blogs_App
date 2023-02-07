import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="navBar">
                <div className="logo">
                    <img className="logoImg" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo"></img>
                </div>
                <div className="middleBar">
                    <ul className="nav-list">
                        <li className="nav-items"><Link to="/">Home</Link></li>
                        <li className="nav-items"><Link to="/about">About</Link></li>
                        <li className="nav-items"><Link to="/blogs">Blogs</Link></li>
                        <li className="nav-items"><Link to="/compose">Compose</Link></li>
                        <li className="nav-items"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="registration">
                    <button className="btn btn-primary authButton"><Link to="/login">Login</Link></button>
                    <button className="btn btn-primary authButton"><Link to="/register">Create Account</Link></button>
                </div>
            </div>
        </>
    )
}

export default Header;