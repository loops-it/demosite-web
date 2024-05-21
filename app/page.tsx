import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";
import { ButtonPrimary } from "@/components/Buttons";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className="heroSec d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding" style={{ backgroundImage: `url('/backgrounds/slide1-content-image.png'), url('/backgrounds/slide1-bg-image.jpg')` }}>
        <div className="col-12 max-width-on-xl-screen d-flex flex-column">
          <h2>
            Start to achieve <br>
            </br>Your Success With <br />
            <span>Kode Tech</span>
          </h2>
          <ButtonPrimary  id="buttonNav" title="Contact Us" link='/' />
        </div>
      </div>
      {/* section 2 - who we are */}
      <div className="whoWeAre d-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding">
      
      </div>
    </main>
  );
}
