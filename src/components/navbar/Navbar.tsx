"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from "./navbar.module.css"

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [toggle, setToggle] = useState<Boolean>(false)

    const handleClick = (uri: string) => {
        setActiveLink(uri)
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navBar}`}>
        <div className="container">
            <Link className={`navbar-brand ${styles.brand}`} href="/">TKORP Test</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-end ${toggle? "show" : ""}`} id="navbarNav">
                <ul className={`navbar-nav ${styles.navBarNav}`}>
                    <li className="nav-item"><Link href={"/"} className={`nav-link ${activeLink === "/"? "active": ""}`} onClick={() => handleClick("/")}>Accueil</Link></li>
                    <li className="nav-item"><Link href={"/persons"} className={`nav-link ${activeLink === "/persons"? "active": ""}`} onClick={() => handleClick("/persons")}>Maîtres</Link></li>
                    <li className="nav-item"><Link href={"/animals"} className={`nav-link ${activeLink === "/animals"? "active": ""}`} onClick={() => handleClick("/animals")}>Animaux</Link></li>
                    <li className="nav-item"><Link href={"/answers"} className={`nav-link ${activeLink === "/answers"? "active": ""}`} onClick={() => handleClick("/answers")}>Réponses</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
