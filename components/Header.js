import Link from 'next/link'
import styles from '../styles/Header.module.css';
import { Button, } from 'antd';
import { PlusOutlined, LineChartOutlined, DatabaseOutlined} from '@ant-design/icons';


function Header() {

    return (<nav>
        <ul className={styles.nav}>
            <h1 className={styles.getAway}>Cale</h1>
            <Link href="/" passHref>
            <Button type="primary">
                <LineChartOutlined />
                Home
            </Button>
            </Link>
            <Link href="/log" passHref>
            <Button type="primary">
                <PlusOutlined />
                Log
            </Button>
            </Link>
            <Link href="/history" passHref>
            <Button type="primary">
                <DatabaseOutlined />
                History
            </Button>
            </Link>
        </ul>
    </nav>)

}

export default Header;