import Nav from '../componenets/Nav'

const Home = () => {

    // Authentication for Log In
    const authToken = true

    // Sign in button clicked
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
        <Nav/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}

            </button>
        </div>
        </>
    )
}

export default Home