import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "./../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CaptainSignup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // Access the CaptainDataContext
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-7  h-screen flex flex-col  justify-between ">
      <div>
        <img
          className="w-18 mb-3"
          src="https://tse3.mm.bing.net/th/id/OIP.doQunjC7NmRaNPR1hBZruQHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg w-full font-medium mb-2">
            What's Our Captain's name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              className="bg-[#eee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's Our Captain's email
          </h3>
          <input
            className="bg-[#eee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
            />
            <input
              className="bg-[#eee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              min="1"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
            />
            <select
              className="bg-[#eee] w-1/2 rounded px-4 py-2 border text-lg"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <button className="bg-[#111] text-[#fff] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have Account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          this site is protected by reCAPTCHA and the{" "}
          <span className="underline ">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}
