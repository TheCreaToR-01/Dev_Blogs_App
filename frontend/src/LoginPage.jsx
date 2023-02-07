import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react';


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){

        e.preventDefault();
        const data = {username, password}

        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(data)
        }).then((response)=>{
            return response.json();
        })
        .then((responseJSON) =>{
            console.log(responseJSON.value);

            if(responseJSON.value === "Authenticated"){
                navigate("/");
            }else{
                navigate("/login");
            }
        })

        setUsername("");
        setPassword("");
    }


    return (
        <>
            <div className="formSection">
                <div className="formBox">
                    <form className="form" action="/" method="POST" onSubmit={handleSubmit}>
                        <img className="formLogo" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="logo"></img>
                        <input type="email" name="username" placeholder="Enter your email" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                        <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        <button type="submit" className="btn btn-primary sbtBtn">Login</button>
                        <h4 className="line">OR</h4>
                        <button className="googleBtn authBtn"><Link to="/">
                            <i className="bi bi-google"></i> Sign in with Google
                        </Link></button>

                        <button className="fbBtn authBtn"><Link to="/">
                            <i className="bi bi-facebook"></i> Sign in with Facebook
                        </Link></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;