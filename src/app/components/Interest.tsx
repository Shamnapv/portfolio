import React from "react";
import {
  Monitor,
  BrainCircuit,
  Camera,
  Code2,
  NotebookPen
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    title: "Web Design",
    icon: <Monitor size={32} className="text-blue-600" />,
  },
  {
    title: "AI / ML",
    icon: <BrainCircuit size={32} className="text-purple-600" />,
  },
  {
    title: "Computer Vision",
    icon: <Camera size={32} className="text-indigo-600" />,
  },
  {
    title: "Creative Coding",
    icon: <Code2 size={32} className="text-rose-600" />,
  },
  {
    title: "Tech Blogging",
    icon: <NotebookPen size={32} className="text-pink-600" />,
  },
];

export default function Interest() {
  return (
    <section
      id="interest"
      className="w-full flex flex-col items-center  py-16 px-4"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        My Interests
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {interests.map((interest) => (
          <Card
            key={interest.title}
            className="flex flex-col items-center justify-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-lg cursor-pointer"
          >
            {interest.icon}
            <CardContent className="mt-3 text-center">
              <h2 className="text-lg font-medium text-gray-800">
                {interest.title}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
