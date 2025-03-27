'use client'
import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import classes from './index.module.scss' 
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
 function HeaderComponent({header} : {header : Header}) {
    const pathname = usePathname()
   return (
    <nav className={[classes.header]}>
        <Gutter className={[classes.wrap , noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
            <Link href='/'>
                <Image src ="/logo-black.svg" alt='logo' width={170} height={50} />
            </Link>

            <HeaderNav  header={header}/>
           
        </Gutter>
    </nav>
   )
 }
 
 export default HeaderComponent