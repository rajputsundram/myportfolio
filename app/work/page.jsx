'use client';

import{motion} from 'framer-motion'

import React,{useState} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight,BsGithub} from "react-icons/bs"

import { Tooltip,TooltipContent,TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects=[
  {
    num:'01',
    category:'Full-Stack',
    title:'Yummy-Pizza',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
    stack:[
  {name:'NextJs'},{name:'TailwindCSS'}, {name:'NodeJs/Express'},{name:'MongoDB/mongoose'},],
  image:'/assets/YummyPizza.png',
  live:"https://surat-crystals.vercel.app/",
  github:"https://github.com/rajputsundram/YummyPizza",
  },
  {
    num:'02',
    category:'frontend',
    title:'Surat Crystals',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
    stack:[
  {name:'NextJs'},{name:'Tailwind'},],
  image:'/assets/SuratCrystals.png',
  live:"https://surat-crystals.vercel.app/ ",
  github:"https://github.com/rajputsundram/SuratCrystals",
  },

  {
    num:'03',
    category:'frontend',
    title:'soloup',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
    stack:[
  {name:'NextJs'},{name:'Tailwind'},],
  image:'/assets/soloup.png',
  live:"https://soloup-n-js.vercel.app/ ",
  github:"https://github.com/rajputsundram/NextJsSoloup",
  },

{
  num:'04',
  category:'frontend',
  title:'MediClinic',
  description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
  stack:[
{name:'Html 5'},{name:'Css 3'},{name:'JavaScript'}],
image:'/assets/firstProj.jpg',
live:" https://rajputsundram.github.io/mediclinic/",
github:"https://github.com/rajputsundram/mediclinic",
},
{
  num:'05',
  category:'Frontend',
  title:'Glamify',
  description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
  stack:[
{name:'Html 5'},{name:'Css'}],
image:'/assets/glamify.png',
live:"https://rajputsundram.github.io/Glamify/ ",
github:"https://github.com/rajputsundram/Glamify",
},

{
  num:'06',
  category:'frontend',
  title:'FoodStore',
  description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est debitis distinctio beatae!',
  stack:[
{name:'Html 5'},{name:'Css'},],
image:'/assets/FoodStore.png',
live:"https://rajputsundram.github.io/FoodStoreUi/ ",
github:"https://github.com/rajputsundram/FoodStoreUi",
},
]

const Work = () => {


  const [project,setProject]=useState(projects[0]);
  const handleSlideChange=(swiper)=>{
    // get current slide index
  const currentIndex=swiper.activeIndex;
  // update project slid based on current slide
  setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},}} className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
      <div className="container-mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%]  xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              {/* outline num */}
              <div className="text-8xl leading-node font-extrabold text-transparent text-outline">{project.num}</div>

              {/* project categories */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
{/* project title */}
<h3 className='text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize'><span>Title:-</span>{project.title}</h3>

              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
             {/* stack */}
             <ul className='flex flex-wrap gap-4'>{
              project.stack.map((item,index)=>{

                return<li key={index} className='text-xl text-accent'> {item.name}

                {/* remove the last comma */}
                {index!==project.stack.length-1&& ","}
                </li>
              })}
                        </ul>

                        {/* border */}
                        <div className="border border-white/20"></div>
                     {/* buttons */}
                     <div className='flex item-center gap-4'>

                        {/* Live project buttons */}
                      <Link href={project.live} ><TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                      
                        <TooltipContent> <p>Live Project</p>
                       
                         </TooltipContent>
                         </TooltipTrigger>
                         </Tooltip>
                         </TooltipProvider>
                         
                        </Link>

                          {/* github project buttons */}
                        <Link href={project.github} ><TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                      
                        <TooltipContent> <p>Git Hub project repository</p>
                       
                         </TooltipContent>
                         </TooltipTrigger>
                         </Tooltip>
                         </TooltipProvider>
                         
                        </Link>
                        </div>


            </div>
          </div>
          <div className='w-full xl:w-[50%] '>

            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {
              projects.map((project,index)=>{

            
                return (<SwiperSlide  key={index} className='w-full '>

                  <div className="h-[440px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                  </div>
                  {/* image */}
                  <div className='relatiove w-1/3 h-full bg-black '>
                    <Image className=" object-cover w-full h-full" src={project.image} fill alt=''>
                      </Image></div>
                  </div>
                </SwiperSlide>
                )
              })}
              
   {/* slider buttons */}
              
   <WorkSliderBtns containerStyles="  flex gap-2 absolute right-0 md:right-[50%] lg:right-[50%] bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>

               
</Swiper>


          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
