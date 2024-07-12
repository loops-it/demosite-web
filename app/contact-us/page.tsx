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
            titleLineOneStyle={{ fontSize: "70px", fontWeight: "normal" }}
            titleLineTwoStyle={{ fontSize: "70px", fontWeight: "normal" }}
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
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.container}>
        <div className={styles.contactForm}>
          <h1 className={styles.heading}>
            Get in <span className={styles.redText}>Touch</span>
          </h1>
          <p className={styles.description}>
            At Kode Tech, we value your inquiries and feedback. Whether you have
            a project in mind, question about our services, or simply want to
            explore collaboration opportunities, we’re here for you.
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="First Name *"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name *"
                className={styles.input}
              />
            </div>
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="tel"
              placeholder="Phone number *"
              className={styles.input}
            />
            <textarea
              placeholder="Message"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.button}>
              Send &nbsp; &gt;
            </button>
          </form>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.978841581154!2d79.86348677475675!3d6.893133993105995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd0d578b333%3A0x84d9a38f02df8a7!2s2a%20Sulaiman%20Terrace%2C%20Colombo%2000500!5e0!3m2!1sen!2slk!4v1716953016580!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className="d-flex flex-row align-item-center justify-content-center">
                <img style={{ marginTop: "0px" }}
                  src="/contactUs/Phone.png"
                  alt="Phone"
                  className={styles.icon}
                />
                <p className="mb-0 " style={{ lineHeight: "20px" }}>Phone</p>
              </div>
              <br />
              <br />
              <div>
                <p>+94 740 945 555</p>
                <p>+94 775 437 340</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className="d-flex flex-row align-item-center justify-content-center">
                <img style={{ marginTop: "0px" }}
                  src="/contactUs/Location.png"
                  alt="Location"
                  className={styles.icon}
                />
                <p className="mb-0 " style={{ lineHeight: "20px" }}>Location</p>
              </div>
              <br />
              <br />
              <p>Kodetech (Pvt) Ltd.,</p>
              <p>Level 13, MAGA ONE,</p>
              <p> No. 200, Narahenpita Road,</p>
              <p>Colombo 05</p>
            </div>
            <div className={styles.contactItem}>
              <div className="d-flex flex-row align-item-center justify-content-center">
                <img style={{ marginTop: "0px" }}
                  src="/contactUs/Email.png"
                  alt="Email"
                  className={styles.icon}
                />
                <p className="mb-0 " style={{ lineHeight: "20px" }}>Email</p>
              </div>
              <br />
              <br />
              <p>info@ko2labs.com</p>
              <p>sales@ko2labs.com</p>
            </div>
            <div className={styles.socialLinks}>
              <p>Connect With Us</p>
              <div className={styles.icons}>
                <a href="#">
                  <img src="/contactUs/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="/contactUs/Facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="/contactUs/Instagram.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default ContactUsPage;
