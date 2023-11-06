"use client";
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const navigate = useRouter();

  const pageNavigate = (params: string) => {
    navigate.push(params);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Test</h1>
        <Link href='/about'>Go to about page</Link><br/><br/>
        <Link href='/services'>Go to services page</Link><br/><br/>
        <Link href='/user-list'>Go to user list page</Link><br/><br/>
        <Link href='/tutorial'>Go to user Tutorial page</Link><br/><br/>
        <Link href='/product'>Go to user Product page</Link><br/><br/>
        <button onClick={() => pageNavigate('/login')}>Login</button>
      </div>
    </main>
  );
}
