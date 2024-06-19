import { caseDevice1, serviceSliderImg1 } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const CaseStudySlide = () => {
    return (
        <>
            <div className="d-flex position-relative caseCard" style={{ margin: "0px auto" }}>
                <Image
                    src={caseDevice1}
                    width={1008} height={635}
                    layout="responsive" quality={100}
                    className="img-fluid"
                    alt={""}
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </>
    );
};

