"use client"
import Image from 'next/image'
import footerimg from '../../../public/svg/footer/Image.svg'
import logo from '../../../public/svg/footer/logo.svg'
import facebookicon from '../../../public/svg/footer/Facebook.svg'
import twittericon from '../../../public/svg/footer/Twitter.svg'
import linkedinicon from '../../../public/svg/footer/Linkedin.svg'
import dayjs from "dayjs";


const Footer = () => {
  const currentYear = dayjs().year();
  const footerdisplay = [
    {
      headline:"Navigation",
      subtext:["Home","About Us","What We Do"]
    },
   {
    headline:"What We Do",
      subtext:["Encouraging Testing","Shape future intern","Sharing Information", "Building Leadership", "Shining a Light"]
    },
    {
    headline:"LEGAL",
      subtext:["General Info", "Privacy Policy", "Terms of Service"]
    },
     {
    headline:"TALK TO US",
      subtext:["support@ercom.com","+66 2399 1145","Contact Us","Facebook", "Linkedin", "Twitter"]
    }
]
  return (
        <>
        <section className=" w-full h-[980px]   flex font-jakarta flex-col   justify-end mt-[50px]  ">
          <div className='w-full h-[240px] bg-[#02353C]   clip-top-curve   '>

          </div>


          <div className='h-[769px]  bg-[#02353C]  relative  flex justify-center items-center  w-full '>
             <Image src={footerimg} alt='a footer image' className='absolute right-[20px] -top-[300px] w-[592px] h-[577px]'/>
              <div className='w-[90%] h-[620px] flex flex-col '>
                <div className='w-[489px] h-[153px] '>
                  <h1 className=' text-[40px] h-[80px]'>Ready to get started?</h1>
                  <button className='w-[489px] h-[60px] text-[14px] font-medium focus:outline-2 outline-white rounded-[27px] text-[#0A142F] hover:bg-[#0A142F] hover:text-white leading-[24px] tracking-[1px] bg-white mt-[12px]'>
                    KICKSTART YOUR FUTURE

                  </button>

                </div>
                <div className='h-[339px] mt-[80px] border-b border-[#FFFFFF20]  pb-[40px] '>
                  <div className='flex justify-between'>
                  {footerdisplay.map((items,index)=>(  
                    <div key={index} className='flex flex-col gap-[20px]'>
                      <h1 className='text-[15px] font-bold leading-[100%] text-[#E6FAFC]  '>
                        {items.headline.toUpperCase()}
                      </h1>
                      <div className='h-auto flex flex-col gap-[10px]'>
                       {items.subtext.map((text,index) => (
                       <p key={index} className={`font-normal text-[15px] ${items.headline !=="What We Do" ? "cursor-pointer  hover:opacity-50  hover:underline": ""}  leading-[30px] text-[#FFFFFF] opacity-80  `}>
                          {text}
                        </p>
                      ))}

                      </div>
                    </div>
                  ))}

                  </div>

                </div>

                <div className='mt-[40px]   flex justify-between items-center h-[40px]'>
                  <Image src={logo} alt='logo icon'/>
                  <p className='text-[14px] leading-[14px] w-[342px] text-white '>
                     &copy;{currentYear} Lift Media. All Rights Reserved. 
                  </p>
                  <div className='flex gap-[19px]'>
                    <Image src={facebookicon} alt='facebook icon'/>
                     <Image src={linkedinicon} alt='linkedin icon'/>
                      <Image src={twittericon} alt='twitter icon'/>

                  </div>

                </div>

              </div>


          </div>
       
        </section>

        </>
  )
}

export default Footer


