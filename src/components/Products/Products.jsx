import React from 'react'
import Img1 from "../../assets/products/vase.jpg"
import Img2 from "../../assets/products/tit_sculpture.jpg"
import Img3 from "../../assets/products/chand.jpg"
import Img4 from "../../assets/products/painting.jpg"
import Img5 from "../../assets/products/stone_carving.jpg"
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Ceramic decor",
    rating: 5.0,
    type: "Vase",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Metal decor",
    rating: 4.5,
    type: "titanium sculpture",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Lightings",
    rating: 4.7,
    type: "chandelier",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Painting decor",
    rating: 4.4,
    type: "Oil painting",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Stone carving Decor",
    rating: 4.5,
    type: "Angel",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary font-medium'>Top Selling Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold mt-2'>Featured Products</h1>
                <p data-aos='fade-up' className='text-gray-600 dark:text-gray-400 mt-2'>Elevate your space with timeless, handcrafted decor designed for elegance and charm.</p>
            </div>
            {/* Body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {/* card section */}
                    {
                        ProductsData.map((data) => (
                            <div 
                                data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='group card-hover'
                            >
                                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className='font-semibold text-lg text-gray-900 dark:text-white'>{data.title}</h3>
                                        <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>{data.type}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400'/>
                                            <span className="text-sm font-medium">{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* view all button */}
                <div className='flex justify-center mt-10'>
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-200">
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products;
