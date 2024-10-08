"use client";

import React from "react";
import { svgProps } from "@/types";
import { useStore } from "@/store";

export const SvgHome: React.FC<svgProps> = ({
  color = "#000000",
  width = "2",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "1" ? "#ffffff" : color;

  return (
    <span>
      <svg
        width="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export const SvgInventory: React.FC<svgProps> = ({
  color = "#000000",
  width = "2",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "2" ? "#ffffff" : color;
  return (
    <span>
      <svg
        width="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="matrix(1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier2" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7"></path>
          <path
            d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7"
            stroke={color}
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
          ></path>
          <path
            d="M21.4 3H2.6A1.6 1.6 0 0 0 1 4.6v.8A1.6 1.6 0 0 0 2.6 7h18.8A1.6 1.6 0 0 0 23 5.4v-.8A1.6 1.6 0 0 0 21.4 3Z"
            fill="none"
            stroke={color}
            strokeWidth={width}
            strokeMiterlimit="10"
          ></path>
          <path
            d="M8 11h8"
            stroke={color}
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    </span>
  );
};

export const SvgSales: React.FC<svgProps> = ({
  color = "#000000",
  width = "2",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "3" ? "#ffffff" : color;
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2.83179 4.38657H3.34341C4.20256 4.38657 4.96125 4.94691 5.21392 5.76808L8.27786 15.7259C8.53053 16.547 9.28921 17.1074 10.1484 17.1074H17.1114C17.9373 17.1074 18.6743 16.5889 18.9534 15.8116L20.9925 10.1312C21.679 8.21867 20.2616 6.20383 18.2295 6.20383H10.66"
          stroke={color}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="10.1707" cy="20.5322" r="1.46779" fill={color} />
        <circle cx="17.0204" cy="20.5322" r="1.46779" fill={color} />
      </svg>
    </span>
  );
};

export const SvgPurchase: React.FC<svgProps> = ({
  color = "#000000",
  width = "0",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "4" ? "#ffffff" : color;
  return (
    <span>
      <svg
        width="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier3" strokeWidth={width}></g>
        <g
          id="SVGRepo_tracerCarrier2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier2">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z"
            fill={color}
          ></path>
        </g>
      </svg>
    </span>
  );
};

export const SvgReports: React.FC<svgProps> = ({
  color = "#000000",
  width = "2",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "5" ? "#ffffff" : color;
  return (
    <span>
      <svg
        width="1.5em"
        fill={color}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier4" strokeWidth={width}></g>
        <g
          id="SVGRepo_tracerCarrier4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier4">
          <path d="M157.867 554.667h-76.8c-29.867 0-51.2 21.333-51.2 51.2v273.067c0 29.867 21.333 51.2 51.2 51.2h76.8c29.867 0 51.2-21.333 51.2-51.2V605.867c0-25.6-21.333-51.2-51.2-51.2zm8.533 324.266c0 4.267-4.267 8.533-8.533 8.533h-76.8c-4.267 0-8.533-4.267-8.533-8.533V605.866c0-4.267 4.267-8.533 8.533-8.533h76.8c4.267 0 8.533 4.267 8.533 8.533v273.067zm251.733-371.2h-76.8c-29.867 0-51.2 21.333-51.2 51.2v328.533c0 29.867 21.333 51.2 51.2 51.2h76.8c29.867 0 51.2-21.333 51.2-51.2v-332.8c0-25.6-21.333-46.933-51.2-46.933zm8.534 375.467c0 4.267-4.267 8.533-8.533 8.533h-76.8c-4.267 0-8.533-4.267-8.533-8.533V554.667c0-4.267 4.267-8.533 8.533-8.533h76.8c4.267 0 8.533 4.267 8.533 8.533V883.2zM678.4 456.533h-76.8c-29.867 0-51.2 21.333-51.2 51.2v384c0 29.867 21.333 51.2 51.2 51.2h76.8c29.867 0 51.2-21.333 51.2-51.2v-384c0-29.867-25.6-51.2-51.2-51.2zm8.533 435.2c0 4.267-4.267 8.533-8.533 8.533h-76.8c-4.267 0-8.533-4.267-8.533-8.533v-384c0-4.267 4.267-8.533 8.533-8.533h76.8c4.267 0 8.533 4.267 8.533 8.533v384zm251.734-486.4h-76.8c-29.867 0-51.2 21.333-51.2 51.2v430.933c0 29.867 21.333 51.2 51.2 51.2h76.8c29.867 0 51.2-21.333 51.2-51.2V456.533c0-25.6-25.6-51.2-51.2-51.2zm8.533 482.134c0 4.267-4.267 8.533-8.533 8.533h-76.8c-4.267 0-8.533-4.267-8.533-8.533V456.534c0-4.267 4.267-8.533 8.533-8.533h76.8c4.267 0 8.533 4.267 8.533 8.533v430.933zm25.6-780.8s-4.267 0 0 0c-4.267 0-4.267 0 0 0H870.4c-12.8 0-21.333 8.533-21.333 21.333s8.533 21.333 21.333 21.333h42.667c-268.8 149.333-563.2 234.667-870.4 251.733-12.8 0-21.333 12.8-21.333 21.333 0 12.8 8.533 21.333 21.333 21.333 324.267-17.067 627.2-106.667 908.8-264.533v42.667c0 12.8 8.533 21.333 21.333 21.333 12.8 0 21.333-8.533 21.333-21.333v-98.133c0-8.533-8.533-17.067-21.333-17.067z"></path>
        </g>
      </svg>
    </span>
  );
};

export const SvgDocuments: React.FC<svgProps> = ({
  color = "#000000",
  width = "1.5",
}) => {
  const { isHovered, hoveredID } = useStore();
  color = isHovered && hoveredID === "6" ? "#ffffff" : color;
  return (
    <span>
      <svg
        width="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier5" strokeWidth={width}></g>
        <g
          id="SVGRepo_tracerCarrier5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier5">
          {" "}
          <path
            d="M18 10L13 10"
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M10 3H16.5C16.9644 3 17.1966 3 17.3916 3.02567C18.7378 3.2029 19.7971 4.26222 19.9743 5.60842C20 5.80337 20 6.03558 20 6.5"
            stroke={color}
            strokeWidth={width}
          ></path>{" "}
          <path
            d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
            stroke={color}
            strokeWidth={width}
          ></path>{" "}
        </g>
      </svg>
    </span>
  );
};

export const SvgArrow: React.FC<svgProps> = ({
  id,
  isClicked,
  className,
  color = "#000000",
}) => {
  const { isHovered, hoveredID, clickedID } = useStore();
  color = isHovered && hoveredID === id ? "#ffffff" : color;
  return (
    <span className={clickedID === id ? (isClicked ? className : "") : ""}>
      <svg
        width="1.5em"
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier6"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier6">
          {" "}
          <g data-name="Layer 2">
            {" "}
            <g data-name="arrow-right">
              {" "}
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              ></rect>{" "}
              <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </span>
  );
};
