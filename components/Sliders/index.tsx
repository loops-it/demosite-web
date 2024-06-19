import { Carousel } from 'antd';
import React from 'react';
import { ServicesSolutions } from './ServiceSolutionSlide';
import { CaseStudySlide } from './CaseStudySlide';



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

