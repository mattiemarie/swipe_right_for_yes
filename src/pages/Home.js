import Nav from '../componenets/Nav'
import AuthModal from '../componenets/AuthModal'
import { useState } from 'react'

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    // Authentication for Log In
    const authToken = false

    // Sign in button clicked
    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
    }

    return (
        <div className="overlay">
            <Nav miniamal={false} authToken={authToken} setShowModal={setShowModal}/>
             <div className="home">
                <h1>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}

                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )}

            </div>
        </div>
    )
}

export default Home