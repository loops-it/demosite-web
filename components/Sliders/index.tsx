import { Carousel } from 'antd';
import React from 'react';
import { ServicesSolutions } from './ServiceSolutionSlide';
import { CaseStudySlide } from './CaseStudySlide';
import { TestimonialSlide } from './TestimonialSlide';
import { logoDialog, logoHavlock, logoImorich, logoLSEG, logoPeoples, logoRauland } from '@/constants/images';
import { ClientLogoSlide } from './ClientCard';



export const ServicesSolutionsSlider = () => {

    return (
        <>
            <div className="d-block mb-5 position-relative" style={{ display: 'block !important' }}>
                <Carousel autoplay effect="fade">
                    <div key="slide1">
                        <ServicesSolutions id="1" text='QA Outsource Work' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />
                    </div>
                    <div key="slide2">
                        <ServicesSolutions id="2" text='Title 2' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />
                    </div>
                    <div key="slide3">
                        <ServicesSolutions id="3" text='Title 3' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};



export const CaseStudySlider = () => {

    return (
        <>
            <div className="d-block mb-5 position-relative" style={{ display: 'block !important' }}>
                <Carousel autoplay effect="fade">
                    <div key="slide1">
                        <CaseStudySlide />
                    </div>
                    <div key="slide2">
                        <CaseStudySlide />
                    </div>
                    <div key="slide3">
                        <CaseStudySlide />
                    </div>
                </Carousel>
            </div>
        </>
    );
};



export const TestimonialSlider = () => {

    return (
        <>
            <div className="d-block mb-5 position-relative" style={{ display: 'block !important' }}>
                <Carousel autoplay effect="fade" centerMode={true} className="testimonial-carousel">
                    <div key="slide1">
                        <TestimonialSlide id={1} name='Rachintha de Silva' description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  " position="CEO (Vacation.lk)" rating={3} />
                    </div>
                    <div key="slide2">
                        <TestimonialSlide id={2} name='Rachintha de Silva' description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  " position="CEO (Vacation.lk)" rating={5} />
                    </div>
                    <div key="slide3">
                        <TestimonialSlide id={3} name='Rachintha de Silva' description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  " position="CEO (Vacation.lk)" rating={4} />
                    </div>
                </Carousel>
            </div>
        </>
    );
};


export const ClientSlider = () => {

    return (
        <>
            <div className="d-block p-5 position-relative" style={{ display: 'block !important' }}>
                <Carousel infinite = {true} slidesPerRow= {6} slidesToScroll={1} arrows={true} autoplay effect="fade" centerMode={true} dots={false} className="testimonial-carousel p-5">
                    <div key="slide1">
                        <ClientLogoSlide imagePath={logoPeoples} />
                    </div>
                    <div key="slide2">
                        <ClientLogoSlide imagePath={logoLSEG} />
                    </div>
                    <div key="slide3">
                        <ClientLogoSlide imagePath={logoRauland} />
                    </div>
                    <div key="slide4">
                        <ClientLogoSlide imagePath={logoHavlock} />
                    </div>
                    <div key="slide5">
                        <ClientLogoSlide imagePath={logoDialog} />
                    </div>
                    <div key="slide6">
                        <ClientLogoSlide imagePath={logoImorich} />
                    </div>
                </Carousel>
            </div>
        </>
    );
};