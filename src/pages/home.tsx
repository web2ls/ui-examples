import { Link } from 'react-router';

import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.root}>
            <h1>UI Examples</h1>
            <p>This is a collection of UI examples.</p>
            <nav>
                <ul className="flex gap-4 list-none">
                    <li className="border-b-2 border-blue-500">
                        <Link to="/blog-card-page">Blog Card Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
