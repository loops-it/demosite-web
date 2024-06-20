import { testimonialOne } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { LeftQuote } from '../SVG/LeftQuote';
import { RightQuote } from '../SVG/RightQuote';
import { Star } from '../SVG/Star';



interface StarsProps {
    rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
    const totalStars = 5;
    const starsArray = Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} width="20" height="20" color={index < rating ? "#FFA41C" : "#C4C4C4"} />
    ));
    return <div className="d-flex">{starsArray}</div>;
};



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
            <div className="d-flex flex-row px-5 py-5 position-relative testimonialCard" style={{ margin: "0px auto" }}>
                <div className="d-flex align-items-start">
                    <LeftQuote width="38" height="36" />
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column flex-lg-row px-5 " style={{ zIndex: '1' }} >
                        <div className="d-flex flex-row w-100 align-items-center">
                            <div className="d-flex justify-content-center align-items-center">
                                <Image src={testimonialOne} width={130} height={130} alt={''} style={{ width: '130px !important', height: 'auto' }} />
                            </div>
                            <div className=" d-flex flex-column testimonialContent ps-2">
                                <h3 className='mb-1' >{name}</h3>
                                <p className='mb-1' >{position}</p>
                                <Stars rating={rating} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex px-5 mt-4">
                        <p className='testimonialDesc'>{description}</p>
                    </div>
                </div>
                <div className="d-flex align-items-end">
                    <RightQuote width="38" height="36" />
                </div>
            </div>
        </>
    );
};

