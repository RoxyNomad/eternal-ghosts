// src/ui/components/news/ReadMore.tsx
'use client';

import { useNews } from "@/hooks/useNews";
import styles from '@/ui/styles/components/ReadMore.module.scss'

export default function ReadMore() {
    const { news, loading } = useNews();

    if (loading) return <p>Loading news...</p>

    return (
        <section className={styles.newsList}>
            {news.map(item => (
                <article key={item.id} className={styles.newsItem}>
                    {item.imageUrl && (
                        <img src={item.imageUrl} alt={item.title} />
                    )}

                    <div className={styles.content}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <time>
                            {new Date(item.publishedAt).toLocaleDateString()}
                        </time>
                    </div>
                </article>
            ))}
        </section>
    )
}