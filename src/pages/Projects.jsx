export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Portrait Generator",
      description: "Generate high-quality AI portraits with just one click.",
      image: "/image/project1.jpg",
    },
    {
      id: 2,
      title: "Style Transfer Tool",
      description: "Apply different artistic styles to your photos using AI.",
      image: "/image/project2.gif",
    },
    {
      id: 3,
      title: "Prompt to Art",
      description: "Turn your text prompts into stunning artworks instantly.",
      image: "/image/project3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111417] px-[24px] py-[48px] text-white">
      <h1 className="text-[32px] font-[600] text-center mb-[40px]">
        Featured Projects
      </h1>

      <div className="grid gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1A1E22] rounded-[8px] overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-[20px]">
              <h2 className="text-[20px] font-[600] mb-[10px] text-[#CEF5BD]">
                {project.title}
              </h2>
              <p className="text-[#B6B7B8] text-[14px]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};