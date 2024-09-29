import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link href={"/"}>Accueil</Link></li>
            <li><Link href={"/persons"}>Maitres</Link></li>
            <li><Link href={"/animals"}>Animaux</Link></li>
            <li><Link href={"/answers"}>Réponses</Link></li>
        </ul>
    </div>
  )
}
