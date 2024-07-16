import { Search } from "@/components/search";
import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="flex pt-5 w-full flex-col items-center">
      <Search />
      <div className="w-full max-w-4xl mt-5 space-y-4">
        {connectData.map((data) => (
          <div
            key={data.id}
            className="bg-white border rounded-lg py-4 px-6 flex items-center justify-between space-x-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={data.image}
                alt={data.name}
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center flex-1 justify-start space-x-2">
                  <h1 className="text-md font-semibold">{data.name}</h1>
                  {data.active && (
                    <div className="flex items-center  bg-[#EBF9F1] px-4 py-1 rounded-full justify-start space-x-2">
                      <span className="text-[#54B980]">Active</span>
                      <Image
                        src="/examples/true.png"
                        width={16}
                        height={16}
                        alt="true"
                        className="opacity-60"
                      />
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-500">{data.description}</p>
              </div>
            </div>
            <div>
              {/* connect button */}
              {!data.active && (
                <button className={`text-white bg-black px-4 py-2 rounded-lg`}>
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;

type connectDataType = {
  id: number;
  name: string;
  image: string;
  active: boolean;
  description: string;
};

const connectData: connectDataType[] = [
  {
    id: 1,
    name: "Email",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/13/55/letter-147563_640.png",
    active: true,
    description: "Receive an email every time a user submit their answer.",
  },
  {
    id: 2,
    name: "Google Sheets",
    image:
      "https://qualitytraining.be/content/uploads/2022/07/formation-google-sheet-belgique.png",
    active: false,
    description:
      "Send your data straight to Google Sheets. Automatically syncs as results come in.",
  },
  {
    id: 3,
    name: "Excel",
    image: "https://i.postimg.cc/BQt45VLN/image.png", // Assuming the uploaded image is for Excel
    active: false,
    description:
      "Send your type form responses to Excel Online. Turn feedback into graphs, support quires into workflows, and much more.",
  },
];
