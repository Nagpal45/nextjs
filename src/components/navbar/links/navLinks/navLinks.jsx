"use client"
import Link from 'next/link'
import styles from './navLinks.module.css'
import { usePathname } from 'next/navigation'

export default function Navlink({item}){
    const pathName = usePathname();
    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
    )
}