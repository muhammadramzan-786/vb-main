import React, { useState,useEffect  } from 'react'
import useFetchHomeProducts from '../../services/productsAPI';
import useFetchHomeCategories from '../../services/categoryAPI';


function ProductCard1() {
    const[currentIndex,setCurrentIndex]=useState(0)

    const { data:proData, loading:proLoading, error:proError } = useFetchHomeProducts();
    const [Products, setProducts] = useState([]); // ✅ Null ki jagah empty array use karein


    useEffect(() => {
      if (proData?.data) {
        console.log("Products:", proData.data);
        setProducts(proData.data);
      }
    }, [proData]);

//     const categoryFetch = useFetchHomeCategories();
// const categoryData = categoryFetch?.data;
// const catLoading = categoryFetch?.loading;
// const catError = categoryFetch?.error;

const { data: categoryData, loading: catLoading, error: catError } = useFetchHomeCategories();
    
    const [category,setCategory]=useState([])
    useEffect(() => {
      if ( categoryData?.data) {
        console.log("Setting Category Data:", categoryData.data);
        setCategory(categoryData.data);
        
      }
    }, [categoryData]); // ✅ `catLoading` ko bhi add kiya

    
  const visibleItems = 10; // Ek sath kitne dikhane hain (Customize kar sakte ho)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < category.length ? prevIndex + 1 : prevIndex
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  

  return (
    <>

<div className="bg-gradient-to-r from-[#FFC136] via-[#FFD168] to-[#E09B00] max-w-[1920px] relative w-full mx-auto overflow-hidden px-7 sm:px-[60px] py-1 sm:py-3"> 
  {/* ✅ Ye padding buttons ke liye extra space dega */}

  <div className="relative w-full overflow-hidden">
    <div
      className=" flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`, // ✅ Left & Right padding to prevent items from hitting edge
      }}
    >
      {category.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-auto h-max px-2 sm:px-5 py-1 sm:py-2 flex items-center justify-center bg-[#FCFCFC] border-[#999] border rounded-full mx-1 sm:mx-2"
          style={{ flex: `0 0 ${100 / visibleItems}%` }}
        >
          <span className="text-xs sm:text-sm lg:text-base w-max font-medium text-[#666]">{item.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* ✅ Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute left-1 sm:left-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-[#FCFCFC] border-[#999] border bg-opacity-50 text-white sm:p-2 rounded-full z-10"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.2894 18.2929C13.8989 18.6834 13.2657 18.6834 12.8752 18.2929L7.98782 13.4006C7.20742 12.6195 7.20772 11.3537 7.98842 10.5729L12.8788 5.68254C13.2693 5.29202 13.9025 5.29202 14.293 5.68254C14.6836 6.07307 14.6836 6.70623 14.293 7.09676L10.1074 11.2824C9.71682 11.6729 9.71682 12.3061 10.1074 12.6966L14.2894 16.8787C14.68 17.2692 14.68 17.9023 14.2894 18.2929Z" fill="#999999"/>
    </svg>
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-1 sm:right-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-[#FCFCFC] border-[#999] border bg-opacity-50 text-white sm:p-2 rounded-full z-10"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9.71057 18.2929C10.1011 18.6834 10.7343 18.6834 11.1248 18.2929L16.0122 13.4006C16.7926 12.6195 16.7923 11.3537 16.0116 10.5729L11.1212 5.68254C10.7307 5.29202 10.0975 5.29202 9.70696 5.68254C9.31643 6.07307 9.31643 6.70623 9.70696 7.09676L13.8926 11.2824C14.2832 11.6729 14.2832 12.3061 13.8926 12.6966L9.71057 16.8787C9.32004 17.2692 9.32004 17.9023 9.71057 18.2929Z" fill="#999999"/>
    </svg>
  </button>
</div>

    <div className="antialiased text-gray-900 max-w-[1920px] mx-auto ">
  <div className="bg-[#FCFCFC] p-3 sm:p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid xl:grid-cols-5 gap-5">
  
      
        {Products.map((items, index) => (
          
<div key={index} className="bg-white rounded-lg overflow-hidden duration-400 hover:shadow-lg  ">
      <img
        className="h-48 w-full object-cover object-end"
        src={`http://182.176.166.222:8081${items.imagePath}`}
        alt="Home in Countryside"
      />
      <div className="p-2">

        <div className='flex items-start justify-between '>
        <div className="mt-2 flex flex-col items-start gap-2">
        <span className='flex'>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11451_16133)">
    <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11451_16133">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11451_16133)">
    <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11451_16133">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11451_16133)">
    <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11451_16133">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11451_16133)">
    <path d="M6.82551 2.2925C6.89429 2.17447 6.99281 2.07655 7.11125 2.00848C7.22969 1.94042 7.36391 1.9046 7.50051 1.9046C7.63711 1.9046 7.77133 1.94042 7.88977 2.00848C8.00821 2.07655 8.10673 2.17447 8.17551 2.2925L9.92238 5.29125L13.3149 6.02625C13.4483 6.05525 13.5718 6.11872 13.6731 6.21033C13.7744 6.30195 13.8499 6.41851 13.892 6.54839C13.9342 6.67827 13.9416 6.81694 13.9135 6.95057C13.8854 7.08421 13.8227 7.20813 13.7318 7.31L11.4193 9.89812L11.7693 13.3512C11.7831 13.4872 11.761 13.6244 11.7052 13.7492C11.6493 13.874 11.5618 13.9819 11.4512 14.0622C11.3406 14.1426 11.2109 14.1925 11.075 14.207C10.9391 14.2215 10.8018 14.2001 10.6768 14.145L7.50051 12.745L4.32426 14.145C4.19921 14.2001 4.06188 14.2215 3.92598 14.207C3.79008 14.1925 3.66037 14.1426 3.5498 14.0622C3.43923 13.9819 3.35167 13.874 3.29587 13.7492C3.24006 13.6244 3.21795 13.4872 3.23176 13.3512L3.58176 9.89812L1.26926 7.31062C1.17815 7.20876 1.11536 7.08479 1.08714 6.95107C1.05893 6.81736 1.06628 6.67858 1.10847 6.5486C1.15066 6.41861 1.22621 6.30197 1.32758 6.21031C1.42894 6.11865 1.55257 6.05519 1.68613 6.02625L5.07863 5.29125L6.82551 2.2925Z" fill="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11451_16133">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
             </svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <g clipPath="url(#clip0_11451_16149)">
    <path d="M9.49035 5.54293L9.60122 5.73327L9.81651 5.77991L13.2087 6.51485C13.2568 6.52528 13.3012 6.54813 13.3377 6.58111L13.6731 6.21033L13.3377 6.58112C13.3741 6.6141 13.4013 6.65606 13.4165 6.70282C13.4317 6.74957 13.4343 6.7995 13.4242 6.8476C13.4141 6.89571 13.3915 6.94032 13.3588 6.977L11.0464 9.56498L10.8996 9.7293L10.9218 9.94854L11.2718 13.4017L11.2718 13.4018C11.2768 13.4507 11.2688 13.5001 11.2487 13.545C11.2286 13.5899 11.1971 13.6288 11.1573 13.6577C11.1175 13.6866 11.0708 13.7046 11.0219 13.7098C10.973 13.7151 10.9235 13.7074 10.8785 13.6875L10.8784 13.6875L7.70217 12.2875L7.50051 12.1986L7.29884 12.2875L4.12259 13.6875L4.1225 13.6875C4.07749 13.7074 4.02805 13.7151 3.97912 13.7098C3.9302 13.7046 3.8835 13.6866 3.8437 13.6577C3.80389 13.6288 3.77237 13.5899 3.75228 13.545C3.73219 13.5001 3.72423 13.4507 3.7292 13.4018L3.72921 13.4017L4.07921 9.94854L4.10144 9.72927L3.95457 9.56494L1.64207 6.97744L1.64193 6.97729C1.60914 6.94062 1.58653 6.89599 1.57637 6.84785C1.56621 6.79971 1.56886 6.74975 1.58405 6.70296C1.59924 6.65616 1.62644 6.61417 1.66293 6.58117C1.69942 6.54818 1.74393 6.52533 1.79201 6.51491L5.18451 5.77991L5.39979 5.73327L5.51067 5.54293L7.25751 2.54425C7.28227 2.50176 7.31774 2.4665 7.36038 2.442C7.40301 2.4175 7.45133 2.4046 7.50051 2.4046C7.54969 2.4046 7.598 2.4175 7.64064 2.442C7.68326 2.46649 7.71871 2.50172 7.74347 2.54418C7.74348 2.5442 7.7435 2.54422 7.74351 2.54425L9.49035 5.54293Z" stroke="#EEA500"/>
  </g>
  <defs>
    <clipPath id="clip0_11451_16149">
      <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
             </svg>

              <span className="ml-2 text-gray-600 text-sm">250+ Sold</span>              
            </span>
            <span className="bg-[#FFEAD5] text-[#FB6514] py-1 px-2 text-xs rounded-sm font-semibold tracking-wide">
          Top Selling
          </span>
          <p className="font-medium text-sm 2xl:text-base truncate max-w-[190px]">{items.productName}</p>
        </div>
        <span className='bg-[#FCFCFC] border border-[#CCD1D2] rounded-lg p-1 2xl:p-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M11.5996 8.99985H13.5996V5.99985H16.5996V3.99985H13.5996V0.999847H11.5996V3.99985H8.59961V5.99985H11.5996V8.99985ZM7.59961 17.9998C6.49961 17.9998 5.60961 18.8998 5.60961 19.9998C5.60961 21.0998 6.49961 21.9998 7.59961 21.9998C8.69961 21.9998 9.59961 21.0998 9.59961 19.9998C9.59961 18.8998 8.69961 17.9998 7.59961 17.9998ZM17.5996 17.9998C16.4996 17.9998 15.6096 18.8998 15.6096 19.9998C15.6096 21.0998 16.4996 21.9998 17.5996 21.9998C18.6996 21.9998 19.5996 21.0998 19.5996 19.9998C19.5996 18.8998 18.6996 17.9998 17.5996 17.9998ZM8.69961 12.9998H16.1496C16.8996 12.9998 17.5596 12.5898 17.8996 11.9698L21.7596 4.95985L20.0096 3.99985L16.1496 10.9998H9.12961L4.86961 1.99985H1.59961V3.99985H3.59961L7.19961 11.5898L5.84961 14.0298C5.11961 15.3698 6.07961 16.9998 7.59961 16.9998H19.5996V14.9998H7.59961L8.69961 12.9998Z" fill="#1A1A1A"/>
        </svg>
        </span>
        </div>
      
        <div className="mt-1">
        <span className="flex items-baseline font-semibold">
        <span className="text-xs">PKR</span>
        <span className="text-lg ml-[2px]">{items.price}</span>
      </span>
        </div>
        
      </div>
    </div>
        ))}
      
    
  </div>

</div>

    </>
  )
}

export default ProductCard1