import Image from "next/image";
import styles from "@/styles/page.module.css";
import { ButtonHero, ButtonPrimaryArrow } from "@/components/Buttons";
import {
  caseDevice1,
  imgBlog1,
  imgBlog2,
  imgBlog3,
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
      <div className="ourServices sec-x-padding py-5">
        <div className="d-flex flex-column flex-lg-row p-2 pt-5">
          <div className="col-12 col-lg-6 d-flex px-3 py-0">
            <ServicesCardLeft
              id="1"
              img={serviceImage1}
              title="AI - Powered Chatbot"
              description="Step into the future of communication with our AI-powered chatbot—an intelligent virtual assistant designed to enhance engagement, streamline interactions, and provide personalized assistance effortlessly. "
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-between">
            <div className="mt-0">
              <HorizontalServicesCard
                id="2"
                img={serviceImage2}
                title="E-commerce / POS"
                description="E-commerce/Point of Sale (POS) systems are integral for modern retail."
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>
            <div className="mt-3">
              <HorizontalServicesCard
                id="2"
                img={serviceImage3}
                title="Customer Relationship Management"
                description="Customer Relationship Management (CRM) is a strategic business tool empowering organizations to manage"
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>
            <div className="mt-3">
              <HorizontalServicesCard
                id="2"
                img={serviceImage4}
                title="Lorem Ipsum "
                description="Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the simply dummy text."
                buttonText="Learn More"
                buttonLink="/"
              />
            </div>
          </div>
        </div>
        <div className="d-flex pt-5 pb-2 justify-content-center align-items-center w-100">
          <ButtonPrimaryArrow id="buttonNav" title="See All" link="/" />
        </div>
      </div>

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
      <div className="ourServices sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Our Clients"
          desc="Thousands of leading brands from all over the world trust our solutions and choose us as a partner."
        />
        <ClientSlider />
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
      <div className="ourServices d-flex flex-column justify-content-center align-items-start sec-x-padding py-5">
        <SectionTitleStyleTwo
          textColor="#000000"
          title="Knowledge Centre"
          desc="These feedbacks will confirm to you that we have led our clients to success."
        />
        <div className="row row-cols-3">
          <div className="col-12 col-lg-4">
            <KnoledgeCard
              id="1"
              img={imgBlog1}
              title="Conquer Resistance: Unleash Your True Power"
              description="In the journey of life, we often find ourselves facing an invisible force that knows no bounds, respects no deadlines, and cares not for our aspirations. The resistance lurks in the shadows, impeding our progress and hindering our creative endeavors. "
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div className="col-12 col-lg-4">
            <KnoledgeCard
              img={imgBlog2}
              id="1"
              title="Will AI Replace Your Job?"
              description="In the journey of life, we often find ourselves facing an invisible force that knows no bounds, respects no deadlines, and cares not for our aspirations. The resistance lurks in the shadows, impeding our progress and hindering our creative endeavors. "
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
          <div className="col-12 col-lg-4">
            <KnoledgeCard
              img={imgBlog3}
              id="1"
              title="Transforming Sri Lankan Banking : The Power of Data"
              description="I am excited to explore the profound impact that data visualization and prediction technologies can have on Sri Lankan banks, allowing them to provide a truly customized user experience.  "
              buttonText="Learn More"
              buttonLink="/"
            />
          </div>
        </div>
        <div className="d-flex pt-5 pb-2 justify-content-center align-items-center w-100">
          <ButtonPrimaryArrow id="buttonNav" title="See All" link="/" />
        </div>
      </div>
    </main>
  );
}
