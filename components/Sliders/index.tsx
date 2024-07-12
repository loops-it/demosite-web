import { Carousel } from "antd";
import React from "react";
import { ServicesSolutions } from "./ServiceSolutionSlide";
import { CaseStudySlide } from "./CaseStudySlide";
import { TestimonialSlide } from "./TestimonialSlide";
import {
  logoDialog,
  logoHavlock,
  logoImorich,
  logoLSEG,
  logoPeoples,
  logoRauland,
} from "@/constants/images";
import { ClientLogoSlide } from "./ClientCard";
import lseg from "@/public/aboutus/lseg.png";
import rauland from "@/public/aboutus/rauland.png";
import dell from "@/public/aboutus/dell.png";
import imorich from "@/public/aboutus/imorich.png";
import parachute from "@/public/aboutus/parachute.png";
import havelock from "@/public/aboutus/havelock.png";
import matchstix from "@/public/aboutus/matchstix.png";
import veet from "@/public/aboutus/veet.png";
import nescafe from "@/public/aboutus/nescafe.png";
import idp from "@/public/aboutus/idp.png";
import hutch from "@/public/aboutus/hutch.png";
import shangrila from "@/public/aboutus/shangrila.png";
import comfort from "@/public/aboutus/comfort.png";
import maggi from "@/public/aboutus/maggi.png";
import peoples from "@/public/aboutus/peoples.png";
import dialog from "@/public/aboutus/dialog.png";
import jat from "@/public/aboutus/jat.png";
import bluesky from "@/public/aboutus/bluesky.png";
import Image from "next/image";

export const ServicesSolutionsSlider = () => {
  return (
    <>
      <div
        className="d-block mb-5 position-relative"
        style={{ display: "block !important" }}
      >
        <Carousel autoplay effect="fade">
          <div key="slide1">
            <ServicesSolutions
              id="1"
              text="QA Outsource Work"
              description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div key="slide2">
            <ServicesSolutions
              id="2"
              text="Title 2"
              description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div key="slide3">
            <ServicesSolutions
              id="3"
              text="Title 3"
              description="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export const AllClientSlider = () => {
  const clients = [
    { id: 1, img: lseg, name: "Client 1" },
    { id: 2, img: rauland, name: "Client 2" },
    { id: 3, img: dell, name: "Client 3" },
    { id: 4, img: imorich, name: "Client 1" },
    { id: 5, img: parachute, name: "Client 2" },
    { id: 6, img: havelock, name: "Client 3" },
    { id: 7, img: matchstix, name: "Client 1" },
    { id: 8, img: veet, name: "Client 2" },
    { id: 9, img: nescafe, name: "Client 3" },
    { id: 10, img: idp, name: "Client 1" },
    { id: 11, img: hutch, name: "Client 2" },
    { id: 12, img: shangrila, name: "Client 3" },
    { id: 13, img: comfort, name: "Client 1" },
    { id: 14, img: maggi, name: "Client 2" },
    { id: 15, img: peoples, name: "Client 3" },
    { id: 16, img: dialog, name: "Client 1" },
    { id: 17, img: jat, name: "Client 2" },
    { id: 18, img: bluesky, name: "Client 3" },
  ];

  // Chunk clients into groups of 18 (6 columns * 3 rows)
  {/*const chunkedClients = [];
  for (let i = 0; i < clients.length; i += 18) {
    chunkedClients.push(clients.slice(i, i + 18));
  }*/}

  return (
    <>
      <div
        className="d-block mb-5 position-relative"
        style={{ display: "block !important" }}
      >
        <Carousel autoplay effect="fade">
          {/*<div key="slide1">
            {chunkedClients.map((group, index) => (
              <div
                key={index}
                className="clientcardcontainer d-flex row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5"
              >
                {group.map((client) => (
                  <div style={{backgroundColor: " #f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", padding:"20px", alignItems:'center', justifyContent:"center", margin: '2px' }} key={client.id} className="col p-5">
                    <Image src={client.img} alt={client.name} />
                  </div>
                ))}
              </div>
            ))}
          </div>*/}
          <div key="slide2">
            {clients.map((group, index) => (
              <div
                key={index}
                className="clientcardcontainer d-flex row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5"
              >
                {/* {group.map((client) => ( */}
                  <div key={group.id} className="clientcard col p-5">
                    <Image src={group.img} alt={group.name} />
                  </div>
                {/* ))} */}
              </div>
            ))}
          </div>
          <div key="slide3">
          {clients.map((group, index) => (
              <div
                key={index}
                className="clientcardcontainer d-flex row row-cols-2 row-cols-md-3 row-cols-lg-6 mt-5"
              >
                {/* {group.map((client) => ( */}
                  <div key={group.id} className="clientcard col p-5">
                    <Image src={group.img} alt={group.name} />
                  </div>
                {/* ))} */}
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export const CaseStudySlider = () => {
  return (
    <>
      <div
        className="d-block mb-5 position-relative"
        style={{ display: "block !important" }}
      >
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
      <div
        className="d-block mb-5 position-relative"
        style={{ display: "block !important" }}
      >
        <Carousel
          autoplay
          effect="fade"
          centerMode={true}
          className="testimonial-carousel"
        >
          <div key="slide1">
            <TestimonialSlide
              id={1}
              name="Rachintha de Silva"
              description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  "
              position="CEO (Vacation.lk)"
              rating={3}
            />
          </div>
          <div key="slide2">
            <TestimonialSlide
              id={2}
              name="Rachintha de Silva"
              description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  "
              position="CEO (Vacation.lk)"
              rating={5}
            />
          </div>
          <div key="slide3">
            <TestimonialSlide
              id={3}
              name="Rachintha de Silva"
              description="I had a wonderful experience working with Kodetech solutions . They provide professional high quality and creative solutions. The service provided by Kodetech solutions in terms of web site and booking platform was exellent.  "
              position="CEO (Vacation.lk)"
              rating={4}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export const ClientSlider = () => {
  return (
    <>
      <div
        className="d-block p-5 position-relative"
        style={{ display: "block !important" }}
      >
        <Carousel
          infinite={true}
          slidesPerRow={6}
          slidesToScroll={1}
          arrows={true}
          autoplay
          effect="fade"
          centerMode={true}
          dots={false}
          className="testimonial-carousel p-5"
        >
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
