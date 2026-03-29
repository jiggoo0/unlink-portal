"use client";

import { AnimatedCard } from "@/components/animated-section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

import SectionHeader from "@/components/shared/SectionHeader";

export function PortfolioSection() {
  const { portfolio } = siteConfig;

  if (!portfolio) return null;

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          align="center"
          badge={portfolio.badge}
          title={portfolio.title}
          description={portfolio.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {portfolio.items.map(
            (
              project: {
                title: string;
                category: string;
                image: string;
                aspect: string;
                span: string;
              },
              index: number,
            ) => (
              <AnimatedCard
                key={project.title}
                delay={index * 0.08}
                className={project.span}
              >
                <div className="relative overflow-hidden rounded-xl group h-full border border-border bg-card">
                  <div className={`relative ${project.aspect} min-h-[220px]`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-secondary text-xs font-mono tracking-widest uppercase block mb-1.5">
                            {project.category}
                          </span>
                          <h3 className="text-primary font-bold text-base sm:text-lg tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
