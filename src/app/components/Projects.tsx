import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardTitle } from "@/components/ui/card";

function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col items-center bg-white py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">I made this!!</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <Card className="shadow-md hover:shadow-xl transition">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Spendwise</h2>
            <Image
              src="/skills/spendwise.png"
              alt="Spendwise"
              width={250}
              height={250}
              className="rounded"
            />
            <p className="text-sm text-gray-600">
              SpendWise is a student-friendly finance prediction tool that uses machine learning to estimate monthly savings based on past and current expenses.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-xl transition">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Taskly</h2>
            <Image
              src="/skills/taskly.png"
              alt="Spendwise"
              width={450}
              height={450}
              className="rounded"
            />
            <p className="text-sm text-gray-600">
              A task management web application to create, update, assign, and comment on tasks efficiently.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-md hover:shadow-xl transition">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Zoom_In_Zoom_Out</h2>
            <p className="text-sm text-gray-600">
              A hand gesture-based project that allows image zooming using thumb and index finger movements detected through the laptop webcam.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Projects
