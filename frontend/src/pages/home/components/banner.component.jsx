
import banner4 from "../../../assets/images/banner/banner4.gif"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import banner from "../../admin/banner";
import { Container } from "react-bootstrap";
import rentnow from "../../../assets/images/banner/rentnow.gif"

const Banner = ()=>{

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 2000,
      };
  
      const [bannerlist, setBannerList ] = useState()
  
      const loadBanners = useCallback(async() => {
        try {
          let response = await banner.bannerSvc.listHomePageBannerData();
          if(response.result) {
            setBannerList(response.result)
          }
        } catch(exception) {
          toast.warn("Error fetching the banner...")
        }
      }, [])
  
      useEffect(() => {
        loadBanners()
      }, [])

  
    return(<>
  
  <div className="">
        <img className="bannerimage" src={banner4} alt="" />
    </div>
     
    
         <div>
            <Slider {...settings}>
              {
                bannerlist && bannerlist.map((banner, index) => (
                  <div key={index}>
                    <a href={banner.link} target="_blank">
                    <h1 className="bannertext">Find Your Dream Space</h1>
                  <img className="bannerimage2" src={import.meta.env.VITE_IMAGE_URL+"/banners/"+banner.image} />
                    </a>
                   
                  </div>
                    
                ))
              }
            </Slider>
            </div>
            

                  
            


    </>)
}

export default Banner


