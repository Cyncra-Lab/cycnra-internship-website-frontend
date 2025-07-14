import Image from 'next/image'
import frame1 from '../../../public/svg/workflow/Frame1.svg'
import frame2  from '../../../public/svg/workflow/Frame2.svg'
import frame3 from '../../../public/svg/workflow/Frame3.svg'
import caret from '../../../public/svg/workflow/CaretRight.svg'
import Design from './design'

const Workflow = () => {
  return (
            <>
            <section className='w-full flex justify-center items-center h-[1300px] bg-[#02353C]'>
                <div className='w-[95%] h-[1176px] flex flex-col gap-[75px] '>
                    <div className='flex justify-between items-center'>
                        <p className='text-[40px] leading-[120%] w-[512px] h-[96px] text-[#E6FAFC]'>
                            Seamless, Flexible and Efficient Workflow
                        </p>
                        <p className='w-[535px] h-[99px] text-[20px] leading-[120%] text-[#E6FAFC] tracking-[5%]'>
                            Our workflow is designed to be seamless, flexible and highly efficient. It adapts to your needs, ensuring smooth processes from start to finish. whether you’re handling simple tasks or managing complex projects.
                        </p>

                    </div>
                    <Design frame1={frame1} maintext="Design" subtext="Designing is a creative process that involves combining visual elements, user experience and functionality to create digital solutions that are both aesthetic and effective. our system optimizes every steps, saving time and boosting productivity. In context of a web agency, designing goes beyond just graphic elements, it includes layout design, user interaction (UX/UI)"/>
                   

                     <div className='flex justify-between items-center'>
                         <div className='h-[258px] w-[106px] text-[#02353C] text-[24px] bg-[#FFC857] py-[100px] px-[18px]  rounded-[50px] '>
                                View Details
                         </div>
                       
                        <div className='flex flex-col w-[631px] '>
                            <p className='text-[36px]  leading-[120%]  text-[#E6FAFC]'>
                                Research
                            </p>
                            <p className='h-[136px] text-[20px] leading-[120%] mt-[21px] text-[#E6FAFC] '>
                               At the core of every successful project lies through research. Ou web agency prioritizes understanding your audience, market trends and industry insights to craft digital solutions that resonant with your goals. our system optimizes every steps, saving time and boosting productivity. whether handling simple tasks or managing complex projects.
                            </p>
                           
                        </div>
                         <Image src={frame2} alt='image' className='w-[432px] h-[266px]'/>
                        

                    </div>

                    <Design frame1={frame3} maintext="Research" subtext="At the core of every successful project lies through research. Ou web agency prioritizes understanding your audience, market trends and industry insights to craft digital solutions that resonant with your goals. our system optimizes every steps, saving time and boosting productivity. whether handling simple tasks or managing complex projects."/>
                </div>

            </section>
            </>
  )
}

export default Workflow