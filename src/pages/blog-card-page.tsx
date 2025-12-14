import { BlogCard } from '../components/blog-card/blog-card';

import styles from './blog-card-page.module.css';

export function BlogCardPage() {
    return (
        <div className={styles.root}>
            <BlogCard />
        </div>
    );
}
