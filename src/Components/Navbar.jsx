import React, { useState } from "react";
import Logo from "/src/Images/Logo.png";
import ProductImg from "/src/Images/ProductCard.png";

function Navbar() {
  const [isTrue, setIsTrue] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const profilPopup = [
    {
      name: "Your Orders",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.1797 1.99902H5.82617C4.46164 1.99902 3.35547 3.10519 3.35547 4.46973V20.5293C3.35547 21.8938 4.46164 23 5.82617 23H18.1797C19.5442 23 20.6504 21.8938 20.6504 20.5293V4.46973C20.6504 3.10519 19.5442 1.99902 18.1797 1.99902Z"
            stroke="#1A1A1A"
            stroke-width="1.5"
          />
          <path
            d="M8.29492 8.17627H15.707M8.29492 13.1177H15.707M8.29492 18.0591H13.2363"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Coupons & Offers",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.50234 14.5005L14.5023 9.50049M9.50234 9.50049H9.51334M14.4913 14.5005H14.5023M2.46634 9.34449C2.21834 9.34449 1.99134 9.14249 2.00234 8.87949C2.06934 7.33749 2.25734 6.33349 2.78234 5.53949C3.0818 5.08702 3.45734 4.68982 3.89234 4.36549C5.05734 3.50049 6.70234 3.50049 9.99434 3.50049H14.0083C17.3003 3.50049 18.9453 3.50049 20.1123 4.36549C20.5433 4.68549 20.9193 5.08249 21.2213 5.53949C21.7463 6.33349 21.9343 7.33749 22.0013 8.87949C22.0123 9.14249 21.7853 9.34449 21.5363 9.34449C20.1503 9.34449 19.0263 10.5335 19.0263 12.0005C19.0263 13.4675 20.1503 14.6565 21.5363 14.6565C21.7853 14.6565 22.0123 14.8585 22.0013 15.1225C21.9343 16.6635 21.7463 17.6675 21.2213 18.4625C20.9218 18.9146 20.5462 19.3115 20.1113 19.6355C18.9453 20.5005 17.3003 20.5005 14.0083 20.5005H9.99534C6.70334 20.5005 5.05834 20.5005 3.89134 19.6355C3.4567 19.3111 3.0815 18.9139 2.78234 18.4615C2.25734 17.6675 2.06934 16.6635 2.00234 15.1215C1.99134 14.8585 2.21834 14.6565 2.46634 14.6565C3.85234 14.6565 4.97634 13.4675 4.97634 12.0005C4.97634 10.5335 3.85234 9.34449 2.46634 9.34449Z"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Your Reviews",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.60061 8.64407H16.3116M7.60061 12.9996H12.5005M10.1322 20.1916L7.60061 21.7105V18.4439H5.42287C4.55651 18.4439 3.72563 18.0998 3.11302 17.4872C2.50041 16.8745 2.15625 16.0437 2.15625 15.1773V6.46632C2.15625 5.59996 2.50041 4.76909 3.11302 4.15648C3.72563 3.54387 4.55651 3.19971 5.42287 3.19971H18.4893C19.3557 3.19971 20.1866 3.54387 20.7992 4.15648C21.4118 4.76909 21.756 5.59996 21.756 6.46632V11.3663"
            stroke="#1A1A1A"
            stroke-width="1.63331"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.2712 21.5117L15.9062 22.7509C15.836 22.7874 15.757 22.8037 15.6781 22.798C15.5992 22.7922 15.5235 22.7646 15.4593 22.7183C15.3951 22.672 15.3451 22.6088 15.3148 22.5357C15.2845 22.4626 15.2751 22.3825 15.2877 22.3044L15.7396 19.6792L13.8264 17.8204C13.7693 17.7652 13.7289 17.6951 13.7098 17.618C13.6906 17.5409 13.6935 17.46 13.7182 17.3845C13.7428 17.309 13.7882 17.242 13.8491 17.191C13.91 17.14 13.984 17.1072 14.0627 17.0963L16.7065 16.7131L17.889 14.3252C17.9244 14.254 17.9789 14.1942 18.0464 14.1524C18.1139 14.1105 18.1918 14.0884 18.2712 14.0884C18.3506 14.0884 18.4285 14.1105 18.496 14.1524C18.5635 14.1942 18.618 14.254 18.6534 14.3252L19.8359 16.7131L22.4797 17.0963C22.5582 17.1076 22.6319 17.1406 22.6925 17.1916C22.7532 17.2426 22.7984 17.3096 22.823 17.3849C22.8475 17.4603 22.8505 17.541 22.8316 17.618C22.8127 17.6949 22.7727 17.7651 22.716 17.8204L20.8028 19.6792L21.2536 22.3033C21.2672 22.3816 21.2585 22.4621 21.2286 22.5356C21.1987 22.6092 21.1487 22.6729 21.0844 22.7195C21.0201 22.7661 20.944 22.7938 20.8648 22.7993C20.7856 22.8049 20.7064 22.7881 20.6362 22.7509L18.2712 21.5117Z"
            stroke="#1A1A1A"
            stroke-width="1.63331"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Followed Providers",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.99805 21.0005H4.99805M4.99805 21.0005H18.998M4.99805 21.0005V9.32849M20.998 21.0005H18.998M18.998 21.0005V9.32849M4.99805 9.32849C4.96066 9.30701 4.92397 9.28434 4.88805 9.26049L4.34805 8.90049C3.9663 8.64586 3.68373 8.26771 3.54772 7.82945C3.41171 7.3912 3.43054 6.91951 3.60105 6.49349L4.49505 4.25749C4.64354 3.88639 4.89981 3.5683 5.23081 3.34425C5.56181 3.1202 5.95235 3.00046 6.35205 3.00049H17.644C18.0437 3.00046 18.4343 3.1202 18.7653 3.34425C19.0963 3.5683 19.3526 3.88639 19.501 4.25749L20.395 6.49349C20.5656 6.91951 20.5844 7.3912 20.4484 7.82945C20.3124 8.26771 20.0298 8.64586 19.648 8.90049L19.108 9.26049C19.0721 9.28434 19.0354 9.30701 18.998 9.32849M4.99805 9.32849C5.32109 9.51507 5.68989 9.60758 6.06275 9.59556C6.43561 9.58355 6.79768 9.46748 7.10805 9.26049L8.99805 8.00049L10.888 9.26049C11.2167 9.47977 11.603 9.59679 11.998 9.59679C12.3931 9.59679 12.7794 9.47977 13.108 9.26049L14.998 8.00049L16.888 9.26049C17.1984 9.46748 17.5605 9.58355 17.9333 9.59556C18.3062 9.60758 18.675 9.51507 18.998 9.32849"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.998 21.0005V16.0005C13.998 15.4701 13.7873 14.9613 13.4123 14.5863C13.0372 14.2112 12.5285 14.0005 11.998 14.0005C11.4676 14.0005 10.9589 14.2112 10.5838 14.5863C10.2088 14.9613 9.99805 15.4701 9.99805 16.0005V21.0005"
            stroke="#1A1A1A"
            stroke-width="1.5"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Browsing History",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.63405 18.3639C7.1065 19.8364 9.04398 20.7527 11.1163 20.9567C13.1887 21.1607 15.2677 20.6398 16.999 19.4827C18.7303 18.3256 20.0068 16.604 20.6109 14.6112C21.2151 12.6184 21.1095 10.4778 20.3122 8.55408C19.5149 6.63039 18.0752 5.0427 16.2385 4.06158C14.4017 3.08045 12.2816 2.7666 10.2394 3.17352C8.19714 3.58043 6.35921 4.68293 5.03878 6.29312C3.71835 7.90332 2.99714 9.92157 2.99805 12.0039V13.9999"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.998047 12L2.99805 14L4.99805 12M10.998 8V13H15.998"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Addresses",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.39755 4.75953C7.88787 3.29902 9.89436 2.48566 11.981 2.49619C14.0676 2.50673 16.0658 3.34032 17.5413 4.81581C19.0168 6.2913 19.8503 8.28946 19.8609 10.3761C19.8714 12.4627 19.0581 14.4692 17.5976 15.9595L13.4116 20.1455C13.0365 20.5205 12.5279 20.7311 11.9976 20.7311C11.4672 20.7311 10.9586 20.5205 10.5836 20.1455L6.39755 15.9595C4.91244 14.4743 4.07812 12.4599 4.07812 10.3595C4.07812 8.25915 4.91244 6.24479 6.39755 4.75953Z"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M11.998 13.3594C13.6549 13.3594 14.998 12.0162 14.998 10.3594C14.998 8.70252 13.6549 7.35938 11.998 7.35938C10.3412 7.35938 8.99805 8.70252 8.99805 10.3594C8.99805 12.0162 10.3412 13.3594 11.998 13.3594Z"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Customer Support",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.936 7.9999H20.998C21.5285 7.9999 22.0372 8.21061 22.4123 8.58569C22.7873 8.96076 22.998 9.46947 22.998 9.9999V13.9999C22.998 14.5303 22.7873 15.039 22.4123 15.4141C22.0372 15.7892 21.5285 15.9999 20.998 15.9999H19.936C19.6925 17.9333 18.7516 19.7113 17.29 21.0001C15.8285 22.289 13.9467 23.0001 11.998 22.9999V20.9999C13.5893 20.9999 15.1155 20.3678 16.2407 19.2425C17.3659 18.1173 17.998 16.5912 17.998 14.9999V8.9999C17.998 7.4086 17.3659 5.88248 16.2407 4.75726C15.1155 3.63204 13.5893 2.9999 11.998 2.9999C10.4067 2.9999 8.88062 3.63204 7.75541 4.75726C6.63019 5.88248 5.99805 7.4086 5.99805 8.9999V15.9999H2.99805C2.46761 15.9999 1.95891 15.7892 1.58383 15.4141C1.20876 15.039 0.998047 14.5303 0.998047 13.9999V9.9999C0.998047 9.46947 1.20876 8.96076 1.58383 8.58569C1.95891 8.21061 2.46761 7.9999 2.99805 7.9999H4.06005C4.30408 6.0668 5.24513 4.28917 6.70662 3.00058C8.16811 1.71198 10.0496 1.00098 11.998 1.00098C13.9465 1.00098 15.828 1.71198 17.2895 3.00058C18.751 4.28917 19.692 6.0668 19.936 7.9999ZM2.99805 9.9999V13.9999H3.99805V9.9999H2.99805ZM19.998 9.9999V13.9999H20.998V9.9999H19.998ZM7.75805 15.7849L8.81805 14.0889C9.77108 14.686 10.8734 15.0018 11.998 14.9999C13.1227 15.0018 14.225 14.686 15.178 14.0889L16.238 15.7849C14.9674 16.5812 13.4976 17.0024 11.998 16.9999C10.4985 17.0024 9.02872 16.5812 7.75805 15.7849Z"
            fill="#1A1A1A"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Settings",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.14396 21.5853C7.49003 21.0914 5.99212 20.1778 4.79596 18.9333C5.18079 18.4769 5.42069 17.916 5.48495 17.3225C5.54921 16.7289 5.43491 16.1297 5.15668 15.6014C4.87844 15.0732 4.44893 14.64 3.9231 14.3573C3.39727 14.0746 2.79904 13.9551 2.20496 14.0143C2.06931 13.3514 2.0013 12.6765 2.00196 11.9998C2.00196 10.9548 2.16196 9.94683 2.45996 8.99983H2.50196C3.01184 8.99999 3.51334 8.8702 3.95912 8.6227C4.40491 8.37521 4.78025 8.01818 5.04972 7.58532C5.31919 7.15247 5.47389 6.65808 5.49922 6.14883C5.52454 5.63958 5.41965 5.13228 5.19446 4.67483C6.36712 3.58375 7.78473 2.79032 9.32796 2.36133C9.57915 2.85453 9.96188 3.26863 10.4338 3.5578C10.9057 3.84698 11.4485 3.99996 12.002 3.99983C12.5554 3.99996 13.0982 3.84698 13.5701 3.5578C14.042 3.26863 14.4248 2.85453 14.676 2.36133C16.2192 2.79032 17.6368 3.58375 18.8095 4.67483C18.5826 5.13548 18.4778 5.64665 18.5051 6.15941C18.5323 6.67216 18.6907 7.16933 18.9652 7.60334C19.2396 8.03735 19.6208 8.39366 20.0723 8.63817C20.5238 8.88268 21.0305 9.00721 21.544 8.99983C21.8484 9.9707 22.0028 10.9824 22.002 11.9998C22.002 12.6898 21.932 13.3638 21.799 14.0148C21.2049 13.9556 20.6066 14.0751 20.0808 14.3578C19.555 14.6405 19.1255 15.0737 18.8472 15.6019C18.569 16.1302 18.4547 16.7294 18.519 17.323C18.5832 17.9165 18.8231 18.4774 19.208 18.9338C18.0117 20.1781 16.5138 21.0915 14.86 21.5853C14.6657 20.98 14.2843 20.4519 13.7707 20.0773C13.257 19.7027 12.6377 19.5008 12.002 19.5008C11.3662 19.5008 10.7469 19.7027 10.2332 20.0773C9.7196 20.4519 9.33818 20.98 9.14396 21.5853Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M12.002 15.5C12.4616 15.5 12.9167 15.4095 13.3413 15.2336C13.766 15.0577 14.1518 14.7999 14.4768 14.4749C14.8018 14.1499 15.0596 13.764 15.2355 13.3394C15.4114 12.9148 15.502 12.4596 15.502 12C15.502 11.5404 15.4114 11.0852 15.2355 10.6606C15.0596 10.236 14.8018 9.85013 14.4768 9.52513C14.1518 9.20012 13.766 8.94231 13.3413 8.76642C12.9167 8.59053 12.4616 8.5 12.002 8.5C11.0737 8.5 10.1835 8.86875 9.52708 9.52513C8.8707 10.1815 8.50195 11.0717 8.50195 12C8.50195 12.9283 8.8707 13.8185 9.52708 14.4749C10.1835 15.1313 11.0737 15.5 12.002 15.5Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
    {
      name: "Sign Out",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.4742 21.2456H8.33717C7.04531 21.3047 5.78214 20.8527 4.82096 19.9876C3.85979 19.1224 3.27789 17.9136 3.20117 16.6226V7.37862C3.27789 6.08769 3.85979 4.87887 4.82096 4.0137C5.78214 3.14852 7.04531 2.69657 8.33717 2.75563H13.4732"
            stroke="#F04438"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.7925 12.0005H7.43945"
            stroke="#F04438"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M16.0801 17.1367L20.4841 12.7327C20.677 12.538 20.7853 12.2749 20.7853 12.0007C20.7853 11.7266 20.677 11.4635 20.4841 11.2687L16.0801 6.86475"
            stroke="#F04438"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      link: "",
    },
  ];
  return (
    <>
      <nav className="bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00]">
        <div className="mx-auto max-w-[1920px] px-2 sm:px-6 lg:px-8 xl:px-15">
          <div className="relative flex py-2 items-center sm:justify-between">
            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                onClick={() => setIsTrue(!isTrue)}
                className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-700 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <i className="fa-solid fa-bars text-[#1A1A1A] text-2xl"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M7.5 25.5L28.5 25.5M7.5 18H28.5M7.5 10.5L19.5 10.5"
                    stroke="#1A1A1A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex shrink-0 items-center ml-2 sm:ml-0">
              <img
                className="xl:h-9 h-8 w-auto sm:mr-4"
                src={Logo}
                alt="Your Company"
              />
            </div>

            <div className="bg-white p-1 2xl:p-[5px] rounded-lg sm:flex max-w-[800px] mx-2 w-full hidden">
              <input
                type="text"
                className="w-full px-2 outline-none 2xl:text-[20px]"
              />
              <button className="bg-[#002882] 2xl:px-[16px] cursor-pointer 2xl:py-[6px] py-[3px] px-[12px] rounded-[5px]"
              >
                {/* <i className="fa-solid fa-magnifying-glass text-[#E6EAF3]"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M15.9434 14.2929C15.5529 13.9024 14.9197 13.9024 14.5292 14.2929C14.1387 14.6834 14.1387 15.3166 14.5292 15.7071L15.9434 14.2929ZM20.5292 21.7071C20.9197 22.0976 21.5529 22.0976 21.9434 21.7071C22.334 21.3166 22.334 20.6834 21.9434 20.2929L20.5292 21.7071ZM10.2363 16C6.92262 16 4.23633 13.3137 4.23633 10H2.23633C2.23633 14.4183 5.81805 18 10.2363 18V16ZM4.23633 10C4.23633 6.68629 6.92262 4 10.2363 4V2C5.81805 2 2.23633 5.58172 2.23633 10H4.23633ZM10.2363 4C13.55 4 16.2363 6.68629 16.2363 10H18.2363C18.2363 5.58172 14.6546 2 10.2363 2V4ZM16.2363 10C16.2363 13.3137 13.55 16 10.2363 16V18C14.6546 18 18.2363 14.4183 18.2363 10H16.2363ZM14.5292 15.7071L20.5292 21.7071L21.9434 20.2929L15.9434 14.2929L14.5292 15.7071Z"
                    fill="#E6EAF3"
                  />
                </svg>
              </button>
            </div>
            <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static ml-auto sm:inset-auto sm:ml-4 sm:pr-0">
              {/* Profile dropdown */}
              <div className="relative ml-3 flex gap-3 xl:gap-8  items-center">
                <div className="relative group">
                  {/* Button */}
                  <button onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setDropdownOpen(false)}
                    type="button"
                    className="relative flex gap-2 rounded-full w-max cursor-pointer text-sm focus:outline-none"
                    id="user-menu-button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    // Toggle onClick
                  >
                    <img
                      className="size-8 rounded-full max-w-none"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="hidden md:block">
                      <p className="text-[10px] text-start xl:text-xs font-semibold text-[#333]">
                        Welcome
                      </p>
                      <span className="text-[#1A1A1A] font-semibold text-[13px] lg:text-sm xl:text-base flex items-center">
                        Muhammad Arshad
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1075 11.8925L5.39333 7.17833L6.57167 6L10.6967 10.125L14.8217 6L16 7.17833L11.2858 11.8925C11.1296 12.0487 10.9176 12.1365 10.6967 12.1365C10.4757 12.1365 10.2638 12.0487 10.1075 11.8925Z"
                            fill="#1A1A1A"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {/* Dropdown Menu */}

                  {/* Hover Effect */}
                  <div
        className={`absolute bg-[#F2F2F2] shadow-md rounded-lg transition-all duration-300 ease-in-out translate-y-0 flex gap-5 justify-end w-[250px] md:w-[300px] 
        left-1/2 transform md:-translate-x-1/2 -translate-x-2/2 ${
          dropdownOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
                    {/* <div className="absolute w-4 h-4 bg-[#FCFCFC] top-[-6px] rotate-45 z-0 right-[20%]"></div> */}
                    {/* <div className='bg-[#FCFCFC] p-3 rounded-l-lg w-max max-h-[525px] overflow-y-auto scrollbar-hide'>
          <h3 className='text-base xl:text-lg font-semibold'>Browsing History</h3>
          <div className='bg-[#F2F2F2] rounded-lg overflow-hidden flex mt-3'>
            <img className='w-24 h-20' src={ProductImg} alt="" />
            <div className='p-2'>
              <p className='w-[200px] truncate text-xs'>Men's Trendy Platform Shoes Most Trendy</p>
              <div className='flex gap-1 justify-between'>
              <p className="text-xs font-semibold">PKR <span className="text-xl">5,699</span> 
              <span className="text-xs font-normal">4.5k Sold</span></p>
              <button className='bg-[#FCFCFC] rounded-lg p-1.5 border-[1px] border-[#CCD1D2] '>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                 <path d="M10.0977 8.30059H11.8977V5.60059H14.5977V3.80059H11.8977V1.10059H10.0977V3.80059H7.39766V5.60059H10.0977V8.30059ZM6.49766 16.4006C5.50766 16.4006 4.70666 17.2106 4.70666 18.2006C4.70666 19.1906 5.50766 20.0006 6.49766 20.0006C7.48766 20.0006 8.29766 19.1906 8.29766 18.2006C8.29766 17.2106 7.48766 16.4006 6.49766 16.4006ZM15.4977 16.4006C14.5077 16.4006 13.7067 17.2106 13.7067 18.2006C13.7067 19.1906 14.5077 20.0006 15.4977 20.0006C16.4877 20.0006 17.2977 19.1906 17.2977 18.2006C17.2977 17.2106 16.4877 16.4006 15.4977 16.4006ZM7.48766 11.9006H14.1927C14.8677 11.9006 15.4617 11.5316 15.7677 10.9736L19.2417 4.66459L17.6667 3.80059L14.1927 10.1006H7.87466L4.04066 2.00059H1.09766V3.80059H2.89766L6.13766 10.6316L4.92266 12.8276C4.26566 14.0336 5.12966 15.5006 6.49766 15.5006H17.2977V13.7006H6.49766L7.48766 11.9006Z" fill="#1A1A1A"/>
              </svg>
              </button>
              </div>
            </div>
          </div>
        </div> */}
                    <div className="flex flex-col gap-5 w-full">
                      <div className="bg-[#FCFCFC] z-10 p-3 rounded-lg">
                        <button
                          type="button"
                          className="relative flex gap-2 rounded-full w-max cursor-pointer text-sm focus:outline-none"
                          id="user-menu-button"
                          // aria-expanded={dropdownOpen}
                          aria-haspopup="true"
                          // Toggle onClick
                        >
                          <img
                            className="size-8 rounded-full max-w-none"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <div>
                            <p className="text-[10px] text-start xl:text-xs font-semibold text-[#333]">
                              Welcome
                            </p>
                            <span className="text-[#1A1A1A] font-semibold text-[13px] lg:text-sm xl:text-base flex items-center">
                              Muhammad Arshad
                            </span>
                          </div>
                        </button>
                      </div>
                      <div className="bg-[#FCFCFC] z-10 p-3 rounded-b-lg">
                        <ul>
                          {profilPopup.map((item) => (
                            <>
                              <li>
                                <a className="flex gap-2 cursor-pointer">
                                  {item.svg} {item.name}
                                </a>
                              </li>
                              <p className="h-[1px] bg-[#F2F2F2] my-3"></p>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="hidden md:flex gap-1 text-sm xl:text-base cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 xl:w-9"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M29.905 11.9999H31.498C32.2937 11.9999 33.0568 12.3159 33.6194 12.8785C34.182 13.4411 34.498 14.2042 34.498 14.9998V20.9998C34.498 21.7955 34.182 22.5586 33.6194 23.1212C33.0568 23.6838 32.2937 23.9998 31.498 23.9998H29.905C29.5397 26.8999 28.1283 29.5669 25.936 31.5002C23.7437 33.4335 20.9211 34.5001 17.998 34.4999V31.4999C20.385 31.4999 22.6742 30.5516 24.362 28.8638C26.0498 27.176 26.998 24.8868 26.998 22.4998V13.4999C26.998 11.1129 26.0498 8.82372 24.362 7.13589C22.6742 5.44806 20.385 4.49985 17.998 4.49985C15.6111 4.49985 13.3219 5.44806 11.6341 7.13589C9.94626 8.82372 8.99805 11.1129 8.99805 13.4999V23.9998H4.49805C3.7024 23.9998 2.93934 23.6838 2.37673 23.1212C1.81412 22.5586 1.49805 21.7955 1.49805 20.9998V14.9998C1.49805 14.2042 1.81412 13.4411 2.37673 12.8785C2.93934 12.3159 3.7024 11.9999 4.49805 11.9999H6.09105C6.45709 9.10019 7.86867 6.43376 10.0609 4.50086C12.2531 2.56797 15.0754 1.50146 17.998 1.50146C20.9207 1.50146 23.7429 2.56797 25.9352 4.50086C28.1274 6.43376 29.539 9.10019 29.905 11.9999ZM4.49805 14.9998V20.9998H5.99805V14.9998H4.49805ZM29.998 14.9998V20.9998H31.498V14.9998H29.998ZM11.638 23.6773L13.228 21.1334C14.6576 22.0291 16.3111 22.5027 17.998 22.4998C19.685 22.5027 21.3385 22.0291 22.768 21.1334L24.358 23.6773C22.452 24.8718 20.2474 25.5035 17.998 25.4998C15.7487 25.5035 13.5441 24.8718 11.638 23.6773Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                  Support
                </button>
                <button className="relative cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 xl:w-9"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M3 3H5.61001C7.23001 3 8.505 4.395 8.37 6L7.125 20.94C6.915 23.385 8.84998 25.485 11.31 25.485H27.285C29.445 25.485 31.335 23.715 31.5 21.57L32.31 10.32C32.49 7.83 30.6 5.805 28.095 5.805H8.73001"
                      stroke="#1A1A1A"
                      strokeWidth="2.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.375 33C25.4106 33 26.25 32.1606 26.25 31.125C26.25 30.0894 25.4106 29.25 24.375 29.25C23.3394 29.25 22.5 30.0894 22.5 31.125C22.5 32.1606 23.3394 33 24.375 33Z"
                      stroke="#1A1A1A"
                      strokeWidth="2.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.375 33C13.4105 33 14.25 32.1606 14.25 31.125C14.25 30.0894 13.4105 29.25 12.375 29.25C11.3395 29.25 10.5 30.0894 10.5 31.125C10.5 32.1606 11.3395 33 12.375 33Z"
                      stroke="#1A1A1A"
                      strokeWidth="2.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 15C14 15 16.0704 17 20 17C23.9296 17 25.5 15 25.5 15"
                      stroke="#1A1A1A"
                      strokeWidth="2.25"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="absolute top-[-4px] right-[-8px] xl:top-[-6px] xl:right-[-11px] w-4 h-4 xl:h-auto 
             flex items-center justify-center xl:w-6 bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3]
              text-[9px] xl:text-xs p-0.5 xl:p-1 rounded-full text-[#FCFCFC]"
                  >
                    20
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {isTrue ? (
          <div className="sm:hidden px-2 pb-2" id="mobile-menu">
            <div className="bg-white p-[5px] rounded-lg flex w-full">
              <input type="text" className="w-full outline-none pr-1" />
              <span className="bg-[#002882] lg:p-[8px] lg:px-[16px] py-[3px] px-[6px] rounded-[5px]">
                <i className="fa-solid fa-magnifying-glass text-[#E6EAF3]"></i>
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Navbar;
