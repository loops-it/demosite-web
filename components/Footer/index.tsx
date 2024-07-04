/* eslint-disable react/jsx-key */
import { logo } from "@/constants/images";
import Image from "next/image";
import React from "react";
import pageStyles from "@/styles/page.module.css";
import Link from "next/link";
import { ButtonPrimary } from "../Buttons";
import { KodeTechLogo } from "../SVG/KodeTechLogo";
import { PhoneIcon } from "../SVG/PhoneIcon";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#000" }}
        className="d-flex justify-content-center align-items-center p-5"
      >
        <div className="col-12 col-lg-3">
          <KodeTechLogo width="150px" height="80px" />
          <div className="d-flex flex-row align-items-start">
            <div className="d-flex flex-column p-0 mt-1">
              <PhoneIcon width="16px" height="16px" />
            </div>
            <div className="d-flex flex-column p-0 ms-2">
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#CFD3D7",
                }}
              >
                +94 77 227 5263
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#CFD3D7",
                }}
              >
                +94 77 543 7340
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3"></div>
        <div className="col-12 col-lg-3"></div>
        <div className="col-12 col-lg-3"></div>
      </div>
    </>
  );
};

export default Footer;
