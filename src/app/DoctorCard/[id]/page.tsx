"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/compat/router";
import Image from "next/image";
import { LuPill, LuGraduationCap } from "react-icons/lu";
import { MdOutlineInsertComment } from "react-icons/md";

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
    profileImage: "../../assets/profilePic.png",
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
    profileImage: "../../assets/profilePic.png",
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
    profileImage: "../../assets/profilePic.png",
  },
];

const DoctorDetail = () => {
  const router = useRouter();
  const [id, setId] = useState<number | null>(null);
  interface Doctor {
    id: number;
    name: string;
    specialization: string;
    experience: string;
    languages: string;
    videoConsultation: string;
    chatConsultation: string;
    rating: string;
    profileImage: string;
  }

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure that router.query is available on client-side after mount
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router?.query.id) {
      const doctorId = parseInt(router.query.id as string);
      setId(doctorId);
      const foundDoctor = doctors.find((doc) => doc.id === doctorId);
      setDoctor(foundDoctor || null);
    }
  }, [isMounted, router?.query.id]);

  if (!isMounted) return null; // Avoid rendering before mount
  if (!id || !doctor) {
    return <p className="text-center mt-10">Doctor not found</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFF7E2]">
      <div className="max-w-lg bg-white border border-gray-200 rounded-[30px] shadow-md p-9">
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
              <div>
                <LuPill className="text-[#3A643B] text-2xl" />
              </div>
              <div>
                <p className="text-base text-[#656565] text-left">
                  {doctor.specialization}
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start gap-[15px] self-center">
              <div>
                <LuGraduationCap className="text-[#3A643B] text-2xl" />
              </div>
              <div>
                <p className="text-base text-[#656565] text-left">
                  {doctor.experience}
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start gap-[15px]">
              <div>
                <MdOutlineInsertComment className="text-[#3A643B] text-2xl" />
              </div>
              <div>
                <p className="text-base text-[#656565] text-left">
                  {doctor.languages}
                </p>
              </div>
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
      </div>
    </div>
  );
};

export default DoctorDetail;
