import TrackList from "./TrackList";

export default function TracksSection(){
    return(
        <>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
            <h3 className="text-[var(--text-white)] text-6xl font-bold">
            Available <span className="text-[var(--yellow-btn)] font-bold">Tracks</span><br/> For Our Interns
            </h3>
            <p className="text-[var(--text-light-gray)] max-w-xl">
            We offer internship tracks that empower you to grow your skills, boost your visibility
            as an emerging professional, and make a measurable impact. Gain experience, expand
            your network, and accelerate your career with real projects and mentorship.
            </p>
        </div>
        <TrackList />
        </>
    )
}