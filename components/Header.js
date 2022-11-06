import Link from 'next/link'
import styles from '../styles/Header.module.css';

function Header() {

    return (<nav>
        <ul className={styles.nav}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/log">Log</Link></li>
            <li><Link href="/history">History</Link></li>
        </ul>
    </nav>)

}

export default Header;