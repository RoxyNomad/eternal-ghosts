// src/hooks/useAdmin.ts
"use client";
import { useState, useEffect } from "react";
import { BandMember } from "@/domain/entities/BandMemberEntity";

export interface NewMember {
  name: string;
  role: string;
  imageUrl: string;
}

export function useAdmin() {
  const [members, setMembers] = useState<BandMember[]>([]);
  const [newMember, setNewMember] = useState<NewMember>({ name: "", role: "", imageUrl: "" });

  const fetchMembers = async () => {
    const res = await fetch("/api/admin/band-members");
    const data = await res.json();
    setMembers(data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    await fetch("/api/admin/band-members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    });
    setNewMember({ name: "", role: "", imageUrl: "" });
    fetchMembers();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/admin/band-members/${id}`, { method: "DELETE" });
    fetchMembers();
  };

  const setUploadedImage = (url: string) => {
    setNewMember({ ...newMember, imageUrl: url });
  };

  return {
    members,
    newMember,
    handleChange,
    handleCreate,
    handleDelete,
    setUploadedImage,
  };
}
