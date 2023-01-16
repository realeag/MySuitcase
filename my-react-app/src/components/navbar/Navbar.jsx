import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">My Suitcase</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My Suitcase menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Land</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/my-react-app/src/components/formulario/Form.jsx">Contact Me</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Proyects
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="https://collectibles-alan-reale.netlify.app/">Collectibles</a></li>
                                    <li><a class="dropdown-item" href="https://matestore-alan-reale.netlify.app/">Matestore</a></li>
                                    <li><a class="dropdown-item" href="https://backandforth-alan-reale.netlify.app/">Back&Forth</a></li>                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;