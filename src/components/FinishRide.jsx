import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
       Finish this Ride
      </h3>
      <div className="flex items-center justify-between p-4 border-2  bg-yellow-400 rounded-lg mt-3">
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
          <Link
            to="/captain-home"
            className=" flex justify-center  w-full mt-3 text-lg  bg-green-600 text-white font-semibold p-3 rounded-lg "
          >
            Finish Ride
          </Link>
          <p className="text-red-500 text-xs mt-2 text-center" >click on finish ride button if you have completed the payment</p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
