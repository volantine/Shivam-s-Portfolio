import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Software Engineering Student & Developer
                    </h3>

                    <p className="text-muted-foreground">
                        I am a 4th-year Computer Science student at Carleton University,
                        specializing in Software Engineering. My academic and project
                        experience spans C/C++, Java, Python, and JavaScript, with a
                        strong interest in backend systems, automation, and cross-platform
                        applications.
                    </p>

                    <p className="text-muted-foreground">
                        I’m passionate about problem-solving, continuous learning, and applying my knowledge
                        to real-world challenges. Beyond academics, I’m interested in software development roles
                        that allow me to grow my skills in backend systems, automation, and cross-platform applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="public\Shivam's Resume.pdf"
                            download="Shivam_Khanna_Resume.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-5 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Development</h4>
                                <p className="text-muted-foreground">
                                    Experience in C/C++, Java, Python, and JavaScript for
                                    simulations, backend systems, and full-stack projects.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-5 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX & Visualization</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive UIs and visualization tools using Qt,
                                    Tkinter, React, and modern frameworks
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="gradient-border p-5 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Experience</h4>
                                <p className="text-muted-foreground">
                                    Hands-on work in simulations, security tools, and
                                    networking applications, applying agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}