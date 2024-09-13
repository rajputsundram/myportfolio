'use client'
import { FaHtml5, FaCss3, FaJs, FaReact,  FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { Item } from '@radix-ui/react-select';

// about data
const about={
  title:"About me",
  description:'Freelancer web developer specializing in creating responsive websites and delivering customized digital solutions.',
  info:[
    {
      fieldName:"Name",
      fieldValue:"Sundram"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91)-8684961182"
    },
    {
      fieldName:"Experience",
      fieldValue:"Fresher"
    },
    {
      fieldName:"Linkdin",
      fieldValue:"Sundram rajput"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"rajputsundram87@Gmail.com"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi"
    },
  
  

  ]
}


// Experience Data
const experience={
icon:'',
title:"My experience",
description:'Fresher web developer with zero experience, but completed numerous small projects independently',
items:[
//   {
//     company:"Tech Solution Inc.",
//     position:"Full Stack Developer",
//     duration:"2022-present"
//   },
//   {
//     company:"Web Design Studio.",
//     position:"Front-End Developer Intern",
//     duration:"Summer 2021",
//   },
//   {
//     company:"E-commerce Startup",
//     position:"Freelance Web Developer",
//     duration:"2020-2021",
//   },
//   {
//     company:"Tech Academy",
//     position:"Teaching Assistant",
//     duration:"2019-2020",
//   }
// ,
// {
//   company:"Digital Agency",
//   position:"UI/UX Designer",
//   duration:"2018-2019",
// },
// {
//   company:"Software Development Firm.",
//   position:"Junior Developer",
//   duration:"2017-2018",
// }
]
}
// Education Data
const education={
  icon:"",
  title:"My education",
  description:"Pursuing a Bachelor of Computer Applications (BCA), specializing in programming, software development, and web design.",
  items:[
    {
      institution:"Online Course Platform",
      degree:"Full Stack Web Development " ,
      duration:"2023",

    },
    {
      institution:"Online Course Platform",
      degree:"Front-end Track " ,
      duration:"2023",

    },
    {
      institution:"Online Course Platform",
      degree:"Programming Course" ,
      duration:"2022-2023",

    },
    {
      institution:"KG codeing",
      degree:"Certified In React.js" ,
      duration:"2024",

    },
    // {
    //   institution:"Design School",
    //   degree:"Diploma in Graphic design" ,
    //   duration:"2016-2018",

    // },
    {
      institution:"PIET College",
      degree:"Associates degree in BCA-CTIS" ,
      duration:"2022-2025",

    }
  ]
}

// Skills Data

const skills={
  title:"My skills ",
  description:"Freelancer web developer skilled in HTML, CSS, JavaScript, React ,and responsive design",
  skillsList:[
    {
      icon:<FaHtml5/>,
      name:"html 5",
    },
    {
      icon:<FaCss3/>,
      name:"css 3",
    },
    {
      icon:<FaJs/>,
      name:"js",
    },
    {
      icon:<FaReact/>,
      name:"react.js",
    },
    {
      icon:<SiNextdotjs/>,
      name:"next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js",
    },
    {
      icon:<DiMongodb />,
      name:"MongoDB",
    },
  ]

};

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:"easeIn"},}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto ">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row  gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text:left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/26 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>

                  <ul  className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((items,index)=>{

                    return  ( 
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  lg:items-start gap-1'>

                      <span className='text-accent '>{items.duration}</span>
                     <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.position}</h3>
                    <div className='flex items-center gap-3'> 
                      {/* { dot } */}
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{items.company}</p>
                    </div>
                    </li>
                    );
                   
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text:left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/26 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>

                  <ul  className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((items,index)=>{

                    return  ( 
                    <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  lg:items-start gap-1'>

                      <span className='text-accent '>{items.duration}</span>
                     <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.degree}</h3>
                    <div className='flex items-center gap-3'> 
                      {/* { dot } */}
                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                      <p className='text-white/60'>{items.institution}</p>
                    </div>
                    </li>
                    );
                   
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
              {/* skill */}
              <TabsContent value="skills" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text:left'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/68 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
               <ul className='grid grid-col-2 sm:grid-col-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillsList.map((skill,index)=>{
                  return(

                    <li key={index}>
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>

                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className='capitalize'>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                   </TooltipProvider>

                    </li>
                  )
                })

                }
               </ul>
              </div>
            </TabsContent>
              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                 
<div className=" flex flex-col gap-[30px]">
  <h3 className='text-4xl font-bold'>{about.title}</h3>
  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{about.description}</p>

  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>{about.info.map((item,index)=>{
    return(
      <li key={index} className=' flex items-center justify-center xl:justify-start gap-4'>
        <span className='text-white/60'>{item.fieldName}</span>

        <span  className='text-xl'>{item.fieldValue}</span>
      </li>
    )
  })}</ul>
</div>
            </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
