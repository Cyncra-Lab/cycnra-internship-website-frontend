import { Star } from "lucide-react";

const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <>
      <div className="flex gap-1">
        {Array.from({ length: totalStars }, (_, i) => (
          <Star
            key={i}
            className="lg:w-[24px] sm:w-[16px] w-[12px]"
            fill={i < rating ? "gold" : "none"}
            stroke={i < rating ? "gold" : "gray"}
          />
        ))}
      </div>
    </>
  );
};

export default Rating;
