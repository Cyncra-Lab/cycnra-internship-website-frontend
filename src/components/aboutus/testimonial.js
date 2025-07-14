'use client'
import Image from 'next/image'
import quote from '../../../public/svg/testimonial/quote.svg'
import thumbs from '../../../public/svg/testimonial/Group.svg'
import image from '../../../public/svg/testimonial/Image.svg'
import image1 from '../../../public/svg/testimonial/Image1.svg'
import {  ChevronLeft, ChevronRight,  } from 'lucide-react'
import Rating from './rating'
import { useRef } from 'react'

const Testimonial = () => {

    const testimonies =[{
        profileimage:image,
        username:"Collins Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
    {
        profileimage:image1,
        username:"Salako Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
     {
        profileimage:image1,
        username:"Salako Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
     {
        profileimage:image,
        username:"Salako Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
     {
        profileimage:image1,
        username:"Salako Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
     {
        profileimage:image1,
        username:"Salako Cyncra",
        testimony:"Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore illo accusantium est et voluptatem voluptas."
    },
    
]
    const carouselRef = useRef(null);


    const scroll = (direction) => {
    const container = carouselRef.current;
    const cardWidth = container.firstElementChild.offsetWidth + parseInt(getComputedStyle(container).gap) || 24;

    const scrollAmount = cardWidth * 1;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
        <>
        <section className='w-full flex justify-center items-center h-[720px]'>
            <div className='w-[95%] h-[600px]  flex gap-[116px]'>
                <div className='w-[239px]  h-[348px] '>
                    <div className='flex justify-center items-center bg-[#02353C] w-[239px] h-[185px] '>
                        <Image src={quote} alt='left quote icon'/>
                    </div>
                    <div className='w-[239px] h-[338px] flex flex-col gap-[5px] items-center  '>
                        <div className='flex gap-[15px] items-center '>
                            <Image src={thumbs} alt='thumbs up icon'/>
                                <p className='text-[36px] font-bold  leading-[167%] text-[#02353C]'>
                                    Testimonial
                                </p>

                        </div>
                       <Rating rating={5}/>
                       <div className='flex mt-[8px] items-center '>
                        <button onClick={ ()=>scroll("left")} aria-label="Scroll Left"><ChevronLeft size={20} color='black'/></button>    
                          <button onClick={()=> scroll("right") } aria-label="Scroll Right">    <ChevronRight size={20} color='black'/> </button>
                       </div>
                         
                       
                        

                    </div>
                </div>

                <div  ref={carouselRef} className='flex-1 bg-[#02353C] h-[600px] flex items-center justify-start gap-[24px] px-[40px] rounded-tl-[30px] rounded-bl-[30px] overflow-x-auto scroll-smooth  no-scrollbar transition-all duration-300'>
                  { testimonies.map((testimony,index) => (
                     <div key={index} className='min-w-[600px] h-[288px]  bg-white rounded-[10px] p-[40px] flex-shrink-0'>
                        <div className='grid w-full grid-cols-[50px_1fr] gap-[15px]'>
                            <Image src={testimony.profileimage}  alt='image' />
                            <div className=''>
                                <p className='text-[20px] font-bold text-[#02353C] '>
                                    {testimony.username}
                                </p>
                                <p className='text-[16px]  text-[#02353C]'>
                                    CEO
                                </p>
                            </div>
                            <p className='w-[520px] text-[16px] text-[#02353C] mt-[24px]'>
                               {testimony.testimony}
                            </p>
                        </div>

                    </div>
))}

                   

                </div>

            </div>

        </section>
        </>
   
  )
}

export default Testimonial