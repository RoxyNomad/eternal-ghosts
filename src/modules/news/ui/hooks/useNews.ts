// src/hooks/useNews.ts
'use client'

import { useState, useEffect } from 'react';
import { News } from "@/modules/news/domain/news.entity";

export function useNews() {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/news')
            .then((res) => res.json())
            .then(setNews)
            .finally(() => setLoading(false));
    }, []);

    return { news, loading };
}

