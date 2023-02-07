function Form(){
    return (
            <form action="/" method="POST">
                <input type="email" name="username" placeholder="Enter your email"></input>
                <input type="password" name="password" placeholder="Enter your password"></input>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )
}

export default Form;