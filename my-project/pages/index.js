import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.title}>Hi, I'm Jasper.</div>
      <div className={styles.txt}>This is Index Pages.</div>
      <Link href="./SSG">前往SSG</Link>
    </>
  )
}
