import Image from "next/image";
import styles from "@/styles/casestudy.module.css";
import { FaChevronRight } from "react-icons/fa6";

import {
  ButtonHero,
  ButtonPrimaryArrow,
  ButtonTransparentArrow,
} from "@/components/Buttons";
import {
  caseDevice1,
  freshharvest11,
  imgBlog1,
  imgBlog2,
  imgBlog3,
  ipadmini11,
  projectimg11,
  serviceImage1,
  serviceImage2,
  serviceImage3,
  serviceImage4,
  whoWeAre,
} from "@/constants/images";
import {
  HeadingOne,
  HeroTitle,
  SectionTitle,
  SectionTitleStyleTwo,
} from "@/components/Titles";
import { kodeTechName } from "@/constants/variables";
import { Paragraph } from "@/components/Paragraph";
import {
  CaseStudySlider,
  ClientSlider,
  ServicesSolutionsSlider,
  TestimonialSlider,
} from "@/components/Sliders";
import { KnoledgeCard } from "@/components/Cards/KnoledgeCard";
import {
  HorizontalServicesCard,
  ServicesCard,
  ServicesCardLeft,
} from "@/components/Cards/ServicesCard";
import { CaseBanne } from "@/components/Sliders";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* section 1 - hero */}
      <div
        className="heroSec d-flex d-md-none d-lg-none d-xl-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding d-none d-lg-flex"
        style={{
          backgroundImage: `url('/backgrounds/co-working-people-working-together-removebg-preview 1.png'), url('/backgrounds/slide1-bg-image.jpg')`,
        }}
      >
        <div className="col-12 max-width-on-xl-screen d-lg-flex d-md-none d-flex flex-column">
          <HeroTitle
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/" />
        </div>
      </div>

      {/* section  1- mobile */}

      <div
        className="heroSec d-flex d-md-none flex-column flex-lg-row justify-content-center align-items-center sec-x-padding d-block d-lg-none"
        style={{
          backgroundImage: `url('/backgrounds/co-working-people-working-together-removebg-preview 1.png'), url('/backgrounds/slide1-bg-image.jpg')`,
          backgroundSize: "contain, cover", // or use 'cover, cover' or 'auto, cover' depending on your requirement
          backgroundPosition: "bottom",
          height: "450px",
        }}
      ></div>

      <div className="col-12 max-width-on-xl-screen d-flex d-md-none d-lg-none flex-column align-items-center text-center mt-5">
        <HeroTitle
          id="1"
          titleLineOne={"Start to achieve"}
          titleLineTwo={"Your Success With"}
          titleInRedColor={kodeTechName}
        />
        <ButtonHero id="buttonNav" title="Contact Us" link="/" />
      </div>

      {/* tab view */}

      <div
        className="heroSec d-none d-md-flex d-lg-flex d-xl-none flex-column justify-content-center align-items-center sec-x-padding"
        style={{
          backgroundImage: `url('/backgrounds/slide1-bg-image.jpg')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          position: "relative",
          height: "350px",
        }}
      >
        <Image
          src="/backgrounds/co-working-people-working-together-removebg-preview 1.png"
          alt=""
          width={300}
          height={300}
          className={"projectimg1"}
          style={{
            objectFit: "cover",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        />

        <div className="col-12 max-width-on-xl-screen d-flex d-lg-flex d-xl-none flex-column align-items-left text-left mt-5">
          <h1 className="text-white">Start to achieve </h1>
          <h1 className="text-white">Your Success With </h1>
          <h3 className="text-danger">KodeTech</h3>
          <ButtonHero id="buttonNav" title="Contact Us" link="/" />
        </div>
      </div>

      {/* section - heading */}

      <div className="caseStudiesheading col-12 max-width-on-xl-screen d-flex flex-column align-items-center text-center mt-5">
        <div>
          <SectionTitleStyleTwo
            textColor="#000000"
            title="Case Studies"
            desc="We always sucessfully take our clients to their goals through our projects."
          />
        </div>
      </div>

      <CaseBanne />

      {/* section 2 - fresh harveste */}
      {/* <div className="whoWeAre d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding py-5">
        <div className="col-12 col-lg-6 py-5 ">
          <Image
            src={freshharvest11}
            alt=""
            width={198.73}
            height={50}
            className={"freshharvest11 mb-5 "}
          />

          <h3 className="text-success">Fresh Harvests</h3>
          <h1>Helping the World See Our Seafood</h1>

          <p className="mt-3 mb-3">
            Fresh Harvests, a seafood exporter and a vacuum-packe fish products
            supplier, needed an easy-to-use e ncommerce website to sell their
            products online, as they did not have an existing website
          </p>

          <ButtonPrimaryArrow id="buttonNav" title="Learn More" link="/" />
        </div>
        <div className="col-12 col-lg-6 py-5 d-flex justify-content-center align-items-center">
          <Image
            src={ipadmini11}
            alt=""
            width={650}
            height={500}
            className={"ipadmini11"}
          />
        </div>
      </div> */}

      <div className="d-none d-lg-none d-xl-block">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Projects"
          desc="Fueling Triumphs Through Our Proven Project Methodology."
        />
        <div className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src={projectimg11}
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/projectsmall1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Onegalleface Tower <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465.png"
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Raja Jewellers <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (1).png"
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 2 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Haecker Kitchen
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (2).png"
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 3 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Fresh Harvests
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (3).png"
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 4 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Srilankan Holidays
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm m-4">
              <div
                className="position-relative overflow-hidden"
                style={{ width: "300px", height: "300px" }}
              >
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (4).png"
                  alt=""
                  width={300}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 5 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100  d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="ml-1 text-white text-decoration-none">
                    Aspect Advisory
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile grid */}

      <div className="d-block  d-lg-none d-md-none">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Projects"
          desc="Fueling Triumphs Through Our Proven Project Methodology."
        />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-sm-auto mb-5  ">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src={projectimg11}
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/projectsmall1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Onegalleface Tower <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-auto mb-5">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465.png"
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Raja Jewellers <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-auto mb-5">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (1).png"
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 2 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Haecker Kitchen
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-sm-auto mb-5">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (2).png"
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 3 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Fresh Harvests
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-auto mb-5">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (3).png"
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 4 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Srilankan Holidays
                    <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-auto mb-5">
              <div className="position-relative overflow-hidden">
                {/* Dark overlay */}
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    top: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                ></div>

                <Image
                  src="/imgs/Rectangle 4465 (4).png"
                  alt=""
                  width={400}
                  height={300}
                  className={"projectimg1"}
                  style={{ zIndex: 0 }}
                />

                {/* Overlay image in the center */}
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/imgs/iPad Mini (landscape) copy 5 1.png"
                    alt="Overlay Image"
                    width={250}
                    height={150}
                  />
                </div>
                <div
                  className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                  style={{
                    bottom: "0",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    zIndex: 3,
                    height: "60px",
                  }}
                >
                  <a href="#" className="text-white text-decoration-none">
                    Aspect Advisory <br /> Website
                  </a>
                  <button className="btn btn-danger rounded-circle">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tablet grid */}

      <div className="d-none d-md-block d-lg-block d-xl-none">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Projects"
          desc="Fueling Triumphs Through Our Proven Project Methodology."
        />
        <div className="container d-flex justify-content-center">
          <div className="row justify-content-center">
            {[
              {
                src: projectimg11,
                overlay: "/imgs/projectsmall1.png",
                title: "Onegalleface Tower  Website",
              },
              {
                src: "/imgs/Rectangle 4465.png",
                overlay: "/imgs/iPad Mini (landscape) copy 1.png",
                title: "Raja Jewellers <br /> Website",
              },
              {
                src: "/imgs/Rectangle 4465 (1).png",
                overlay: "/imgs/iPad Mini (landscape) copy 2 1.png",
                title: "Haecker Kitchen <br /> Website",
              },
              {
                src: "/imgs/Rectangle 4465 (2).png",
                overlay: "/imgs/iPad Mini (landscape) copy 3 1.png",
                title: "Fresh Harvests <br /> Website",
              },
              {
                src: "/imgs/Rectangle 4465 (3).png",
                overlay: "/imgs/iPad Mini (landscape) copy 4 1.png",
                title: "Srilankan Holidays <br /> Website",
              },
              {
                src: "/imgs/Rectangle 4465 (4).png",
                overlay: "/imgs/iPad Mini (landscape) copy 5 1.png",
                title: "Aspect Advisory <br /> Website",
              },
            ].map((post, index) => (
              <div key={index} className="col-sm-4 mb-4 px-2">
                {" "}
                {/* Added px-2 for horizontal spacing */}
                <div
                  className="position-relative overflow-hidden"
                  style={{ width: "100%", height: "300px" }}
                >
                  {/* Dark overlay */}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      top: 0,
                      left: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      zIndex: 1,
                    }}
                  ></div>

                  <Image
                    src={post.src}
                    alt=""
                    width={300}
                    height={300}
                    className="projectimg1"
                    style={{ zIndex: 0 }}
                  />

                  {/* Overlay image in the center with margin adjustment */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      width: "200px", // Reduced width for the overlay image
                    }}
                  >
                    <Image
                      src={post.overlay}
                      alt="Overlay Image"
                      width={200} // Adjusted width to match the div width
                      height={120} // Adjusted height to maintain aspect ratio
                    />
                  </div>
                  <div
                    className="position-absolute w-100 d-flex justify-content-between align-items-center px-3"
                    style={{
                      bottom: "0",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      zIndex: 3,
                      height: "60px",
                    }}
                  >
                    <a
                      href="#"
                      className="ml-1 text-white text-decoration-none"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    ></a>
                    <button className="btn btn-danger rounded-circle">
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="d-none d-lg-none align-items-center justify-content-between"
        style={{
          marginLeft: "250px",
          marginRight: "250px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className="  ">
          <h3>Build better AI product fast</h3>
          <p>
            Let our AI simplify the process, allowing you to focus on
            <br /> your vision while we handle the technical details.
          </p>
        </div>
        <div className="contactbutton d-none d-lg-flex">
          <ButtonTransparentArrow id="buttonNav" title="Contact Us" link="/" />
        </div>
      </div>

      {/* mobile */}

      <div
        className="d-flex d-lg-flex flex-column align-items-center justify-content-center mb-5 "
        style={{ marginTop: "0px" }}
      >
        <div className="contactpara text-center">
          <h3>Build better AI product fast</h3>
          <p>
            Let our AI simplify the process, allowing you to focus on your
            vision while we handle the technical details.
          </p>
        </div>
        <div className="contactbutton d-lg-flex justify-content-center">
          <ButtonTransparentArrow id="buttonNav" title="Contact Us" link="/" />
        </div>
      </div>
    </main>
  );
}
