function SecondSection(){
    return (
        <>
             <div className="secondSection">
                <div className="secondSectionHead">
                    <h1>Techs We Support</h1>
                    <p>Share your thoughts around the world!</p>
                </div>

                <div className="techsBoxContainer">
                    <div className="techBox">
                        <img src="./c++.png" alt="C++"></img>
                    </div>
                    {/* <div className="techBox">
                        <img src="./java.png" alt="Java"></img>
                    </div> */}
                    <div className="techBox">
                        <img src="./js.png" alt="JS"></img>
                    </div>
                    <div className="techBox">
                        <img src="./python.png" alt="Python"></img>
                    </div>
                    <div className="techBox">
                        <img src="./react.png" alt="React"></img>
                    </div>
                    <div className="techBox">
                        <img src="./mongo.png" alt="Mongo"></img>
                    </div>
                    <div className="techBox">
                        <img src="./node.png" alt="Node"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection;