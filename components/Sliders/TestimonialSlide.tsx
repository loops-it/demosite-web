import { serviceSliderImg1, testimonialOne } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { ServiceArrow } from '../SVG/serviceArrow';



interface ServicesSolutions {
    id: number;
    name: string;
    position: string;
    description: string;
    rating: number;
}


export const TestimonialSlide: React.FC<ServicesSolutions> = ({ id, name, description, position, rating }) => {
    return (
        <>
            <div className="d-flex position-relative sliderCard" style={{margin: "0px auto"}}>
            <div className="d-flex flex-column flex-lg-row  " style={{zIndex: '1'}} >
                <div className="col-12 col-lg-6 left">
                    <Image src={testimonialOne} width={300} height={300} className='img-fluid' alt={''} style={{width: '100px', height: 'auto'}} />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column right">
                    <h3 className='mb-0'>{name}</h3>
                    <p style={{marginTop: '30px', marginBottom: '30px'}}>{description}</p>
                    <p style={{marginTop: '30px', marginBottom: '30px'}}>{position}</p>
                    <p style={{marginTop: '30px', marginBottom: '30px'}}>{rating}</p>
                </div>
            </div>
            <div className="d-flex serviceArrow" style={{ zIndex: '3'}}>
                    <ServiceArrow />
                </div>
            </div>
        </>
    );
};

