import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";
import { ButtonHero, ButtonPrimaryArrow } from "@/components/Buttons";
import { whoWeAre } from "@/constants/images";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className="heroSec d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding" style={{ backgroundImage: `url('/backgrounds/slide1-content-image.png'), url('/backgrounds/slide1-bg-image.jpg')` }}>
        <div className="col-12 max-width-on-xl-screen d-flex flex-column">
          <h2 className="mb-4">
            Start to achieve <br>
            </br>Your Success With <br />
            <span>Kode Tech</span>
          </h2>
          <ButtonHero id="buttonNav" title="Contact Us" link='/' />
        </div>
      </div>
      {/* section 2 - who we are */}
      <div className="whoWeAre d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding py-5">
        <div className="col-12 col-lg-6 p-5 ">
          <h2>Partner with Kode Tech
          Solutions for digital success.
          </h2>
          <p>Kode Tech (Pvt) Ltd is a well-established and renowned software development company with a rich legacy spanning over 14 years. Our extensive expertise has earned us a strong foothold in 15 international markets, where we’ve successfully delivered over 1,500 projects. Our innovative and creative approach and cutting-edge technologies always help for a better experience.</p>
          <ButtonPrimaryArrow id="buttonNav" title="Explore More" link='/' />
        </div>
        <div className="col-12 col-lg-6 p-5 d-flex justify-content-center align-items-center">
          <Image src={whoWeAre} alt='' width={500} height={500} className={'whoWeAreImg'} />
        </div>
      </div>
    </main>
  );
}
