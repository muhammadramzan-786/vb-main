import React, { useState } from "react";
import GooglePlay from "/src/Images/GooglePlay.svg";
import PlayStore from "/src/Images/PlayStore.svg";
import Logo from "/src/Images/Logo.png";
// import {visa,mastercard,discover,americanexpress,jcb,applePay,GooglePay} from "/src/Images";
import visa from "/src/Images/logos_visa.svg";
import mastercard from "/src/Images/logos_mastercard.svg";
import discover from "/src/Images/logos_discover.svg";
import americanexpress from "/src/Images/cib_american-express.svg";
import jcb from "/src/Images/logos_jcb.svg";
import applePay from "/src/Images/lineicons_apple-pay.svg";
import GooglePay from "/src/Images/logos_google-pay.svg";

function Footer() {
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropDown(openDropDown === dropdownId ? null : dropdownId);
  };
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="max-w-[1920px] px-4 py-4 md:py-8 lg:py-10 2xl:py-16 md:px-8 lg:px-10 2xl:px-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 md:grid-cols-3 xl:grid-cols-5">
          <div>
            <p
              className="font-medium text-[#EEA500] text-base 2xl:text-xl flex justify-between items-baseline"
              onClick={() => {
                toggleDropdown("companyInfo");
              }}
            >
              Company Info
              <svg
                className={`sm:hidden transition-transform duration-300 ${
                  openDropDown === "companyInfo" ? "rotate-180" : ""
                }`}
                transform="scale(1.5)"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0008 15L7.75781 10.758L9.17281 9.34399L12.0008 12.172L14.8288 9.34399L16.2438 10.758L12.0008 15Z"
                  fill="#EEA500"
                />
              </svg>
            </p>
            <nav
  className={`right-0 z-10 flex sm:hidden flex-col xl:space-y-2 text-sm text-[#CCC] 2xl:font-medium 
    transition-transform transition-opacity duration-500 ease-in-out overflow-hidden origin-top
    ${
      openDropDown === "companyInfo"
        ? "opacity-100 scale-y-100 mt-4 sm:hidden" // 🟢 Small screen par dikhega
        : "opacity-0 scale-y-0 h-[0px] sm:block"  // 🔴 Large screens par hidden rahega
    }`}
>

              <a href="">About ValueBox</a>
              <a className="text-[#666]" href="">
                ValueBox Se Ab Zindagi Asan!
              </a>
              <a href="">Press Corner</a>
              <a href="">Careers</a>
              <a href="">ValueBox Billion Tree Program</a>
              <a href="">Contact Us</a>
            </nav>

            <nav className="hidden sm:flex flex-col mt-4 space-y-1 2xl:space-y-2 2xl:text-base text-sm text-[#CCC] 2xl:font-medium">
              <a className=" " href="">
                About ValueBox
              </a>
              <a className="text-[#666]" href="">
                ValueBox Se Ab Zindagi Asan!
              </a>
              <a className=" " href="">
                Press Corner
              </a>
              <a className=" " href="">
                Careers
              </a>
              <a className=" " href="">
                ValueBox Billion Tree Program
              </a>
              <a className=" " href="">
                Contact Us
              </a>
            </nav>
          </div>
          <div className="flex flex-col sm:items-end md:items-center">
            <div>
              <p
                className="font-medium text-[#EEA500] text-base md:text-lg 2xl:text-xl flex justify-between items-baseline"
                onClick={() => {
                  toggleDropdown("customerService");
                }}
              >
                Customer Service
                <svg
                  className={`sm:hidden transition-transform duration-300 ${
                    openDropDown === "customerService" ? "rotate-180" : ""
                  }`}
                  transform="scale(1.5)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0008 15L7.75781 10.758L9.17281 9.34399L12.0008 12.172L14.8288 9.34399L16.2438 10.758L12.0008 15Z"
                    fill="#EEA500"
                  />
                </svg>
              </p>
              <nav
                className={`right-0 z-10 flex sm:hidden flex-col space-y-1 2xl:space-y-2 text-sm text-[#CCC] 2xl:font-medium 
    transition-transform transition-opacity duration-500 ease-in-out overflow-hidden origin-top
    ${
      openDropDown === "customerService"
      ? "opacity-100 scale-y-100 mt-4 sm:hidden" // 🟢 Small screen par dikhega
      : "opacity-0 scale-y-0 h-[0px] sm:block"  // 🔴 Large screens par hidden rahega
    }`}
              >
                <a className=" " href="">
                  Return & Refund Policy
                </a>
                <a className=" " href="">
                  Intellectual property
                </a>
                <a className=" " href="">
                  Shipping Info
                </a>
                <a className=" " href="">
                  Report a Suspicious Activity
                </a>
              </nav>
              <nav className="hidden sm:flex flex-col mt-4 space-y-1 2xl:space-y-2 2xl:text-base text-sm text-[#CCC] 2xl:font-medium">
                <a className=" " href="">
                  Return & Refund Policy
                </a>
                <a className=" " href="">
                  Intellectual property
                </a>
                <a className=" " href="">
                  Shipping Info
                </a>
                <a className=" " href="">
                  Report a Suspicious Activity
                </a>
              </nav>
            </div>
          </div>
          <div className="flex flex-col md:items-center">
            <div>
              <p
                className="font-medium text-[#EEA500] text-base 2xl:text-xl flex justify-between items-baseline"
                onClick={() => {
                  toggleDropdown("help");
                }}
              >
                Help
                <svg
                  className={`sm:hidden transition-transform duration-300 ${
                    openDropDown === "help" ? "rotate-180" : ""
                  }`}
                  transform="scale(1.5)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0008 15L7.75781 10.758L9.17281 9.34399L12.0008 12.172L14.8288 9.34399L16.2438 10.758L12.0008 15Z"
                    fill="#EEA500"
                  />
                </svg>
              </p>
              <nav
                className={`right-0 z-10 flex sm:hidden flex-col space-y-1 2xl:space-y-2 text-sm text-[#CCC] 2xl:font-medium 
    transition-transform transition-opacity duration-500 ease-in-out overflow-hidden origin-top
    ${
      openDropDown === "help"
        ? "opacity-100 scale-y-100 mt-4"
        : "opacity-0 scale-y-0 h-[0px]"
    }`}
              >
                <a className=" " href="">
                  Support center & FAQ’s
                </a>
                <a className=" " href="">
                  Safety Center
                </a>
                <a className=" " href="">
                  ValueBox Purchase Protection
                </a>
              </nav>
              <nav className="hidden sm:flex flex-col mt-4 space-y-1 2xl:space-y-2 2xl:text-base text-sm text-[#CCC] 2xl:font-medium">
                <a className=" " href="">
                  Support center & FAQ’s
                </a>
                <a className=" " href="">
                  Safety Center
                </a>
                <a className=" " href="">
                  ValueBox Purchase Protection
                </a>
              </nav>
            </div>
          </div>
          <div className="flex flex-col sm:items-end md:items-start xl:items-center">
            <div>
              <p
                className="font-medium text-[#EEA500] text-base 2xl:text-xl flex justify-between items-baseline"
                onClick={() => {
                  toggleDropdown("downloadApp");
                }}
              >
                Download ValueBox App
                <svg
                  className={`sm:hidden transition-transform duration-300 ${
                    openDropDown === "downloadApp" ? "rotate-180" : ""
                  }`}
                  transform="scale(1.5)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0008 15L7.75781 10.758L9.17281 9.34399L12.0008 12.172L14.8288 9.34399L16.2438 10.758L12.0008 15Z"
                    fill="#EEA500"
                  />
                </svg>
              </p>
              <nav className="flex flex-col mt-4 space-y-1 2xl:space-y-2 2xl:text-base text-sm text-[#CCC] 2xl:font-medium">
                <div
                  className={`sm:flex flex-col 2xl:text-base text-sm space-y-1 2xl:space-y-2 ${
                    openDropDown === "downloadApp" ? "flex" : "hidden"
                  }`}
                >
                  <a className="flex gap-2 items-center" href="">
                    <svg
                      className="w-[18px] 2xl:w-[24px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V8H18C18.6566 8 19.3068 8.12933 19.9134 8.3806C20.52 8.63188 21.0712 9.00017 21.5355 9.46447C21.9998 9.92876 22.3681 10.48 22.6194 11.0866C22.8707 11.6932 23 12.3434 23 13V17C23.0003 17.6438 22.7934 18.2706 22.41 18.7878C22.0266 19.305 21.4871 19.6851 20.871 19.872C20.6876 20.477 20.3178 21.0086 19.8143 21.3909C19.3108 21.7732 18.6994 21.9867 18.0674 22.0009C17.4353 22.0151 16.815 21.8293 16.2948 21.4699C15.7747 21.1106 15.3814 20.5962 15.171 20H8.83C8.61962 20.5962 8.22629 21.1106 7.70616 21.4699C7.18602 21.8293 6.56566 22.0151 5.93363 22.0009C5.3016 21.9867 4.69021 21.7732 4.18673 21.3909C3.68324 21.0086 3.3134 20.477 3.13 19.872C2.51376 19.6853 1.97395 19.3052 1.59037 18.788C1.20679 18.2708 0.999803 17.6439 1 17V13H7C7.26522 13 7.51957 12.8946 7.70711 12.7071C7.89464 12.5196 8 12.2652 8 12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11H1V9H5C5.26522 9 5.51957 8.89464 5.70711 8.70711C5.89464 8.51957 6 8.26522 6 8C6 7.73478 5.89464 7.48043 5.70711 7.29289C5.51957 7.10536 5.26522 7 5 7H1V3ZM14 18H15.171C15.3687 17.4404 15.7279 16.9521 16.2032 16.5967C16.6785 16.2414 17.2485 16.0349 17.8411 16.0036C18.4337 15.9722 19.0223 16.1173 19.5325 16.4205C20.0426 16.7237 20.4513 17.1714 20.707 17.707C20.8946 17.5195 20.9999 17.2652 21 17V13C21 12.2044 20.6839 11.4413 20.1213 10.8787C19.5587 10.3161 18.7956 10 18 10H14V18ZM7 19C7 18.7348 6.89464 18.4804 6.70711 18.2929C6.51957 18.1054 6.26522 18 6 18C5.73478 18 5.48043 18.1054 5.29289 18.2929C5.10536 18.4804 5 18.7348 5 19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20C6.26522 20 6.51957 19.8946 6.70711 19.7071C6.89464 19.5196 7 19.2652 7 19ZM17.293 18.293C17.1054 18.4805 17.0001 18.7348 17 19C17 19.2314 17.0801 19.4556 17.2269 19.6344C17.3736 19.8133 17.5778 19.9358 17.8047 19.981C18.0316 20.0261 18.2672 19.9912 18.4712 19.8822C18.6753 19.7732 18.8352 19.5968 18.9238 19.3831C19.0124 19.1693 19.0241 18.9315 18.957 18.7101C18.8899 18.4887 18.7481 18.2974 18.5557 18.1688C18.3634 18.0403 18.1324 17.9824 17.9021 18.005C17.6719 18.0277 17.4566 18.1294 17.293 18.293Z"
                        fill="#FCFCFC"
                      />
                    </svg>{" "}
                    Track order any time
                  </a>
                  <a className="flex gap-2 items-center" href="">
                    <svg
                      className="w-[18px] 2xl:w-[24px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.4347 22.4347H18.652V18.2608C18.652 15.5346 17.0922 13.1702 14.8208 12C17.1155 10.8178 18.652 8.4439 18.652 5.73919V1.56528H19.4347C19.8667 1.56528 20.2173 1.21499 20.2173 0.782664C20.2172 0.350386 19.8667 9.15527e-05 19.4347 9.15527e-05C16.2958 9.15527e-05 6.95294 9.15527e-05 3.78262 9.15527e-05C3.35058 9.15527e-05 3 0.350386 3 0.78271C3 1.21504 3.35058 1.56533 3.78262 1.56533H4.56524V5.73923C4.56524 8.44353 6.10137 10.8177 8.39649 12C6.12499 13.1702 4.56524 15.5346 4.56524 18.2609V22.4348H3.78262C3.35058 22.4348 3 22.7851 3 23.2174C3 23.6497 3.35058 24 3.78262 24C9.01012 24 14.2121 24 19.4347 24C19.8667 24 20.2173 23.6497 20.2173 23.2174C20.2172 22.785 19.8667 22.4347 19.4347 22.4347ZM6.15433 6.2115C6.11604 5.76577 6.13038 5.95575 6.13038 1.56528H17.0869C17.0869 5.95575 17.1012 5.76577 17.0629 6.2115H6.15433ZM17.0869 21.5465C12.7695 17.9487 12.9269 18.0135 12.3912 17.8242V16.9565C12.3912 16.5241 12.0407 16.1739 11.6086 16.1739C11.1766 16.1739 10.826 16.5241 10.826 16.9565V17.8242C10.296 18.0115 10.4619 17.9368 6.13038 21.5465V18.2608C6.13038 15.5065 8.17552 13.2269 10.826 12.8451V13.826C10.826 14.2584 11.1766 14.6087 11.6086 14.6087C12.0407 14.6087 12.3912 14.2584 12.3912 13.826V12.8451C15.0417 13.2269 17.0869 15.5065 17.0869 18.2608V21.5465Z"
                        fill="#FCFCFC"
                      />
                    </svg>{" "}
                    Low stock items alerts
                  </a>
                  <a className="flex gap-2 items-center" href="">
                    <svg
                      className="w-[18px] 2xl:w-[24px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.76441 2.99801C10.0458 2.68376 10.3903 2.43237 10.7754 2.26027C11.1605 2.08816 11.5776 1.99921 11.9994 1.99921C12.4212 1.99921 12.8383 2.08816 13.2234 2.26027C13.6085 2.43237 13.953 2.68376 14.2344 2.99801L14.9344 3.78001C15.0344 3.89192 15.1584 3.97987 15.2971 4.03734C15.4357 4.09482 15.5855 4.12034 15.7354 4.11201L16.7854 4.05401C17.2065 4.03089 17.6277 4.09679 18.0215 4.24741C18.4154 4.39804 18.7731 4.63 19.0712 4.92818C19.3694 5.22635 19.6014 5.58404 19.752 5.97791C19.9026 6.37177 19.9685 6.79296 19.9454 7.21401L19.8874 8.26401C19.8792 8.41372 19.9048 8.56335 19.9623 8.70182C20.0198 8.8403 20.1076 8.96408 20.2194 9.06401L21.0024 9.76401C21.3168 10.0454 21.5684 10.3899 21.7406 10.7752C21.9128 11.1604 22.0018 11.5776 22.0018 11.9995C22.0018 12.4215 21.9128 12.8387 21.7406 13.2239C21.5684 13.6091 21.3168 13.9536 21.0024 14.235L20.2194 14.935C20.1075 15.0351 20.0196 15.159 19.9621 15.2977C19.9046 15.4363 19.8791 15.5861 19.8874 15.736L19.9454 16.786C19.9685 17.2071 19.9026 17.6283 19.752 18.0221C19.6014 18.416 19.3694 18.7737 19.0712 19.0718C18.7731 19.37 18.4154 19.602 18.0215 19.7526C17.6277 19.9032 17.2065 19.9691 16.7854 19.946L15.7354 19.888C15.5857 19.8798 15.4361 19.9054 15.2976 19.9629C15.1591 20.0204 15.0353 20.1082 14.9354 20.22L14.2354 21.003C13.954 21.3174 13.6095 21.569 13.2243 21.7412C12.8391 21.9134 12.4219 22.0024 11.9999 22.0024C11.578 22.0024 11.1608 21.9134 10.7756 21.7412C10.3903 21.569 10.0458 21.3174 9.76441 21.003L9.06441 20.22C8.96438 20.1081 8.84043 20.0202 8.70177 19.9627C8.56311 19.9052 8.41328 19.8797 8.26341 19.888L7.21341 19.946C6.79236 19.9691 6.37117 19.9032 5.9773 19.7526C5.58344 19.602 5.22575 19.37 4.92758 19.0718C4.6294 18.7737 4.39744 18.416 4.24681 18.0221C4.09619 17.6283 4.03029 17.2071 4.05341 16.786L4.11141 15.736C4.11958 15.5863 4.09399 15.4367 4.03652 15.2982C3.97905 15.1597 3.89118 15.0359 3.77941 14.936L2.99741 14.236C2.68299 13.9546 2.43146 13.6101 2.25926 13.2249C2.08706 12.8397 1.99805 12.4225 1.99805 12.0005C1.99805 11.5786 2.08706 11.1614 2.25926 10.7762C2.43146 10.3909 2.68299 10.0464 2.99741 9.76501L3.77941 9.06501C3.89132 8.96498 3.97927 8.84103 4.03674 8.70237C4.09422 8.56371 4.11974 8.41388 4.11141 8.26401L4.05341 7.21401C4.03029 6.79296 4.09619 6.37177 4.24681 5.97791C4.39744 5.58404 4.6294 5.22635 4.92758 4.92818C5.22575 4.63 5.58344 4.39804 5.9773 4.24741C6.37117 4.09679 6.79236 4.03089 7.21341 4.05401L8.26341 4.11201C8.41312 4.12019 8.56274 4.09459 8.70122 4.03712C8.8397 3.97965 8.96348 3.89178 9.06341 3.78001L9.76441 2.99801ZM15.7064 8.29301C15.8939 8.48054 15.9992 8.73485 15.9992 9.00001C15.9992 9.26518 15.8939 9.51949 15.7064 9.70701L9.70641 15.707C9.51781 15.8892 9.26521 15.99 9.00301 15.9877C8.74081 15.9854 8.49 15.8802 8.30459 15.6948C8.11919 15.5094 8.01402 15.2586 8.01174 14.9964C8.00946 14.7342 8.11025 14.4816 8.29241 14.293L14.2924 8.29301C14.4799 8.10554 14.7342 8.00023 14.9994 8.00023C15.2646 8.00023 15.5189 8.10554 15.7064 8.29301ZM9.49941 8.00001C9.10159 8.00001 8.72006 8.15805 8.43875 8.43935C8.15745 8.72066 7.99941 9.10219 7.99941 9.50001V9.51001C7.99941 9.90784 8.15745 10.2894 8.43875 10.5707C8.72006 10.852 9.10159 11.01 9.49941 11.01H9.50941C9.90724 11.01 10.2888 10.852 10.5701 10.5707C10.8514 10.2894 11.0094 9.90784 11.0094 9.51001V9.50001C11.0094 9.10219 10.8514 8.72066 10.5701 8.43935C10.2888 8.15805 9.90724 8.00001 9.50941 8.00001H9.49941ZM14.4994 13C14.1016 13 13.7201 13.158 13.4388 13.4394C13.1574 13.7207 12.9994 14.1022 12.9994 14.5V14.51C12.9994 14.9078 13.1574 15.2894 13.4388 15.5707C13.7201 15.852 14.1016 16.01 14.4994 16.01H14.5094C14.9072 16.01 15.2888 15.852 15.5701 15.5707C15.8514 15.2894 16.0094 14.9078 16.0094 14.51V14.5C16.0094 14.1022 15.8514 13.7207 15.5701 13.4394C15.2888 13.158 14.9072 13 14.5094 13H14.4994Z"
                        fill="#FCFCFC"
                      />
                    </svg>{" "}
                    Coupons & offers alerts
                  </a>
                </div>

                <a className=" " href="">
                  <img
                    src={GooglePlay}
                    className="w-[100px] sm:w-[80px] md:w-[100px] xl:w-[120px] 2xl:w-[150px]"
                  />
                </a>
                <a className="mt-1" href="">
                  <img
                    src={PlayStore}
                    className="w-[100px] sm:w-[80px] md:w-[100px] xl:w-[120px] 2xl:w-[150px]"
                  />
                </a>
              </nav>
            </div>
          </div>

          <div className="flex flex-col sm:items-start md:items-center xl:items-end">
            <div>
              <p className="font-medium text-base  2xl:text-xl text-[#EEA500]">
                Connect with ValueBox
              </p>

              <div className="flex mt-1 md:mt-2 lg:mt-3 space-x-3 2xl:space-x-6 lg:text-base text-[#CCC] font-medium">
                <a
                  className="bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3] p-1 2xl:p-2 flex items-center justify-center w-[30px] 2xl:w-[40px] h-[30px] 2xl:h-[40px] rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg className="w-[18px] 2xl:w-[25px] h-[18px] 2xl:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 14 28"
                    fill="none"
                  >
                    <path
                      d="M9.33333 16H12.6667L14 10.6667H9.33333V7.99999C9.33333 6.62666 9.33333 5.33332 12 5.33332H14V0.853323C13.5653 0.79599 11.924 0.666656 10.1907 0.666656C6.57067 0.666656 4 2.87599 4 6.93332V10.6667H0V16H4V27.3333H9.33333V16Z"
                      fill="url(#paint0_linear_10928_15579)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10928_15579"
                        x1="0"
                        y1="14"
                        x2="14"
                        y2="14"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFC136" />
                        <stop offset="0.197568" stopColor="#FAC142" />
                        <stop offset="0.525" stopColor="#FFD168" />
                        <stop offset="0.771328" stopColor="#F5BC3A" />
                        <stop offset="1" stopColor="#E09B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  className="bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3] p-1 2xl:p-2 flex items-center justify-center w-[30px] 2xl:w-[40px] h-[30px] 2xl:h-[40px] rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg className="w-[18px] 2xl:w-[25px] h-[18px] 2xl:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 10.6667C0 5.63867 -1.58946e-07 3.124 1.56267 1.56267C3.124 -1.58946e-07 5.63867 0 10.6667 0H13.3333C18.3613 0 20.876 -1.58946e-07 22.4373 1.56267C24 3.124 24 5.63867 24 10.6667V13.3333C24 18.3613 24 20.876 22.4373 22.4373C20.876 24 18.3613 24 13.3333 24H10.6667C5.63867 24 3.124 24 1.56267 22.4373C-1.58946e-07 20.876 0 18.3613 0 13.3333V10.6667ZM20 6C20 6.53043 19.7893 7.03914 19.4142 7.41421C19.0391 7.78929 18.5304 8 18 8C17.4696 8 16.9609 7.78929 16.5858 7.41421C16.2107 7.03914 16 6.53043 16 6C16 5.46957 16.2107 4.96086 16.5858 4.58579C16.9609 4.21071 17.4696 4 18 4C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6ZM14.6667 13.3333C14.6667 14.0406 14.3857 14.7189 13.8856 15.219C13.3855 15.719 12.7072 16 12 16C11.2928 16 10.6145 15.719 10.1144 15.219C9.61429 14.7189 9.33333 14.0406 9.33333 13.3333C9.33333 12.6261 9.61429 11.9478 10.1144 11.4477C10.6145 10.9476 11.2928 10.6667 12 10.6667C12.7072 10.6667 13.3855 10.9476 13.8856 11.4477C14.3857 11.9478 14.6667 12.6261 14.6667 13.3333ZM17.3333 13.3333C17.3333 14.7478 16.7714 16.1044 15.7712 17.1046C14.771 18.1048 13.4145 18.6667 12 18.6667C10.5855 18.6667 9.22896 18.1048 8.22876 17.1046C7.22857 16.1044 6.66667 14.7478 6.66667 13.3333C6.66667 11.9188 7.22857 10.5623 8.22876 9.5621C9.22896 8.5619 10.5855 8 12 8C13.4145 8 14.771 8.5619 15.7712 9.5621C16.7714 10.5623 17.3333 11.9188 17.3333 13.3333Z"
                      fill="url(#paint0_linear_10928_15581)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10928_15581"
                        x1="0"
                        y1="12"
                        x2="24"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFC136" />
                        <stop offset="0.197568" stopColor="#FAC142" />
                        <stop offset="0.525" stopColor="#FFD168" />
                        <stop offset="0.771328" stopColor="#F5BC3A" />
                        <stop offset="1" stopColor="#E09B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  className="bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3] p-1 2xl:p-2 flex items-center justify-center w-[30px] 2xl:w-[40px] h-[30px] 2xl:h-[40px] rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg className="w-[18px] 2xl:w-[25px] h-[18px] 2xl:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 24"
                    fill="none"
                  >
                    <path
                      d="M17.1335 3.76C16.2221 2.7195 15.7198 1.38324 15.7202 0H11.6002V16.5333C11.5684 17.428 11.1907 18.2755 10.5466 18.8973C9.90242 19.519 9.04214 19.8665 8.14687 19.8667C6.25354 19.8667 4.68021 18.32 4.68021 16.4C4.68021 14.1067 6.89354 12.3867 9.17354 13.0933V8.88C4.57354 8.26667 0.546875 11.84 0.546875 16.4C0.546875 20.84 4.22688 24 8.13354 24C12.3202 24 15.7202 20.6 15.7202 16.4V8.01333C17.3909 9.21313 19.3967 9.85686 21.4535 9.85333V5.73333C21.4535 5.73333 18.9469 5.85333 17.1335 3.76Z"
                      fill="url(#paint0_linear_10928_15583)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10928_15583"
                        x1="0.546875"
                        y1="12"
                        x2="21.4535"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFC136" />
                        <stop offset="0.197568" stopColor="#FAC142" />
                        <stop offset="0.525" stopColor="#FFD168" />
                        <stop offset="0.771328" stopColor="#F5BC3A" />
                        <stop offset="1" stopColor="#E09B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  className="bg-gradient-to-r from-[#0032A3] via-[#3B66C8] to-[#0032A3] p-1 2xl:p-2 flex items-center justify-center w-[30px] 2xl:w-[40px] h-[30px] 2xl:h-[40px] rounded-full"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>
                  <svg className="w-[18px] 2xl:w-[25px] h-[18px] 2xl:h-[25px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9993 5.33334C17.1393 5.33334 18.3087 5.36268 19.442 5.41068L20.7807 5.47468L22.062 5.55068L23.262 5.63201L24.358 5.71734C25.5474 5.80838 26.6666 6.31594 27.5187 7.15073C28.3708 7.98552 28.9012 9.09406 29.0167 10.2813L29.07 10.848L29.17 12.0613C29.2633 13.3187 29.3327 14.6893 29.3327 16C29.3327 17.3107 29.2633 18.6813 29.17 19.9387L29.07 21.152C29.0527 21.3467 29.0353 21.5347 29.0167 21.7187C28.9012 22.9062 28.3706 24.0149 27.5182 24.8497C26.6658 25.6845 25.5463 26.1919 24.3567 26.2827L23.2633 26.3667L22.0633 26.4493L20.7807 26.5253L19.442 26.5893C18.2951 26.6392 17.1473 26.665 15.9993 26.6667C14.8514 26.665 13.7036 26.6392 12.5567 26.5893L11.218 26.5253L9.93668 26.4493L8.73668 26.3667L7.64068 26.2827C6.45128 26.1916 5.33208 25.6841 4.47998 24.8493C3.62787 24.0145 3.09745 22.906 2.98202 21.7187L2.92868 21.152L2.82868 19.9387C2.72673 18.6282 2.67247 17.3144 2.66602 16C2.66602 14.6893 2.73535 13.3187 2.82868 12.0613L2.92868 10.848C2.94602 10.6533 2.96335 10.4653 2.98202 10.2813C3.0974 9.09427 3.62764 7.9859 4.47947 7.15113C5.3313 6.31637 6.45019 5.80868 7.63935 5.71734L8.73402 5.63201L9.93402 5.55068L11.2167 5.47468L12.5553 5.41068C13.7027 5.36085 14.8509 5.33507 15.9993 5.33334ZM13.3327 12.7667V19.2333C13.3327 19.8493 13.9993 20.2333 14.5327 19.9267L20.1327 16.6933C20.2545 16.6232 20.3558 16.5222 20.4261 16.4005C20.4965 16.2787 20.5336 16.1406 20.5336 16C20.5336 15.8594 20.4965 15.7213 20.4261 15.5996C20.3558 15.4778 20.2545 15.3768 20.1327 15.3067L14.5327 12.0747C14.411 12.0044 14.273 11.9675 14.1326 11.9675C13.9921 11.9675 13.8541 12.0045 13.7325 12.0748C13.6108 12.1451 13.5098 12.2461 13.4397 12.3678C13.3695 12.4895 13.3326 12.6275 13.3327 12.768V12.7667Z"
                      fill="url(#paint0_linear_10928_15585)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_10928_15585"
                        x1="2.66602"
                        y1="16"
                        x2="29.3327"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFC136" />
                        <stop offset="0.197568" stopColor="#FAC142" />
                        <stop offset="0.525" stopColor="#FFD168" />
                        <stop offset="0.771328" stopColor="#F5BC3A" />
                        <stop offset="1" stopColor="#E09B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#CCC] lg:mt-10 mt-5 flex lg:flex-row flex-col gap-5 lg:gap-15 xl:gap-25">
          
          <div>
            <p className="font-medium text-base 2xl:text-xl flex justify-between items-baseline">
              We Accept
            </p>
            <div className="flex gap-2 2xl-gap-3 mt-2 flex-wrap lg:flex-nowrap">
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={visa} alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={mastercard}
                  alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={discover}
                  alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={americanexpress}
                  alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={jcb}
                  alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={applePay}
                  alt=""
                />
              </span>
              <span className="bg-white rounded-sm xl:px-4 px-2 py-1 2xl:py-2">
                <img
                  className="w-full min-w-[30px] h-6 sm:h-6 2xl:h-8 object-contain scale-[1.1]"
                  src={GooglePay}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <hr className="border-t border-[#CCC] 2xl:mt-10 mt-5 2xl:mb-10 mb-5" />
        <div className="flex flex-col md:flex-row lg:text-lg text-base gap-5 items-center justify-between">
          <img src={Logo} className="w-[90px] 2xl:w-[128px]" alt="" />
          <div className="text-[#CCC] text-sm 2xl:text-base flex 2xl:gap-10 xl:gap-8 lg:gap-6 gap-4">
            <a href="">English</a>
            <a href="">Privacy</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="text-[#CCC]">
            <p className="text-xs">
              © {new Date().getFullYear()} ValueBox. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
