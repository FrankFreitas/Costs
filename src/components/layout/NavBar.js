import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

import { Link } from 'react-router-dom'

import Container from './Container'

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to='/'><img src={logo} alt='logo moeda' /></Link>
                <ul className={styles.list}>
                    <li className = {styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to='/company'>Empresa</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default NavBar