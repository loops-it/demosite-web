import { caseDevice1, serviceSliderImg1 } from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  ButtonTransparentArrow } from "@/components/Buttons";
import { freshharvest11 } from '@/constants/images';
import { ipadmini11 } from '@/constants/images';


export const CaseBanner = () => {
    return (
        <>
            <div className="whoWeAre d-none d-lg-none d-xl-flex flex-column flex-lg-row justify-content-center align-items-center sec-x-padding py-5">
  <div className="col-12 col-lg-6 py-5">
    <Image
      src={freshharvest11}
      alt=""
      width={198.73}
      height={50}
      className={"freshharvest11 mb-5"}
    />

    <h3 className="text-success">Fresh Harvests</h3>
    <h1>Helping the World See Our Seafood</h1>

    <p className="mt-3 mb-3">
      Fresh Harvests, a seafood exporter and a vacuum-packed fish products
      supplier, needed an easy-to-use ecommerce website to sell their
      products online, as they did not have an existing website.
    </p>

    <ButtonTransparentArrow id="buttonNav" title="Learn More" link="/" />
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
</div>





        {/* mobile view */}
        <div className='whowearemobile d-md-none d-lg-none d-block'>
  <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
    <Image
      src={ipadmini11}
      alt=""
      width={350}
      height={250}
      className={"ipadmini11"}
    />
  </div>

  <div className="d-flex justify-content-center align-items-center">
    <div className="col-12 col-lg-6 py-5 text-center">
      <div>
        <Image
          src={freshharvest11}
          alt=""
          width={198.73}
          height={50}
          className="freshharvest11 mb-5 mx-auto d-block" 
        />
      </div>
      <h3 className="text-success">Fresh Harvests</h3>
      <h1>Helping the World See Our Seafood</h1>

      <p className="mt-3 mb-3">
        Fresh Harvests, a seafood exporter and a vacuum-packed fish products
        supplier, needed an easy-to-use ecommerce website to sell their products
        online, as they did not have an existing website.
      </p>

      <ButtonTransparentArrow id="buttonNav" title="Learn More" link="/" />
    </div>
  </div>
</div>

      
        {/* tab view */}


        <div className='whowearetab d-md-block  d-none d-lg-none d-xl-none '>
  <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
    
  </div>

  <div className="d-flex justify-content-center align-items-center">
    <div className="col-12 col-lg-6 py-5 text-center">
      <div>
      <Image
      src={ipadmini11}
      alt=""
      width={700}
      height={450}
      className={"ipadmini11"}
    />
        <Image
          src={freshharvest11}
          alt=""
          width={198.73}
          height={50}
          className="freshharvest11 mb-5 mx-auto d-block" 
        />
      </div>
      <h3 className="text-success">Freshhh Harvests</h3>
      <h1>Helping the World See Our Seafood</h1>
      <p className="mt-3 mb-3">
        Fresh Harvests, a seafood exporter and a vacuum-packed fish products
        supplier, needed an easy-to-use ecommerce website to sell their products
        online, as they did not have an existing website.
      </p>
      <ButtonTransparentArrow id="buttonNav" title="Learn More" link="/" />
    </div>
  </div>
</div>

{/* ipad pro view */}


  

  
    <div className="whoweareipad align-items-center text-center d-none d-lg-block d-xl-none " style={{marginBottom: "10px"}}>
      <div>
      <Image
      src={ipadmini11}
      alt=""
      width={970}
      height={650}
      className={"ipadmini11 "}
    />
        <Image
          src={freshharvest11}
          alt=""
          width={198.73}
          height={50}
          className="freshharvest11 mb-5 mx-auto d-block" 
        />
      </div>
      <h3 className="text-success">Fresh Harvests</h3>
      <h1>Helping the World See Our Seafood</h1>

      <p className="mt-3 mb-3">
        Fresh Harvests, a seafood exporter and a vacuum-packed fish products
        supplier, needed an easy-to-use ecommerce website to sell their products
        online, as they did not have an existing website.
      </p>
<div className="d-flex justify-content-center align-items-center pb-5">
<ButtonTransparentArrow id="buttonNav" title="Learn More" link="/"  />

</div>
      
    </div>




        </>
    );
};

