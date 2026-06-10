"use client";
import { useEffect, useState } from "react";

export interface Location {
    id: number;
    name: string;
    imageUrl: string | null;
    pictureCount?: number;
}


export function useLocations() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/gallery/locations")
            .then(res => res.json())
            .then(setLocations)
            .finally(() => setLoading(false));
    }, []);

    return { locations, loading };
}
