import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

export default function TrackCard({ course }) {
  if (!course) return null;

  return (
    <div className="bg-[var(--text-white)] text-black p-[40px] rounded-[20px] shadow-md mt-4">
      <Image
        src={course.image.src}
        width={300}
        height={300}
        alt={course.image.alt}
        className="mb-5"
      />
      <h2 className="uppercase text-xl text-[var(--header-background)] font-bold mb-2">{course.title}</h2>
      <p className="text-sm text-[var(--header-background)] mb-1">Duration: {course.duration}</p>
      <p className="text-sm text-[var(--header-background)] mb-3">{course.description}</p>
      <button className="bg-[var(--yellow-btn)] text-[var(--header-background)] font-bold text-sm rounded-full py-[10px] px-[20px] cursor-pointer flex gap-5 items-center" >
        Learn More
        <FaArrowRight />
      </button>
    </div>
  );
}
