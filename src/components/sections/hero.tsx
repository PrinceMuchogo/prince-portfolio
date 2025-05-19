"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Cpu, Database, Globe } from "lucide-react";
import { PERSONAL_DATA } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16" id="about">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                AI Specialist
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
                IoT Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                Enterprise Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
                {PERSONAL_DATA.name}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              {PERSONAL_DATA.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <motion.div
              className="mt-16 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a
                href="#experience"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowDownCircle className="animate-bounce" size={20} />
                <span>Scroll to explore</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              <div className="absolute top-10 left-10 p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
                <Cpu size={32} className="text-blue-500 mb-3" />
                <h3 className="font-bold mb-1">AI Solutions</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge machine learning implementations</p>
              </div>
              
              <div className="absolute bottom-20 left-20 p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
                <Database size={32} className="text-purple-500 mb-3" />
                <h3 className="font-bold mb-1">Data Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless enterprise data solutions</p>
              </div>
              
              <div className="absolute top-20 right-10 p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
                <Globe size={32} className="text-emerald-500 mb-3" />
                <h3 className="font-bold mb-1">IoT Systems</h3>
                <p className="text-sm text-muted-foreground">Connected device ecosystems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}