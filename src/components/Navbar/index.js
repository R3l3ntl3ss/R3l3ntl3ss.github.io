import React from "react"
import { Link } from "gatsby"

import styles from "./navbar.module.scss"

function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <Link to="/">{"<Dev />"}</Link>
      </div>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/" activeClassName={styles.active}>
          /Home
        </Link>
        <Link
          className={styles.link}
          to="/projects/"
          activeClassName={styles.active}
        >
          /Projects
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
