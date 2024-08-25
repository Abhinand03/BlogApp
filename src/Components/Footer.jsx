import React from 'react'

function Footer() {
    return (
        <>
            <footer className="  text-center text-lg-start mt-5" style={{background:"#d0ccd4"}}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Blog App</h5>

                            <p>
                            The Blog Application is a web-based platform designed to allow users to create, manage, and share content in the form of blog posts. This project was developed to provide a seamless experience for both content creators and readers, offering features like user authentication, rich text editing, post categorization, and comment management.
                            </p>
                        </div>
                        

                        <div className="col-lg-3 col-md-3 mb-4 col-sm-6 col-xs-6 mb-md-0">
                            <h5 className="text-uppercase">About</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/home" class="">Home</a>
                                </li>
                                <li>
                                    <a href="/post" class="">New Post</a>
                                </li>
                                <li>
                                    <a href="/profile" class="">Profile</a>
                                </li>
                               
                            </ul>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Connect</h5>

                            <ul className="list-unstyled mt-3">
                                <li>
                                    <a href="#!" className="">help@blogapp.com</a>
                                </li>
                                <li>
                                    <a href="#!" className="">connect with youtube</a>
                                </li>
                                <li>
                                    <a href="#!" className="">india</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{background:'rgba(0, 0, 0, 0.2)'}}>
                    © 2024 Copyright:Blogapp <a className="text-white" href="/"></a>
                </div>
            </footer>

        </>
    )
}

export default Footer