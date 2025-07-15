import Image from 'next/image'
import heroimage from '../../../public/svg/aboutushero/heroimg.svg'
import { ArrowRight } from 'lucide-react'
import Aboutushero2 from '../aboutus/aboutushero2'

const Aboutushero = () => {
  return (
            <>
            <section className='w-full flex flex-col justify-center items-center h-auto  mt-[150px] pb-[50px] '>
                <div className='w-[95%] h-[609px] '>
                    <div className='flex justify-between items-center '>
                        <div className='w-[760px] h-[408px]  '>
                            <h1 className='text-[60px] font-normal text-black '>
                                Our <span className='font-bold text-[#02353C] leading-[140%] '>Story</span> the Journey That’s Shaped <span className='font-bold leading-[140%]  text-[#FFC857]  '>Our Success</span>
                            </h1>
                            <p className='text-[20px] leading-[140%]  tracking-[5%] text-[#02353C] w-[711px] mt-[30px]'>
                                At Cyncra we’re more than just an internship program, We’re a launchpad for tomorrow’s top tech talents. Our mission is to empower ambitious learners to transform their skills, gain real world experience and break into world class teams.

                            </p>
                        <button className='w-[234px] mt-[20px] focus:outline-2 outline-[orange] h-[56px] bg-[#FFC857] transition duration-150 hover:text-[#FFC857] hover:bg-[#02353C] flex justify-between items-center px-[20px] rounded-[70px] border-0 text-[#02353C] font-bold text-[16px] leading-[140%] -tracking-[2%]'>
                            Apply Now <ArrowRight size={20} color="black"/>
                        </button>

                        </div>
                        <Image src={heroimage} alt='about us hero image' className='w-[540px]'/>

                    </div>

                </div>
                <Aboutushero2/>

            </section>
            </>
  )
}

export default Aboutushero 