'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
interface ProductGalleryProps {
  images: string[]
  title: string
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-[120px_1fr] grid-rows-[1fr_auto] lg:grid-rows-1 gap-4">
      {/* Main Image */}
      <div className="relative bg-base-200 rounded-lg overflow-hidden lg:col-start-2 lg:row-start-1">
        <Image
          src={images[selectedImage]}
          alt={`${title} - Image ${selectedImage + 1}`}
          width={600}
          height={600}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute left-2 sm:left-4 top-1/2 btn btn-primary btn-circle">
          <ChevronLeftIcon className="size-6" />
        </button>
        <button className="absolute right-2 sm:right-4 top-1/2 btn btn-primary btn-circle">
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
      
      {/* Thumbnail Images */}
      <div className="lg:col-start-1 lg:row-start-1 lg:h-full">
        <div className="flex lg:flex-col gap-2 h-full overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent hover:scrollbar-thumb-base-content/20">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 aspect-square bg-base-200 size-20 lg:size-24 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index 
                  ? 'border-primary' 
                  : 'border-transparent hover:border-base-300'
              }`}
            >
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 