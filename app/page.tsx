import Image from "next/image";
import styles from "@/styles/page.module.css";
import { ButtonHero, ButtonPrimaryArrow } from "@/components/Buttons";
import { caseDevice1, whoWeAre } from "@/constants/images";
import {
  HeadingOne,
  HeroTitle,
  SectionTitle,
  SectionTitleStyleTwo,
} from "@/components/Titles";
import { kodeTechName } from "@/constants/variables";
import { Paragraph } from "@/components/Paragraph";
import { CaseStudySlider, ServicesSolutionsSlider, TestimonialSlider } from "@/components/Sliders";

export default function Home() {
  
  return (
    <main className={styles.main}>
      {/* section 1 - hero */}
      <div
        className="heroSec d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding"
        style={{
          backgroundImage: `url('/backgrounds/slide1-content-image.png'), url('/backgrounds/slide1-bg-image.jpg')`,
        }}
      >
        <div className="col-12 max-width-on-xl-screen d-flex flex-column">
          <HeroTitle
            id="1"
            titleLineOne={"Start to achieve"}
            titleLineTwo={"Your Success With"}
            titleInRedColor={kodeTechName}
          />
          <ButtonHero id="buttonNav" title="Contact Us" link="/" />
        </div>
      </div>

      {/* section 2 - who we are */}
      <div className="whoWeAre d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding py-5">
        <div className="col-12 col-lg-6 py-5 ">
          <SectionTitle title="Who we are" />
          <HeadingOne
            titleLineOne={"Partner with Kode"}
            titleInRedColor={kodeTechName}
            titleLineTwo={"Solutions for digital success."}
          />
          <Paragraph text="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience." />
          <ButtonPrimaryArrow id="buttonNav" title="Explore More" link="/" />
        </div>
        <div className="col-12 col-lg-6 py-5 d-flex justify-content-center align-items-center">
          <Image
            src={whoWeAre}
            alt=""
            width={500}
            height={500}
            className={"whoWeAreImg"}
          />
        </div>
      </div>

      {/* section 3 - Our Services */}
      <div className="ourServices d-flex flex-column flex-lg-row justify-content-center align-items-start sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Services"
          desc="Explore how we can create your success story through our wide range of capabilities."
        />
      </div>

      {/* section 4 - Services Solutions */}
      <div className="ourSolutions sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#ffffff"
          title="Services Solutions"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
        <ServicesSolutionsSlider />
      </div>
      

      {/* section 3 - Our Services */}
      <div className="ourServices d-flex flex-column flex-lg-row justify-content-center align-items-start sec-x-padding py-5"></div>

      {/* section 5 - Case Studies */}
      <div className="ourSolutions sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#ffffff"
          title="Case Studies"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
        <CaseStudySlider />
      </div>

      {/* section 6 - Our Clients */}
      <div className="ourServices d-flex flex-column flex-lg-row justify-content-center align-items-start sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Clients"
          desc="Thousands of leading brands from all over the world trust our solutions and choose us as a partner."
        />
      </div>

      {/* section 7 - Testimonials */}
      <div className="ourSolutions sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#ffffff"
          title="Testimonials"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
        <TestimonialSlider />
      </div>

      {/* section 8 - Knowledge Centre */}
      <div className="ourServices d-flex flex-column flex-lg-row justify-content-center align-items-start sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Knowledge Centre"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
      </div>
      
    </main>
  );
}
