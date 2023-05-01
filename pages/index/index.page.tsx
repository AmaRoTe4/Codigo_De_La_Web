import React from 'react'
import styles from './styles.module.css'
import NavBar from '../../components/navbar/navbar'
import Temas from '../../components/Temas/temas'
import FoterMain from '../../components/FoterMain/FoterMain'

export function Page() {
  return (
    <div className={`${styles.containerIndex} `}>
      <NavBar title="Codigo de la Web" />
      <main>
        <h1>
          Encuentra los enlaces que necesitas para comenzar con la programación web en nuestra página.
        </h1>
      </main>
      <aside>
        <input type="search" id="search" name="search" />
      </aside>
      <span>
        <img src="/public/images/desarrollador-de-software.png" alt="imagen-desarrollador-de-software" />
      </span>
      <Temas />
      <FoterMain />
    </div>
  )
}
