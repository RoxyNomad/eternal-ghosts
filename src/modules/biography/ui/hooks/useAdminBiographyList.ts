// src/modules/biography/ui/hooks/useAdminBiographyList.ts
"use client";

import { useEffect, useState } from "react";
import { Biography } from "@/modules/biography/domain/biography.entity";

export function useAdminBiographyList() {
    const [biographies, setBiographies] = useState<Biography[]>([]);
    const [loading, setLoading] = useState(true);

    const reload = async () => {
        setLoading(true);
        const res = await fetch("/api/biography");
        const data = await res.json();
        setBiographies(data);
        setLoading(false);
    };

    useEffect(() => {
        reload();
    }, []);

    return { biographies, loading, reload };
}