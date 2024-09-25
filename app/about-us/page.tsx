import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutus.module.css";
import { kodeTechName } from "@/constants/variables";
import { HeroTitle2 } from "@/components/Titles";
import { ButtonHero } from "@/components/Buttons";
import { AllClientSlider, TestimonialSlider } from "@/components/Sliders";
import {
  SectionTitleStyleTwo2,
  SectionTitleAboutus,
} from "@/components/Titles";

const AboutUsPage: React.FC = () => {
  return (
    <>
    <div className="d-xl-none d-xxl-none">
        <div className={`${styles.backgroundContainer}`}>
          <Image
            src="/aboutus/about-us-content-img.png"
            alt="Overlay"
            className={styles.overlay}
            height={500}
            width={500}
          />
        </div>

        <div className="col-12 p-5 pt-5 align-items-start justify-content-center max-width-on-xl-screen d-flex flex-column h-100 text-white">
          <HeroTitle2
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
            titleLineOneStyle={{
              color: "black",
              fontSize: "6vw",
              fontWeight: "normal",
            }}
            titleLineTwoStyle={{
              color: "black",
              fontSize: "6vw",
              fontWeight: "normal",
            }}
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/contact-us"/>
        </div>
      </div>

      {/* <div className="d-md-none d-lg-none ">
        <div className={`${styles.backgroundContainer}`}>
          <img
            src="/aboutus/about-us-content-img.png"
            alt="Overlay"
            className={styles.overlay}
          />
        </div>

        <div className="col-12 p-5 pt-5 align-items-start justify-content-center max-width-on-xl-screen d-flex flex-column h-100 text-white d-md-none d-lg-none">
          <HeroTitle2
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
            titleLineOneStyle={{
              color: "black",
              fontSize: "36px",
              fontWeight: "normal",
            }}
            titleLineTwoStyle={{
              color: "black",
              fontSize: "36px",
              fontWeight: "normal",
            }}
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/contact-us" />
        </div>
      </div>

      <div className="d-none d-md-flex d-lg-none ">
        <div className={`${styles.backgroundContainer}`}>
          <img
            src="/aboutus/about-us-content-img.png"
            alt="Overlay"
            className={styles.overlay}
          />
        </div>

        <div className="col-12 p-5 pt-5 align-items-start justify-content-center max-width-on-xl-screen d-flex flex-column h-100 text-white d-lg-none">
          <HeroTitle2
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
            titleLineOneStyle={{
              color: "black",
              fontSize: "36px",
              fontWeight: "normal",
            }}
            titleLineTwoStyle={{
              color: "black",
              fontSize: "36px",
              fontWeight: "normal",
            }}
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/contact-us" />
        </div>
      </div> */}

      <div className="d-none d-lg-none d-md-none d-sm-none d-xl-flex d-xxl-flex">
        <div className={`${styles.backgroundContainer}`}>
          <Image
            src="/aboutus/about-us-content-img.png"
            alt="Overlay"
            className={styles.overlay}
            width={500}
            height={500}
          />
          <div className="col-12 p-5 align-items-start justify-content-center max-width-on-xl-screen d-flex flex-column h-100 text-white">
            <HeroTitle2
              id="1"
              titleLineOne={"Start to achieve"}
              titleLineTwo={"Your Success With"}
              titleInRedColor={kodeTechName}
              titleLineOneStyle={{ fontSize: "70px", fontWeight: "normal" }}
              titleLineTwoStyle={{ fontSize: "70px", fontWeight: "normal" }}
            />
            <ButtonHero id="buttonNav" title="Contact Us" link="/contact-us" />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imagesContainer}>
          <Image 
            src="/aboutus/img1.png" 
            alt="Image 1" 
            className={styles.image}
            height={266.76}
            width={259.21} 
          />
          <Image
            src="/aboutus/img2.png"
            alt="Image 2"
            className={styles.image2}
            height={266.76}
            width={259.21} 
          />
          <Image 
            src="/aboutus/img3.png" 
            alt="Image 3" 
            className={styles.image}
            height={266.76}
            width={259.21} 
            />
          <Image
            src="/aboutus/img4.png"
            alt="Image 4"
            className={styles.image2}
            height={266.76}
            width={259.21} 
          />
        </div>
        <div className={styles.textContainer}>
          <div>
            <div>
              <SectionTitleAboutus title="About Us" />
            </div>
          </div>
          <h1 className={styles.heading}>
            <br />
            <span className={styles.redText}>Fuelling Global Presence</span>
            <br />
            and Growth through <br />
            Innovative Tech Solutions.
          </h1>
          <p className={styles.paras}>
            Fostering worldwide presence with IT solutions in Sri Lanka, Qatar,
            Malaysia, and Australia. Offering bespoke software development to
            immersive AR/VR experiences. We are your dedicated partner,
            fostering innovation and success in today’s dynamic business
            landscape.
            <br />
            <br />
            Experience unparalleled expertise and innovation, unlocking the path
            to success. Choose us as your gateway to success, where expertise,
            innovation, and unwavering commitment converge for unparalleled
            solutions.
            <br />
            <br />
            At Kode Tech, we simplify development. Understanding your needs,
            clear planning, and commitment to quality ensure a smooth,
            successful process, bringing your vision to life effortlessly.
          </p>
        </div>
      </div>
      <div className={styles.statscontainer}>
        <div className={styles.statbox}>
          <h1>250</h1>
          <p>Successful Projects</p>
        </div>
        <div className={styles.statbox}>
          <h1>250</h1>
          <p>Number Of Clients</p>
        </div>
        <div className={styles.statbox}>
          <h1>250</h1>
          <p>Number Of Sectors</p>
        </div>
        <div className={styles.statbox}>
          <h1>10</h1>
          <p>Countries</p>
          
        </div>
      </div>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>Co-Values of Kodetech</h1>
          <p>
            Explore how we can create your success story through our wide range
            of capabilities.
          </p>
        </header>
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/aboutus/settings_icon.png"
              alt="Icon"
              className={styles.icon}
              height={45}
              width={45}
            />
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum has been the simply dummy text.
            </p>
          </div>
        </div>
      </div>
      <div className="clientscarousel text-center">
        <h1 className="p-3">Our Clients</h1>
        <p className="p-1">
          Thousands of leading brands from all over the world trust our
          solutions and choose us as a partner.
        </p>

        <AllClientSlider />

      </div>
      <div className="ourSolutions sec-x-padding py-5">
        <SectionTitleStyleTwo2
          textColor="#ffffff"
          title="Testimonials"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
        <TestimonialSlider />
      </div>
      <div className="container d-lg-none d-xl-none d-xxl-none">
        <div className="row">
          <div
            className={`${styles.AI} col-12 col-md-6 d-flex align-items-center flex-column text-start`}
          >
            <h2>Build better AI product fast</h2>
            <p>Let our AI simplify the process, </p>
            <p>allowing you to focus on your</p>
            <p>vision while we handle the technical</p>
            <p> details.</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <button type="submit" className={styles.buttonaboutus}>
              Contact us &nbsp; &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="flex-row d-none d-lg-flex d-md-none d-sm-none d-xl-flex d-xxl-flex ">
        <div
          className={`${styles.AI} col d-flex align-items-start flex-column text-start`}
        >
          <h2>Build better AI product fast</h2>
          <p className="flex-row">Let our AI simplify the process, allowing you to focus on your</p>
          <p>vision while we handle the technical details.</p>
        </div>
        <div className="col d-flex align-items-center">
          <button type="submit" className={styles.buttonaboutus}>
            Contact us &nbsp; &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
