"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Code, Lightbulb, Cpu } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/constants";

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            A showcase of my work spanning AI, IoT, and enterprise solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS_DATA.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={activeProject === project.id}
                  setActiveProject={setActiveProject}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS_DATA.filter((p) =>
                p.technologies.some((t) =>
                  ["AI", "Machine Learning", "NLP", "OpenAI", "RAG"].some(
                    (aiTech) => t.includes(aiTech),
                  ),
                ),
              ).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={activeProject === project.id}
                  setActiveProject={setActiveProject}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="iot" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS_DATA.filter((p) =>
                p.technologies.some((t) =>
                  ["IoT", "ESP32", "Sensors"].some((iotTech) =>
                    t.includes(iotTech),
                  ),
                ),
              ).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={activeProject === project.id}
                  setActiveProject={setActiveProject}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="enterprise" className="mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {PROJECTS_DATA.filter((p) =>
                p.technologies.some((t) =>
                  ["Next.js", "Database", "Management", "System"].some(
                    (entTech) => t.includes(entTech),
                  ),
                ),
              ).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={activeProject === project.id}
                  setActiveProject={setActiveProject}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS_DATA)[0];
  isActive: boolean;
  setActiveProject: (id: number | null) => void;
}

function ProjectCard({
  project,
  isActive,
  setActiveProject,
}: ProjectCardProps) {
  return (
    <motion.div>
      <Card
        className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
        onClick={() => setActiveProject(isActive ? null : project.id)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <div className="mb-2 flex items-center text-amber-500 dark:text-amber-400">
                  <Lightbulb size={18} className="mr-2" />
                  <h4 className="font-semibold">Problem</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.problem}
                </p>
              </div>
              <div className="mb-4">
                <div className="mb-2 flex items-center text-emerald-500 dark:text-emerald-400">
                  <Cpu size={18} className="mr-2" />
                  <h4 className="font-semibold">Solution</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.solution}
                </p>
              </div>
            </motion.div>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="font-normal">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            {/* <Link href={project.link} target="_blank" rel="noopener noreferrer"> */}
            <Link href={project.link}>
              <Code size={16} className="mr-2" />
              Code
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href={project.link}>
              <ExternalLink size={16} className="mr-2" />
              Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
