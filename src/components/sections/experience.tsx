"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA, SKILLS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, BookOpen } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 bg-accent/30" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the expertise I&apos;ve developed along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-500" size={24} />
              Career Path
            </h3>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
              {EXPERIENCE_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative pl-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-background bg-primary flex items-center justify-center text-primary-foreground">
                    {item.id}
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <span className="text-sm text-muted-foreground">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
                    <h5 className="text-primary font-medium">{item.company}</h5>
                    <p className="mt-3 text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="text-blue-500" size={24} />
              Skills & Expertise
            </h3>

            <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
              <h4 className="text-lg font-medium mb-4">Technical Skills</h4>
              <div className="space-y-6">
                {SKILLS_DATA.technical.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS_DATA.soft.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="px-4 py-2 text-base font-normal bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 border-0">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}