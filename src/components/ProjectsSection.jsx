import { ArrowRight, ExternalLink, Github, Youtube } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Gym Management App",
        description: "A fitness management platform serving 3 distinct user roles (members, trainers, admins) with 10+ core features (class booking, progress tracking, billing.",
        image: "/projects/FitnessGym.png",
        tags: ["ReactJS", "JavaScript", "PostgreSQL", "HTML/CSS"],
        demoUrl: "https://www.youtube.com/watch?v=9kAmGVWbN0g&t=5s",
        githubUrl: "https://github.com/volantine/Gym-Management-App",
    },
    {
        id: 2,
        title: "Art Gallery Website",
        description: "Developed a full-stack web application for managing artists, artworks, and workshops, enabling artists to showcase their creations and patrons to follow and receive updates.",
        image: "/projects/ArtGallery.png",
        tags: ["Node.js", "Express.js", "MongoDB", "Pug", "JavaScript"],
        demoUrl: "https://www.youtube.com/watch?v=Evli_IdRG6c",
        githubUrl: "https://github.com/volantine/Art-Gallery",
    },
    {
        id: 3,
        title: "Elevator System Simulator",
        description: "Developed a real-time elevator system simulator supporting the SCAN elevator algorithm, improving operational efficiency by up to 30% in high-traffic scenarios.",
        image: "/projects/ElevatorCQT.png",
        tags: ["C++", "Qt"],
        demoUrl: "https://www.youtube.com/watch?v=8NHq3gOxZbE",
        githubUrl: "https://github.com/volantine/Elevator-Simulation",
    },
    {
        id: 4,
        title: "t:slim X2 Insulin Pump Simulator",
        description: "Developed a Qt/C++ based simulation of the t:slim X2 insulin pump with Control-IQ technology, replicating core pump functions and safety mechanisms.",
        image: "/projects/Insulin.png",
        tags: ["C++", "Qt"],
        demoUrl: "https://www.youtube.com/watch?v=NRCWGWKIg7Q",
        githubUrl: "https://github.com/volantine/Insulin-Pump-Simulator/tree/main",
    },
    {
        id: 5,
        title: "Curse Slayer-Pixel Art Game",
        description: "Designed and developed a 2D medieval-themed pixel art game featuring combat, exploration, and handcrafted environments.",
        image: "/projects/CurseSlayer.png",
        tags: ["GDScript", "Godot Engine"],
        demoUrl: "#",
        githubUrl: "https://github.com/volantine/Curse-Slayer-Pixel-Art-game-",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects, ranging from academic coursework to some personal passion projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex space-x-3">
                                {project.id !== 5 && project.demoUrl && project.demoUrl !== "#" && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Youtube size={20} />
                                    </a>
                                )}

                                {project.githubUrl && project.githubUrl !== "#" && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/volantine"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>
}