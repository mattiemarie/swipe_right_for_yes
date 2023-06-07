// importing logos for the application
// import whiteLogo from 'insert file location for white logo'
// import colorLogo from 'insert file location for color logo'


const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }


    return (
        <nav>
            <div className="logo-container">
                {/* <img className="logo" src={minimal ? colorLogo : whiteLogo}/> */}
            </div>

            {!authToken && !minimal && <button
            className="nav-button"
            onClick={handleClick}
            disabled = {showModal}
            >Log In</button>}
        </nav>
    )
}

export default Nav