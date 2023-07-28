'use client'

import { useState, useEffect } from "react";

const features = [
  {
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

  },
  {
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',

  },
]
export default function HomeContent() {

  ///// added contents
  const delay = 5000
  const images = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1682083353_Web_Home_Bannerfdsfds.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681816172_Web_Home_Bannersvdvds.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681816867_Web_Home_Bannersguguui.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1671640109_Web_Home_Kareena.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1681400129_Web_Home_Bannerggr.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex, delay]);


  ////////////
  return (

    <div className="overflow-hidden bg-white sm:py-32 leading-normal rounded-t">
      <div className="mx-auto max-w-7xl lg:px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-1/2">
            <div className="lg:max-w-lg h-full">
              <h2 className="text-base font-semibold leading-7 text-orange-500">Hot Deals</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hemp Oil</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div className="relative pl-9">
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/2565761/pexels-photo-2565761.jpeg"
              alt="Hemp Oil Placeholder Image"
              className="w-full h-3/4 max-h-screen object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
