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
        <button onClick={() => pageNavigate('/services')}>Services</button>
      </div>
    </main>
  );
}
