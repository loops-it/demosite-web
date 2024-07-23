import Image from "next/image";

import styles from "@/styles/knowledgehub.module.css";
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
  ServicesCardLeft2,
} from "@/components/Cards/ServicesCard";
import { CaseBanne } from "@/components/Sliders";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* section 1 - hero */}
      <div
        className="heroSec d-none d-md-none d-lg-none d-xl-flex   flex-column flex-lg-row justify-content-center align-items-center sec-x-padding"
        style={{
          backgroundImage: `url('/backgrounds/co-working-people-working-together-removebg-preview 1.png'), url('/backgrounds/slide1-bg-image.jpg')`,
        }}
      >
        <div className="col-12 max-width-on-xl-screen d-flex flex-column text-center text-md-start">
          <h1 className="text-white" style={{ fontSize: "50px" }}>
            Elevating Growth with
          </h1>
          <h1 className="text-white pb-5" style={{ fontSize: "50px" }}>
            Informed Insights
          </h1>
          <p className="text-white pb-2">
            Unlocking Wisdom, Empowering Your Expertise for
            <br /> Informed Excellence.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <ButtonHero id="buttonNav" title="Get in Touch" link="/" />
          </div>
        </div>
      </div>

      {/* section tablet - hero */}
      <div
  className="heroSec d-none d-md-flex d-xl-none d-lg-flex flex-column justify-content-center align-items-center sec-x-padding"
  style={{
    backgroundImage: `url('/backgrounds/slide1-bg-image.jpg')`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative',
    height: '350px',
  }}
>
  <Image
    src="/backgrounds/co-working-people-working-together-removebg-preview 1.png"
    alt=""
    width={300}
    height={300}
    className={"projectimg1"}
    style={{ 
      objectFit: 'cover',
      position: 'absolute',
      bottom: 0,
      right: 0
    }}
  />
  <div className="col-12 max-width-on-xl-screen d-flex flex-column text-center text-md-start">
    <h1 className="text-white" style={{ fontSize: "35px" , marginTop: '20px'}}>
      Elevating Growth with
    </h1>
    <h1 className="text-white pb-5" style={{ fontSize: "35px" }}>
      Informed Insights
    </h1>
    <p className="text-white pb-2" style={{ fontSize: "15px" }}>
      Unlocking Wisdom, Empowering Your Expertise for
      <br /> Informed Excellence.
    </p>
    <div className="d-flex justify-content-center justify-content-md-start">
      <ButtonHero id="buttonNav" title="Get in Touch" link="/" />
    </div>
  </div>
</div>


      {/* section 1 mobile - hero */}

      <div
  className="heroSec d-flex d-md-none flex-column flex-lg-row justify-content-center align-items-center sec-x-padding d-block d-lg-none"
  style={{
    backgroundImage: `url('/backgrounds/co-working-people-working-together-removebg-preview 1.png'), url('/backgrounds/slide1-bg-image.jpg')`,
    backgroundSize: 'contain, cover', // or use 'cover, cover' or 'auto, cover' depending on your requirement
    backgroundPosition: 'bottom',
    height: '450px',
  }}
>
  {/* <div className="col-12 max-width-on-xl-screen d-flex flex-column text-center text-md-start " style={{ marginTop: '400px' }}>
    <h1 className="text-white" style={{ fontSize: "30px" }}>
      Elevating Growth with
    </h1>
    <h1 className="text-white pb-5" style={{ fontSize: "30px" }}>
      Informed Insights
    </h1>
    <p className="text-white pb-2" style={{ marginTop: '-50px' }}>
      Unlocking Wisdom, Empowering Your Expertise for
      <br /> Informed Excellence.
    </p>
    <div className="d-flex justify-content-center justify-content-md-start">
      <ButtonHero id="buttonNav" title="Get in Touch" link="/" />
    </div>
  </div> */}
</div>

<div className="col-12 max-width-on-xl-screen d-lg-none d-md-none d-flex flex-column text-center text-md-start " style={{ marginTop: '40px' }}>
    <h1 className="text-black" style={{ fontSize: "36px" }}>
      Elevating Growth with
    </h1>
    <h1 className="text-black pb-5" style={{ fontSize: "36px" }}>
      Informed Insights
    </h1>
    <p className="text-black pb-2" style={{ marginTop: '-20px', fontSize: "16px", marginLeft: '20px', marginRight: '20px' }}>
      Unlocking Wisdom, Empowering Your Expertise for Informed Excellence.
    </p>
    <div className="d-flex justify-content-center justify-content-md-start">
      <ButtonHero id="buttonNav" title="Get in Touch" link="/" />
    </div>
  </div>


      {/* section - heading */}

      <div className="caseStudiesheading d-flex justify-content-center text-center pt-5  ">
        <div className="paragraph mx-5">
          <SectionTitleStyleTwo
            textColor="#000000"
            title="Knowledge Hub"
            desc="Dive into a wealth of insights at our Knowledge Center, an informational haven designed to enrich your understanding, providing valuable insights, and empowering you with the knowledge to navigate and excel in your endeavors."
          />
        </div>
      </div>

      <div>
        <div className="container d-flex justify-content-center" >
          <div className="row  ">
          <div className="col-sm mb-5 ">
              <ServicesCardLeft2
                id="1"
                img="/imgs/1695655788406.png"
                title="Conquer Resistance: Unleash Your True Power"
                description="In the journey of life,  we often find ourselves facing an invisible force that knows no bounds , respects no deadlines…."
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>


            <div className="col-sm mb-5 ">
              <ServicesCardLeft2
                id="1"
                img="/imgs/1687777525995.png"
                title="Will AI Replace Your Job?"
                description="With the rapid advancements in artificial intelligence (AI) technology, there has been widespread concern about potential for AI to…"
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>

            <div className="col-sm  mb-5">
              <ServicesCardLeft2
                id="1"
                img="/imgs/1693682403576.png"
                title="Transforming Sri Lankan Banking : The Power of Data"
                description="I am excited to explore the profound impact that data visualization and prediction technologies can have on Sri Lankan banks…"
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm  mb-5">
            <ServicesCardLeft2
              id="1"
              img="/imgs/1682964767172.png"
              title="Conquer Resistance: Unleash Your True Power"
              description="In the journey of life, we often find ourselves facing an invisible force that knows no bounds, respects no deadlines…"
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div className="col-sm">{/* Another post component */}</div>
          <div className="col-sm">{/* Another post component */}</div>
        </div>
      </div>
    </main>
  );
}
