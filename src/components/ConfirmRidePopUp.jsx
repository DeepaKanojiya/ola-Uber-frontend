import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUP = (props) => {
 const [otp , setOtp] = useState("")
  const submitHandler = (e)=>{
  e.preventDefault();
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-3">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://wallpapers.com/images/hd/beautiful-woman-with-random-people-in-background-roumbpovzh5jzxj5.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Deepak kanojiya</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className="flex justify-between flex-col items-center gap-2">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-100">
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 text">
                kankariya talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-100">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 text">
                kankariya talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377; 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600 text">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full ">
          <form onSubmit={(e)=>{
               submitHandler(e);
          }}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="number" placeholder="Enter OTP"  className="bg-[#eee] px-6 py-4 font-mono  text-lg  rounded-lg w-full mt-5 "/>
            <Link
              to="/captain-ridding"
              className=" flex justify-center text-lg  w-full mt-3 bg-green-600 text-white font-semibold p-3 rounded-lg "
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full mt-1 text-lg bg-red-500 text-white  font-semibold p-3 rounded-lg "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUP;
