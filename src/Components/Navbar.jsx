import "../Styles/Navbar.css"
import iconMoon from "../Assets/Images/iconMoon.svg"

function Navbar() {
    return (
        <div className='nav-bg'>
            <header>
                <nav className="nav-menu">
                    <div>
                        <p className="nav-todo">T O D O</p>
                    </div>
                    <div className="nav-img">
                        <img src={iconMoon} alt="iconMoon" />
                    </div>

                </nav>
                <div className="nav-input">
                    <input type="checkbox" />
                    <input type="text" id="task-input" placeholder="Create a new todo..." />
                </div>
            </header>
        </div>
    )
}

export default Navbar