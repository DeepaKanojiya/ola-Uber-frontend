



const RidePopUP = (props)=>{
  return (
    <div>
     <h5
        onClick={() => {
          props.setRidePopUpPanel(false)
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-3" >
        <div className="flex items-center gap-3 " >
          <img className="h-12 w-12 rounded-full object-cover" src="https://wallpapers.com/images/hd/beautiful-woman-with-random-people-in-background-roumbpovzh5jzxj5.jpg" alt="" />
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
     <div className="mt-5 w-full flex items-center justify-between">
        <button onClick={()=>{
           props.setRidePopUpPanel(false)
        }} className=" bg-gray-300 text-gray-700  font-semibold p-3 px-10  rounded-lg ">
          Ignore
        </button>
         <button onClick={()=>{
          props.setConfirmRidePopUpPanel(true);
           props.setRidePopUpPanel(false)
        }} className=" bg-green-600 text-white font-semibold p-3 px-10  rounded-lg ">
          Accept
        </button>
       
     </div>
      </div>
    </div>
  )
}

export default RidePopUP;