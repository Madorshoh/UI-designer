import "./header.css"
function Header(){
    return(
        <div className="navbar">
            <div className="nav_right">
                <h1>SaulDesign</h1>
            </div>
            <div className="nav_left">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Header

