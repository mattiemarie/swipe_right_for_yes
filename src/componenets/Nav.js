// importing logos for the application
// import whiteLogo from 'insert file location for white logo'
// import colorLogo from 'insert file location for color logo'


const Nav = ({ minimal, authToken, setShowModal, showModal }) => {

    const handleClick = () => {
        setShowModal(true)
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
            >Log in</button>}
        </nav>
    )
}

export default Nav