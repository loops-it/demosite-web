import { logo } from '@/constants/images'
import Image from 'next/image'
import React from 'react'
import pageStyles from '@/styles/page.module.css'
import Link from 'next/link'

const Header = () => {


    const navMenu = [
        {
            id: 1,
            title: 'Home',
            link: '/',
            type: 'linkType'
        },
        {
            id: 1,
            title: 'About Us',
            link: '/',
            type: 'linkType'
        },
        {
            id: 1,
            title: 'Our Solutions',
            link: '/',
            type: 'linkType'
        },
        {
            id: 1,
            title: 'Our Projects',
            link: '/',
            type: 'linkType'
        },
        {
            id: 1,
            title: '+94 77 227 5263',
            link: 'tel:+94772275263',
            type: 'linkType'
        },
        {
            id: 1,
            title: 'Contact Us',
            link: '/',
            type: 'buttonType'
        }
    ]


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white px-lg-3 sec-x-padding py-lg-3">
                <div className="container-fluid max-width-on-xl-screen">
                    <Link className="navbar-brand " href="/">
                        <Image src={logo} alt='' width={100} height={50} className={pageStyles.siteLogo} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className='ms-lg-auto d-lg-flex flex-lg-row align-items-lg-center'>
                            {navMenu.map(item => {
                                if (item.type === 'linkType') {
                                    return (
                                        <Link key={item.id} className="nav-link" href={item.link}>
                                            {item.title}
                                        </Link>
                                    );
                                } else if (item.type === 'buttonType') {
                                    return (
                                        <Link key={item.id} className="navButton" href={item.link}>
                                            {item.title}
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header