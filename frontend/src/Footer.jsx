function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className="leftPart">
                    <div className="logoBox">
                        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo" />
                    </div>
                    <div className="socialIconsBox">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    </div>

                </div>
                    <div className="newsletterBox">
                        <label for="newsletter">Newsletter SignUp</label><br/>
                        <input type="email" className="newsletterInput" placeholder="Email Address"></input><br/>
                        <button className="newsletterButton">Subscribe</button>
                    </div>


                <div className="middlePart">
                    <div className="middlePartHead">
                        <h3>Quick Links</h3>
                    </div>
                    <div className="links">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Compose</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>

                <div className="rightPart">
                    <div className="rightPartHead">
                        <h3>Topics</h3>
                    </div>
                    <div className="links">
                        <ul>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;