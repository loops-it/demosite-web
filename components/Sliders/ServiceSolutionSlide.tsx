import { serviceSliderImg1 } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { ServiceArrow } from '../SVG/ServiceArrow';



interface ServicesSolutions {
    id: string;
    text: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}


export const ServicesSolutions: React.FC<ServicesSolutions> = ({ id, text, description, buttonText, buttonLink }) => {
    // const swiper = new Swiper();
    return (
        <>
            <div className="d-flex position-relative sliderCard" style={{ margin: "0px auto" }}>
                <div className="d-flex flex-column flex-lg-row  " style={{ zIndex: '1' }} >
                    <div className="col-12 col-lg-6 left">
                        <Image src={serviceSliderImg1} width={800} height={800} className='img-fluid' alt={''} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column right">
                        <h3 className='mb-0'>{text}</h3>
                        <p style={{ marginTop: '30px', marginBottom: '30px' }}>{description}</p>
                        <Link className="arrowButtonRedLine" href={buttonLink} style={{ padding: '10px 20px !important' }}>
                            {buttonText}
                            <FaChevronRight />
                        </Link>
                    </div>
                </div>
                <div className="d-flex serviceArrow" style={{ zIndex: '3' }}>
                    <ServiceArrow />
                </div>
            </div>
        </>
    );
};

