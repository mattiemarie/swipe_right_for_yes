const Nav = () => {

    const minimal = true


    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : logo}/>
            </div>
        </nav>
    )
}

export default Nav