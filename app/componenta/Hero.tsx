import Image from 'next/image'
import React from 'react'
import WrappedHero from './wrapped/WrappedHero'
export const dynamic = 'force-dynamic'
import { SkillsResponse } from '../types/dataTypes';


const getHero = async (): Promise<SkillsResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL 
  const response = await fetch(apiUrl+"/api/hero",{ next: { revalidate: 36 } });
  return await response.json();
};


async function  Hero() {
  const hero = await getHero()
  return (
    <>
    <WrappedHero heroProp={hero}/>
    </>
  )
}

export default Hero
