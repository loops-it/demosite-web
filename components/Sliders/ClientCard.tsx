import { caseDevice1, serviceSliderImg1 } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



interface CloentLogoProps {
    imagePath: any;
}

export const ClientLogoSlide: React.FC<CloentLogoProps> = ({imagePath}) => {
    return (
        <>
            <div className="d-flex m-2 mb-4 position-relative justify-content-center align-items-center logoCard shadow p-2 rounded" style={{ margin: "0px auto", minHeight: '100px' }}>
                <Image
                    src={imagePath}
                    width={200} height={200}
                     quality={100}
                    className="img-fluid"
                    alt={""}
                    style={{ width: "auto", height: "50px" }}
                />
            </div>
        </>
    );
};

