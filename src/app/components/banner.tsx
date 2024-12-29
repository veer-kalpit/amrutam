import Image from "next/image";
import BannerImage from "../assets/banner.png";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[221px] mb-10 lg:mb-0">
      {/* Background Image */}
      <Image
        src={BannerImage}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay Search Section */}
      <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center px-4 w-full md:w-auto">
        {/* Title */}
        <h1 className="text-center text-[24px] md:text-[32px] leading-6 font-medium text-black mb-[37px] px-4 md:px-0">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 w-full">
          {/* Location Input */}
          <div className="flex items-center bg-white border border-[#D4D4D4] rounded-[8px] px-3 py-[15px] w-full max-w-[300px] md:w-[200px] h-[54px]">
            <FiMapPin className="text-green-700 text-[16px] mr-2" />
            <select
              className="flex-1 bg-transparent focus:outline-none text-gray-700"
              defaultValue=""
            >
              <option className="text-[16px] text-[#767676]" value="" disabled>
                Select Location
              </option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="flex justify-between items-center bg-white border border-gray-300 rounded-md px-4 py-3 h-[54px] w-full max-w-[400px] md:w-[400px]">
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="flex-1 bg-transparent focus:outline-none text-gray-700"
            />
            <FiArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
