import caret from '../../../public/assets/aboutus/svg/workflow/CaretRight.svg'
import Image from 'next/image'
const Design = ({frame1,maintext,subtext}) => {
  return (
            <>
             <div className='flex justify-between items-center'>
                        <Image src={frame1} alt='image' className='w-[432px] h-[266px]'/>
                        <div className='flex flex-col w-[631px] '>
                            <p className='text-[36px]  leading-[120%]  text-[#E6FAFC]'>
                                Designing
                            </p>
                            <p className='h-[136px] text-[20px] leading-[120%] mt-[21px] text-[#E6FAFC] '>
                                Designing is a creative process that involves combining visual elements, user experience and functionality to create digital solutions that are both aesthetic and effective. our system optimizes every steps, saving time and boosting productivity. In context of a web agency, designing goes beyond just graphic elements, it includes layout design, user interaction (UX/UI)
                            </p>
                           
                        </div>
                         <button className='h-[232px] focus:outline-2 outline-white  hover:bg-opacity-65 hover:text-[#FFC857] w-[78px] flex items-center justify-center border-[2px] rounded-[50px] '>
                                <Image src={caret} alt='caret right icon' />
                         </button>

                </div>
            </>
  )
}

export default Design