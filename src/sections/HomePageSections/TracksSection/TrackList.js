'use client';

import { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import TrackCard from './TrackCard';
import courses from '@/data/courses';

export default function TrackList() {
  const [hoveredTrackId, setHoveredTrackId] = useState(null);

  return (
    <div onMouseLeave={() => setHoveredTrackId(null)}>
      <ul className="flex flex-col mt-8 text-[var(--text-dark-gray)]">
      {courses.map((course) => (
        <li
          key={course.id}
          className="relative lg:text-5xl border-b-2 pt-20 pb-8 flex justify-between items-center cursor-pointer hover:text-[var(--text-light-gray)] transition-all duration-300"
          onMouseEnter={() => setHoveredTrackId(course.id)}
        >
          <span className="font-bold">{course.title}</span>
          <BsArrowRightCircle className="w-[40px] h-[40px]" />

          {hoveredTrackId === course.id && (
            <div className="absolute top-8 max-w-[400px] max-h-[500px] right-0 mt-4 z-20">
              <TrackCard course={course} />
            </div>
          )}
        </li>
      ))}
    </ul>
    </div>  
  );
}
