"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./about.module.css";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1 className={styles.sidebarTitle}>About Section</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/about"
                className={`${styles.navLink} ${
                  pathname === "/about" ? styles.active : ""
                }`}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/about/profile"
                className={`${styles.navLink} ${
                  pathname === "/about/profile" ? styles.active : ""
                }`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
