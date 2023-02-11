import React from 'react'
import Navbar from '../components/Navbar'
import Modal from '../components/smallmodel'

const HomePage = () => {
    return (
        <div className="h-screen w-full bg-orange-200">
            <div className="container">
                <p className="my-5">Welcome to DeepWuxia</p>
                <br />
                <Modal />
            </div>
        </div>
    )
}

export default HomePage
