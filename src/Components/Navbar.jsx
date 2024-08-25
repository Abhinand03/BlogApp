import React from 'react'
import './nav.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Blogs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav me-5">
                            <li className="nav-item nav-li">
                                <a className="nav-link active"  href="/home">Home</a>
                            </li>
                            <li className="nav-item nav-li">
                                <a className="nav-link active" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item nav-li">
                                <a className="nav-link active" href="/post">Post a Blog</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar