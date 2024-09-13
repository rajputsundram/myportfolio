'use client'
import { useState } from "react"
import{Button} from "@/components/ui/button"

import { Textarea } from "@/components/ui/textarea"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa"
import{motion} from "framer-motion";
import {Input} from "@/components/ui/input"
const info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+91) 8684961182'
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'rajputsundram87@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:'Panipat,haryana',
  },
]
const Contact = () => {


  const [selectedService, setSelectedService] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("service", selectedService);
    formData.append("access_key", "a546a481-e551-4b21-8993-eb7dd76797a5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
  return (
 
   <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},}} className="py-6">
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">

{/* form */}
<div className="xl:w-[54%] order-2 xl:order-none">
<form action="" onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
  <h3 className="text-4xl text-accent">Let's work together </h3>
  <p className="text-white/60">Collaborative freelancer, dedicated to delivering tailored web solutions through effective communication and teamwork</p>
  {/* input */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   <Input type="firstname" name="firstname" placeholder="Firstname"  required/> 
   <Input type="lastname" name="lastname" placeholder="Lastname" required/> 
   <Input type="email" name="email" placeholder="Email address" required/> 
   <Input type="phone"  name="phone" placeholder="Phone number" required/> 
  </div>

  {/* select */}
  <Select onValueChange={(value) => setSelectedService(value)}>
    <SelectTrigger className="w-full h-2">
      <SelectValue placeholder="Select a services"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Select a service</SelectLabel>
        <SelectItem value="web-development">Web Development</SelectItem>
        <SelectItem value="app-development">App Development</SelectItem>
        <SelectItem value="logo-design">Logo Design</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  {/* textare */}
  <Textarea className="h-[200px] "placeholder="Type your message here." />
  {/* btns */}
 <Button type="submit" size="md" className="max-w-40">Send message</Button>

</form>

</div>
 {/* info */}
 <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
  <ul className="flex flex-col gap-10">{
    info.map((item,index)=>{
      return(<li key={index} className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <div className="text-[28px]">
            {item.icon}
          </div>
          </div>
          <div className="flex-1">
            <p className="text-white/60 ">{item.title}</p>
            <h3 className="">{item.description}</h3>
       
        </div>
      </li>)
    })
}</ul>
 </div>
</div>
    </div>
   </motion.section>
  )
}

export default Contact
