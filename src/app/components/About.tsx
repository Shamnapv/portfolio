import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card";

function About() {
  const skills = [
    { name: "Python", icon: "/skills/python.jpg" },
    { name: "Java", icon: "/skills/java.jpg" },
    { name: "HTML", icon: "/skills/html.jpg" },
    { name: "CSS", icon: "/skills/css.jpg" },
    { name: "JavaScript", icon: "/skills/js.jpg" },
    { name: "MySQL", icon: "/skills/mysql.jpg" },
    { name: "Next.js", icon: "/skills/next.jpg" },
  ]
 return (
    <section id="about" className="w-full flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      <Card className="w-full max-w-3xl shadow-lg">
        <CardContent className="p-6 space-y-4 text-center">
          <p className="text-lg leading-relaxed">
            Hi! I&apos;m <span className='font-semibold'>Shamna P.V</span>, a passionate and curious B.Tech Information Technology student from GEC Palakkad. I specialize in Frontend Development, crafting intuitive and responsive user interfaces using modern frameworks and design systems.
          </p>
          <p className="text-md leading-relaxed">
            My interests go beyond just building beautiful frontends — I&apos;m also deeply drawn to{" "}
            <span className='font-semibold'>Artificial Intelligence</span>,{" "}
            <span className='font-semibold'>Machine Learning</span>, and{" "}
            <span className='font-semibold'>UI/UX development</span>. I enjoy exploring how smart systems and great design can come together to create impactful digital experiences.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="flex flex-col items-center justify-center py-6 px-4 shadow-md hover:shadow-xl transition"
          >
            {/* Larger icon */}
            <div className="relative w-16 h-16">
              <Image src={skill.icon} alt={skill.name} fill style={{ objectFit: "contain" }}/>
            </div>
            <p className="mt-3 font-medium">{skill.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default About
