'use client'
import { Section } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Photo from '@/components/Photo';
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* <span className='text-xl'>Software developer</span> */}
            <h1 className='h1 mb-6'>Hello I,m <br /> <span className='text-accent'>Sundram</span></h1>
            <p className='max-w-[500px] mb-9 text-white'>I excel at crafting elegant digital experience and I am proficient in various programming language and technologies.</p>

            <a   href="/assets/SundramResume.pdf"
      download="SundramResume.pdf">
            <div className="flex flex-col xl:flex-row items-center gap-8">
         
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            
            </div>
            </a>
          </div>


          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats></Stats>
    </section>
  );
}
