import { serviceSliderImg1 } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface KnoledgeCardProps {
  id: string;
  title: string;
  img: any;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const ServicesCard: React.FC<KnoledgeCardProps> = ({
  id,
  img,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <div
        className="d-flex position-relative sliderCard card shadow border-0 rounded-3"
        style={{ margin: "0px auto" }}
      >
        <div className="d-flex flex-column p-2" style={{ zIndex: "1" }}>
          <Image
            src={img}
            width={800}
            height={800}
            className="img-fluid mb-3"
            alt={""}
            style={{ width: "200px", height: "auto" }}
          />
          <h3 className="mb-3 blogCardTitle">{title}</h3>
          <p className="blogCardDescription">{description}</p>
          <Link
            className="arrowButtonRedLine"
            href={buttonLink}
            style={{ padding: "10px 20px !important" }}
          >
            {buttonText}
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
};


export const ServicesCardLeft: React.FC<KnoledgeCardProps> = ({
    id,
    img,
    title,
    description,
    buttonText,
    buttonLink,
  }) => {
    return (
      <>
        <div
          className="d-flex position-relative sliderCard card shadow border-0 rounded-3 p-0"
          style={{ margin: "0px auto" }}
        >
          <div className="d-flex flex-column p-0" style={{ zIndex: "1" }}>
            <Image
              src={img}
              width={800}
              height={800}
              className="img-fluid mb-3 p-0"
              alt={""}
              style={{ width: "100%", height: "auto", borderTopRightRadius: '8px', borderTopLeftRadius: '8px' }}
            />
           <div className="d-flex flex-column px-4 pb-4">
           <h3 className="mb-0 blogCardTitle">{title}</h3>
            <p className="blogCardDescriptionL" style={{minHeight: 'max-content !important'}}>{description}</p>
            <Link
              className="arrowButtonRedLine"
              href={buttonLink}
              style={{ padding: "10px 20px !important" }}
            >
              {buttonText}
              <FaChevronRight />
            </Link>
           </div>
          </div>
        </div>
      </>
    );
  };

export const HorizontalServicesCard: React.FC<KnoledgeCardProps> = ({
  id,
  img,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <div
        className="d-flex position-relative sliderCard card shadow border-0 rounded-3 p-0"
        style={{ margin: "0px auto" }}
      >
        <div
          className="d-flex flex-row p-0 align-items-center"
          style={{ zIndex: "1" }}
        >
          <Image
            src={img}
            width={800}
            height={800}
            className="img-fluid mb-0 p-0"
            alt={""}
            style={{ width: "auto", height: "165px", borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px' }}
          />
          <div className="d-flex flex-column ps-3 py-3">
            <h3 className="mb-1 blogCardTitleH">{title}</h3>
            <p className="blogCardDescriptionH mb-1">{description}</p>
            <Link
              className="arrowButtonRedLineH"
              href={buttonLink}
              style={{ padding: "10px 20px !important" }}
            >
              {buttonText}
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
