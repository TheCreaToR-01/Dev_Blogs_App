import React, { useEffect } from "react";
import { BrowserRouter  as Router , Routes, Route, Form } from 'react-router-dom';
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {

    useEffect(() => {
        fetch("http://localhost:8080/")
    }, []);

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/blogs" element={<h1>This is the blogs page route</h1>}/>
                    <Route path="/compose" element={<h1>This is the compose page route</h1>}/>
                    <Route path="/contact" element={<h1>This is the contact page route</h1>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>} />
                </Routes>
            </Router>

            <Footer/>
        </>
    );
}

export default App