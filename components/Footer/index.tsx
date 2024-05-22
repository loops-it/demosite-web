/* eslint-disable react/jsx-key */
import { logo } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import pageStyles from '@/styles/page.module.css'
import Link from 'next/link'
import { ButtonPrimary } from '../Buttons'

const Footer = () => {



    return (
        <>
           <div style={{backgroundColor: '#000'}} className='d-flex justify-content-center align-items-center p-5'>
           <h1 style={{color: '#fff'}}>Footer</h1>
           </div>
        </>
    )
}

export default Footer