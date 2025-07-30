export const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">choose a vehicle</h3>

      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex w-full items-center mb-2 justify-between p-3 border-2 border-gray-100  active:border-black  rounded-xl"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className=" -ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Compact price
          </p>
        </div>
        <h2 className="text-lg font-semibold">$8.20</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmedRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex w-full items-center mb-2 justify-between p-3  border-2 border-gray-100  active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt=""
        />
        <div className=" -ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$2.80</h2>
      </div>

      <div
        onClick={() => {
         props. setConfirmedRidePanel(true);
         props.setVehiclePanelOpen(false);
        }}
        className="flex w-full items-center mb-2 justify-between p-3  border-2 border-gray-100  active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Uber
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$6.66</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
