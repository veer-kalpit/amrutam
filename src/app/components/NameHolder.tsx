import Image from "next/image";
import Profile from "../assets/profilePic.png";
import NameCard from "../assets/namecard.png";

export default function DoctorProfile() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Profile Header Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto w-[90%] max-w-[1200px]">
        <div className="relative">
          <Image
            src={NameCard}
            alt="Background"
            layout="responsive"
            width={1200}
            height={300}
            className="object-cover"
          />
          <div className="absolute -bottom-16 left-8">
            <Image
              src={Profile}
              alt="Doctor Profile"
              width={128}
              height={128}
              className="rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="px-8 pt-16 pb-8 bg-[#FFF7E2]">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Dr. Bruce Willis</h2>
              <p className="text-gray-500">Gynecologist</p>
              <div className="flex items-center mt-2 text-yellow-500">
                <span className="material-icons">star</span>
                <span className="ml-1">4.2</span>
                <span className="ml-4 text-gray-700">850 Followers</span>
                <span className="ml-4 text-gray-700">18K Following</span>
                <span className="ml-4 text-gray-700">250 Posts</span>
              </div>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Me */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">A Little About Me</h3>
            <p className="text-gray-600">
              Hello! I am Dr. Bruce Willis, a Gynaecologist at Sanjivini
              Hospital, Surat. I love to work with all my hospital staff and
              senior doctors. Completed my graduation in Gynaecologist Medicine
              from...
              <button className="text-green-700 ml-2">Read More</button>
            </p>
            <div className="flex space-x-4 mt-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                English
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                Hindi
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                Telugu
              </span>
            </div>
            <div className="flex space-x-4 mt-6 text-gray-600">
              <a href="#" className="material-icons text-lg">
                facebook
              </a>
              <a href="#" className="material-icons text-lg">
                instagram
              </a>
              <a href="#" className="material-icons text-lg">
                youtube
              </a>
              <a href="#" className="material-icons text-lg">
                twitter
              </a>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">I Specialize In</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded">
                Women&#39;s Health
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded">
                Skin Care
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded">
                Immunity
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded">
                Hair Care
              </span>
            </div>
          </div>

          {/* Concerns */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">The Concerns I Treat</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Skin Treatment
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Pregnancy
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Period Doubts
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Endometriosis
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Pelvic Pain
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                Ovarian Cysts
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded">
                +5 More
              </span>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">My Work Experience</h3>
            <p>I have been in practice for 7+ years</p>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between text-gray-700">
                <span>Midtown Medical Clinic</span>
                <span>2016 - Present</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Midtown Medical Clinic</span>
                <span>2010 - 2015</span>
              </li>
            </ul>
          </div>

          {/* Featured Reviews */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Featured Reviews (102)</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <p className="font-medium">Alicent Hightower</p>
                <p className="text-sm text-gray-500">Consulted for Skin Care</p>
                <p className="mt-2 text-gray-700">
                  Might be a bit early to confirm, but yes, I can see a
                  noticeable difference in my hairfall. Will write again after
                  using it for longer periods.
                </p>
                <p className="text-sm text-gray-500 mt-2">20 January 2023</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="font-medium">Alicent Hightower</p>
                <p className="text-sm text-gray-500">Consulted for Pregnancy</p>
                <p className="mt-2 text-gray-700">
                  Might be a bit early to confirm, but yes, I can see a
                  noticeable difference. Will write again after using it for
                  longer periods.
                </p>
                <p className="text-sm text-gray-500 mt-2">20 January 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Appointment Fee</h3>
          <p className="text-2xl font-bold text-green-700">₹699.00</p>
          <h3 className="text-lg font-bold mt-6 mb-4">
            Select Your Mode of Session
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="border rounded-lg px-4 py-2 text-gray-700">
              In-Clinic
            </button>
            <button className="bg-green-700 text-white rounded-lg px-4 py-2">
              Video
            </button>
            <button className="border rounded-lg px-4 py-2 text-gray-700">
              Chat
            </button>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-4">Pick a Time Slot</h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-gray-100 px-4 py-2 rounded">09:00 AM</button>
            <button className="bg-gray-100 px-4 py-2 rounded">09:30 AM</button>
            <button className="bg-gray-100 px-4 py-2 rounded">10:00 AM</button>
            <button className="bg-gray-100 px-4 py-2 rounded">10:15 AM</button>
            <button className="bg-gray-100 px-4 py-2 rounded">10:45 AM</button>
            <button className="bg-gray-100 px-4 py-2 rounded">11:00 AM</button>
          </div>

          <button className="mt-8 bg-green-700 text-white rounded-lg px-6 py-3 w-full">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
