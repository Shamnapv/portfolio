import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center py-16 px-4"
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        Get In Touch
      </h1>
      <p className="text-gray-700 mb-10 text-center max-w-2xl">
        Have a question, opportunity, or want to connect? Feel free to reach out any time.
      </p>

      <Card className="w-full max-w-lg flex flex-col items-center p-6 shadow-md">
        <CardContent className="flex flex-col space-y-6 w-full">
          {/* Email */}
          <div className="flex items-center">
            <Mail className=" mr-3" />
            <a
              href="mailto:shamnapv18@gmail.com"
              className=" font-medium hover:underline"
            >
              shamnapv18@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center">
            <Github className="text-gray-800 mr-3" />
            <Link
              href="https://github.com/Shamnapv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium hover:underline"
            >
              github.com/shamnapv
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center">
            <Linkedin className=" mr-3" />
            <Link
              href="https://www.linkedin.com/in/shamnapv/ "
              target="_blank"
              rel="noopener noreferrer"
              className=" font-medium hover:underline"
            >
              linkedin.com/in/shamnapv
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
