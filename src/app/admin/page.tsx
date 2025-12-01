// src/app/admin/page.tsx
'use client'
import HeaderNav from "@/ui/components/layout/Header";
import EventForm from "@/ui/components/admin/EventForm";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import MemberForm from "@/ui/components/admin/MemberForm";

import styles from "@/ui/styles/pages/admin.module.scss";

export default function AdminPage() {
  return (
    <NoScrollHorizontal>
      <div className={styles.adminPage}>
        <HeaderNav active="admin" />
        <MemberForm />
        <EventForm />
      </div>
    </NoScrollHorizontal>
  );
}
