'use client'
import Image from 'next/image'
import {useEffect,useState} from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const img_TO_SHOW = 12;
function WrappedGallery({galleryImg}:any) {
    console.log(galleryImg)
     const [img, setImage] = useState(() => galleryImg.slice(0, img_TO_SHOW));
    
        useEffect(()=>{
            const shuffled = [...galleryImg].sort(() => 0.5 - Math.random());
             setImage(shuffled.slice(0, img_TO_SHOW));
            //  return shuffled.slice(0, count);
        },[galleryImg])
  return (
    <section id="gallery" className="mx-auto max-w-7xl md:h-[85vh] px-4 py-16">
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl sm:text-4xl">Gallery</h2>
              <Link href={'https://www.instagram.com/italianpizzasyd?igsh=NmxsOGVmeWQ2dXVv'} className=" underline underline-offset-4 text-stone-200 text-md">See More On Instagram Page →</Link>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {
              img.map((src:any,id:number) => (
                <>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                <Image width={500} height={500} key={id} src={src.image} alt={src.alt} className="rounded-2xl border border-stone-200 object-cover w-full h-36 sm:h-48"/> 
                </motion.div>
                </>
              ))}
            </div>
          </section>
  )
}

export default WrappedGallery
