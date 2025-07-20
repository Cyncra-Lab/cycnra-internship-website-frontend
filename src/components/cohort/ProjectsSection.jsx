const projects = [
  {
    title: "Project One",
    subTitle: "Task management web App",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "/project1.jpg"
  },
  {
    title: "Project Two",
    subTitle: "E-Commerce Platform",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "/project2.jpg"
  },
  {
    title: "Project Three",
    subTitle: "Shopping Website",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum is simply dummy text of the printing and typesetting",
    img: "/project3.jpg"
  }
];

const ProjectsSection = () => (
  <section className="bg-[#02353C] py-12 text-white px-6">
    <h3 className="text-2xl font-semibold mb-6">→ Projects Worked On:</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((proj, index) => (
        <div key={index} className="bg-[#02353C] text-white-100 rounded-2xl pb-8 border border-white/20">
          <img src={proj.img} alt={proj.title} className="rounded mb-4 w-full h-40 object-cover" />
          <div className="px-4">
            <h4 className="text-lg font-bold mb-2">{proj.title}</h4>
          <h5 className="text-sm mb-4">{proj.subTitle}</h5>
          <p className="text-sm mb-4">{proj.description}</p>
          <button className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
            View Project
          </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
