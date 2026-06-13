// src/app/admin/page.tsx
'use client'
import HeaderNav from "@/ui/components/layout/Header";
import EventForm from "@/modules/events/ui/components/admin/EventForm";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import MemberForm from "@/modules/band-members/ui/components/MemberForm";
import LivePictureForm from "@/modules/gallery/ui/components/admin/LivePictureForm";
import NewsForm from "@/modules/news/ui/components/admin/NewsForm";
import BiographyForm from "@/modules/biography/ui/components/admin/BiographyForm";
import LogoutButton from "@/modules/auth/ui/components/LogoutButton";

import styles from "@/ui/styles/pages/admin.module.scss";


export default function AdminPage() {
  return (
    <NoScrollHorizontal>
      <div className={styles.adminPage}>
          <HeaderNav active="admin" />
          <NewsForm />
          <EventForm />
          <LivePictureForm />
          <BiographyForm />
          <MemberForm />
          <LogoutButton />
      </div>
    </NoScrollHorizontal>
  );
}
