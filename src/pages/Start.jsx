import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 w-full flex justify-between  flex-col">
        <img
          className="w-16 ml-8"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-[30px] font-bold">Get Started Uber</h2>
          <Link
            to="/login"
            className="flex item-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
