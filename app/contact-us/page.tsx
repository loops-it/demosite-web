// pages/contactus.tsx
import React from "react";
import styles from "@/styles/contactus.module.css";
import { kodeTechName } from "@/constants/variables";
import { HeroTitle2 } from "@/components/Titles";
import { ButtonHero } from "@/components/Buttons";

const ContactUsPage: React.FC = () => {
  return (
    <>
      <div className={styles.backgroundContainer}>
        <img
          src="/backgrounds/contactus-bg-content-img.png"
          alt="Overlay"
          className={styles.overlay}
        />
        <div className="col-12 p-5 align-items-start justify-content-center max-width-on-xl-screen d-flex flex-column h-100 text-white">
          <HeroTitle2
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
            titleLineOneStyle={{ fontSize: "70px", fontWeight: "normal" }} // Increase font size here
            titleLineTwoStyle={{ fontSize: "70px", fontWeight: "normal" }} // Increase font size here
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/contact-us" />
        </div>
      </div>
      <div className={styles.topiccontactus}>
        <br></br>
        <p>Contact Us</p>
      </div>
      <div className={styles.contentcontactus}>
        <p>
          At Kode Tec, we value your inquiries and feedback. Whether you have a
          project in mind,
        </p>
        <p>
          question about our services, or simply want to explore collaboration
          opportunities, we're here for you.
        </p>
      </div>
      <div className={styles.backgroundContainer2}>
      <div className={styles.backgroundContainer3}>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default ContactUsPage;
