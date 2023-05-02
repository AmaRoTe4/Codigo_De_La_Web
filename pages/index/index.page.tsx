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
          Encuentra en nuestra página los enlaces que necesitas para guiarte en la programación web.
        </h1>
      </main>
      <aside>
        <input type="search" id="search" name="search" />
      </aside>
      <span>
        <img src="/images/diseno-de-paginas-web.png" alt="imagen-desarrollador-de-software" />
      </span>
      <Temas />
      {/*<FoterMain />*/}
    </div>
  )
}
