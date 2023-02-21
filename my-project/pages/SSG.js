import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function ssg() {
  return (
    <>
      <div className={styles.title}>Hi, I'm Jasper.</div>
      <div className={styles.txt}>This is SSG Pages.</div>
      <Link href="./">回到首頁</Link>
    </>
  )
}
