import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ fontFamily: 'adamina', background: '#444' }}>
                    <div className="container-fluid">
                        <div className="navbar-brand" style={{ display: 'flex', flexDirection: 'column', fontSize: '25px' }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                World<span style={{ color: '#00d1cd' }}>Wrap</span>
                            </Link>
                            <span style={{ fontSize: '6.5px' }}>
                                Unwrapping
                                <span style={{ fontSize: '6.5px', color: '#00d1cd' }}> the</span> Truth,
                                <span style={{ fontSize: '6.5px', color: '#00d1cd' }}> One</span> Story
                                <span style={{ fontSize: '6.5px', color: '#00d1cd' }}> at</span> a
                                <span style={{ fontSize: '6.5px', color: '#00d1cd' }}> Time</span>
                            </span>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexDirection: 'column', fontSize: '20px', color: 'white' }}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
}

export default NavBar;
