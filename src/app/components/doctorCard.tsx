"use client";

import Image from "next/image";
import Link from "next/link";

import ProfilePic from "../assets/profilePic.png";
import { LuPill, LuGraduationCap } from "react-icons/lu";
import { MdOutlineInsertComment } from "react-icons/md";

const DoctorCard = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      videoConsultation: "₹800",
      chatConsultation: "Free",
      rating: "4.5",
      profileImage: ProfilePic,
    },
    {
      id: 2,
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      videoConsultation: "₹800",
      chatConsultation: "Free",
      rating: "4.5",
      profileImage: ProfilePic,
    },
    {
      id: 3,
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      videoConsultation: "₹800",
      chatConsultation: "Free",
      rating: "4.5",
      profileImage: ProfilePic,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center flex-wrap gap-6 ">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="max-w-sm border border-gray-200 rounded-[30px] shadow-md p-9 bg-[#FFF7E2]"
        >
          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={doctor.profileImage}
                alt={doctor.name}
                fill
                className="rounded-full object-cover"
              />
              <div className="absolute -bottom-2 h-7 left-12 bg-[#0b0b0b] text-white text-sm font-semibold px-3 py-4 rounded-[17px] flex items-center gap-1">
                <span>{doctor.rating}</span>
                <span>⭐</span>
              </div>
            </div>
          </div>

          {/* Doctor Information */}
          <div className="text-center mt-[21px]">
            <h2 className="text-[32px] font-bold">{doctor.name}</h2>
            <div className="px-5">
              <div className="flex flex-row justify-start gap-[15px] self-center">
                <LuPill className="text-[#3A643B] text-2xl" />
                <p className="text-base text-[#656565] text-left">
                  {doctor.specialization}
                </p>
              </div>

              <div className="flex flex-row justify-start gap-[15px] self-center">
                <LuGraduationCap className="text-[#3A643B] text-2xl" />
                <p className="text-base text-[#656565] text-left">
                  {doctor.experience}
                </p>
              </div>

              <div className="flex flex-row justify-start gap-[15px] ">
                <MdOutlineInsertComment className="text-[#3A643B] text-2xl" />
                <p className="text-base text-[#656565] text-left">
                  {doctor.languages}
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Options */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="text-center border border-[#3A643B63] rounded-[10px] py-2">
              <p className="text-sm text-[#3C3C3C]">Video Consultation</p>
              <p className="font-bold text-[#3A643B]">
                {doctor.videoConsultation}
              </p>
            </div>
            <div className="text-center border border-[#3A643B63] rounded-[10px] py-2">
              <p className="text-sm text-[#3C3C3C]">Chat Consultation</p>
              <p className="font-bold text-[#3A643B]">
                {doctor.chatConsultation}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <Link href={`/DoctorCard/${doctor.id}`}>
              <button className="w-full bg-white border border-[#3A643B] text-[#3A643B] rounded-lg py-2 font-semibold">
                View Profile
              </button>
            </Link>
            <button className="w-full bg-[#3A643B] text-white rounded-lg py-2 font-semibold mt-2">
              Book a consultation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorCard;
