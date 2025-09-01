import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {

    const handleSubmit = () => {

    }


    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to making new friends.
            </p>

            <div className="space-y-8">

                <div className="flex flex-col items-center space-y-6 mr-13">
                    <div className="flex items-start space-x-4 ml-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Email</h4>
                            <a
                                href="mailto:shivam0439@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                shivam0439@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div className="ml-3">
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Ottawa, ON, Canada
                            </a>
                        </div>
                    </div>

                </div>

                <div className="pt-8 ml-5">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/shivam-lantin/" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/shivam._.khanna/" target="_blank">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
}