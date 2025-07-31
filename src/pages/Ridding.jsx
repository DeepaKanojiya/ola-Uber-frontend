import { Link, useNavigate } from "react-router-dom";

const Ridding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full ">
        <i className=" text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex item-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Deepak</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex justify-between flex-col items-center gap-2">
          <div className="w-full mt-5 ">
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
        </div>
        <button className="w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg ">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Ridding;
