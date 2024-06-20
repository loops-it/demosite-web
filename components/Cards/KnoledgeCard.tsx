import { serviceSliderImg1 } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';



interface KnoledgeCardProps {
    id: string;
    title: string;
    img: any;
    description: string;
    buttonText: string;
    buttonLink: string;
}


export const KnoledgeCard: React.FC<KnoledgeCardProps> = ({ id,img, title, description, buttonText, buttonLink }) => {
    return (
        <>
            <div className="d-flex position-relative sliderCard card shadow border-0 rounded-3" style={{ margin: "0px auto" }}>
                <div className="d-flex flex-column p-2" style={{ zIndex: '1' }} >
                    <Image src={img} width={800} height={800} className='img-fluid mb-3' alt={''} style={{ width: '100%', height: 'auto' }} />
                    <h3 className='mb-3 blogCardTitle'>{title}</h3>
                    <p className='blogCardDescription'>{description}</p>
                    <Link className="arrowButtonRedLine" href={buttonLink} style={{ padding: '10px 20px !important' }}>
                        {buttonText}
                        <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    );
};

