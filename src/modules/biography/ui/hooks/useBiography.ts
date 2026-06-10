// src/modules/biography/ui/hooks/useBiography.ts
'use client'

import { useState, useEffect } from 'react';
import { Biography } from "@/modules/biography/domain/biography.entity";

export function useBiography() {
    const [biography, setBiography] = useState<Biography[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/biography')
            .then((res) => res.json())
            .then(setBiography)
            .finally(() => setLoading(false));
    }, []);

    return { biography, loading };
}

