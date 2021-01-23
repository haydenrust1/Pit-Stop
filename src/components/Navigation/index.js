import React from 'react';
import './style.css'

function Navigation() {
    return (
        <nav class="nav nav-fill">
            <a class="nav-link" aria-current="page" href="#">About</a>
            <a class="nav-link" href="#">Coffee</a>
            <a class="nav-link" href="#">
                <img src="./images/companyLogo.png" alt="Pit Stop Logo" height="200px" width="320px" />
            </a>
            <a class="nav-link" href="#">Location</a>
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </nav>
    )
}

export default Navigation