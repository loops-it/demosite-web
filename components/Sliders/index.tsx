import { Carousel } from 'antd';
import React from 'react';
import { ServicesSolutions } from './ServiceSolutionSlide';



export const ServicesSolutionsSlider = () => {



    // const swiper = new Swiper();
    return (
        <>
            <div className="d-block mb-5 position-relative" style={{display: 'block !important'}}>
                <Carousel autoplay effect="fade">
                    <div key="slide1">
                    <ServicesSolutions id="1" text='QA Outsource Work 1' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />
                    </div>
                    <div key="slide2">
                    <ServicesSolutions id="2" text='QA Outsource Work 2' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />                    
                    </div>
                    <div key="slide3">
                    <ServicesSolutions id="3" text='QA Outsource Work 3' description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." buttonText="Learn More" buttonLink="/" />                    
                    </div>
                </Carousel>
            </div>
        </>
    );
};

