// components/TrackCard.jsx
import { BsArrowRightCircle } from "react-icons/bs";

export default function TrackCard() {
  const tracks = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Product Management",
    "Digital Marketing",
  ];

  return (
    <ul className="flex flex-col mt-8 text-[var(--text-dark-gray)]">
      {tracks.map((track, index) => (
        <li
          key={index}
          className="lg:text-5xl border-b-2 pt-13 pb-5 flex justify-between items-center cursor-pointer hover:text-[var(--text-light-gray)] transition-text duration-300"
        >
          <span className="font-bold">{track}</span>
          <BsArrowRightCircle className="text-[var(--text-dark-gray)] w-[50px] h-[50px]  hover:text-[var(--text-light-gray)] transition-text duration-300" />
        </li>
      ))}
    </ul>
  );
}
