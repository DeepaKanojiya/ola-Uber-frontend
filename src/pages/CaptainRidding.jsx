import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "./../components/FinishRide";
import { useRef, useState } from "react";


const CaptainRidding = ()=>{

   const [finishRidePanel,setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)


   useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
     <div className="h-screen relative">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full ">
        <img
          className="w-16"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <Link  
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative "
      
      onClick={()=>{
        setFinishRidePanel(true)
      }}
      >
      <h5
        onClick={() => {
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-700"></i>
      </h5>
         <h4 className="text-xl font-semibold" >4 km away</h4>
         <button className=" bg-green-600 text-white font-semibold p-3 px-10  rounded-lg" >Complete Ride</button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
        <FinishRide  setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  )
}

export default CaptainRidding