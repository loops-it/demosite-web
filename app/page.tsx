import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";
import { ButtonHero, ButtonPrimaryArrow } from "@/components/Buttons";
import { whoWeAre } from "@/constants/images";
import { HeadingOne, HeroTitle } from "@/components/Titles";
import { kodeTechName } from "@/constants/variables";
import { Paragraph } from "@/components/Paragraph";


export default function Home() {


  return (
    <main className={styles.main}>
      <Header />

      {/* section 1 - hero */}
      <div className="heroSec d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding" style={{ backgroundImage: `url('/backgrounds/slide1-content-image.png'), url('/backgrounds/slide1-bg-image.jpg')` }}>
        <div className="col-12 max-width-on-xl-screen d-flex flex-column">
          <HeroTitle id="1" titleLineOne={"Start to achieve"} titleLineTwo={"Your Success With"} titleInRedColor={kodeTechName} />
          <ButtonHero id="buttonNav" title="Contact Us" link='/' />
        </div>
      </div>


      {/* section 2 - who we are */}
      <div className="whoWeAre d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding py-5">
        <div className="col-12 col-lg-6 py-5 ">
          <HeadingOne titleLineOne={"Partner with Kode"} titleInRedColor={kodeTechName} titleLineTwo={"Solutions for digital success."}  />

          <Paragraph text="Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience."/>
          <ButtonPrimaryArrow id="buttonNav" title="Explore More" link='/' />
        </div>
        <div className="col-12 col-lg-6 py-5 d-flex justify-content-center align-items-center">
          <Image src={whoWeAre} alt='' width={500} height={500} className={'whoWeAreImg'} />
        </div>
      </div>


    </main>
  );
}
