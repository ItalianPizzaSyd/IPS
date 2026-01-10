import React from 'react'
import Image from 'next/image'
import WrappedGallery from '@/app/componenta/wrapped/WrappedGallery'

export const dynamic = 'force-dynamic'
import { SkillsResponse } from '../../types/dataTypes';


const getGallery = async (): Promise<SkillsResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
  const response = await fetch(apiUrl+"/api/gallery",{ next: { revalidate: 36 } });
  return await response.json();
};

async function Gallery() {
  const gallery_image = await getGallery()
  return (
     <>
        <WrappedGallery galleryImg={gallery_image} />
      </>
  )
}

export default Gallery
