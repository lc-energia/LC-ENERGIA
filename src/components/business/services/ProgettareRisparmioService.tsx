/**
 * ProgettareRisparmioService - Componente para Progettare il Risparmio Energetico
 * Layout con introduction box, imagen lateral y secciones en cards
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ServiceData, Section } from '@/data/services';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
import SafeHTML from '@/components/shared/SafeHTML';

interface ProgettareRisparmioServiceProps {
  service: ServiceData;
}

export default function ProgettareRisparmioService({ service }: ProgettareRisparmioServiceProps) {
  return (
    <div className="w-full">
      {/* Cuadro con introduction */}
      <motion.div
        className="mb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <div className="relative z-10">
            <SafeHTML html={service.introduction} className="text-gray-700 leading-relaxed" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="lg:col-span-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="grid grid-cols-1 gap-8">
            {service.sections.map((section: Section, i: number) => (
              <motion.div
                key={i}
                variants={cardEntrance}
              >
                <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                  <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  {section.list && (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item: string, j: number) => (
                        <li key={j} className="flex items-start">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.incentives && (
                    <motion.div
                      className="grid grid-cols-1 gap-4 mt-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                    >
                      {section.incentives.map((incentive: { title: string; description: string; link: string }, j: number) => (
                        <motion.div
                          key={j}
                          variants={cardEntrance}
                          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                        >
                          <h6 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-700 transition-colors">
                            {incentive.title}
                          </h6>
                          <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                            {incentive.description}
                          </p>
                          <Link
                            href={incentive.link}
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors text-sm group/link"
                          >
                            Scopri di più
                            <motion.div
                              className="ml-2"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Image
            src="/img/lc2.jpg"
            alt="Progettare il Risparmio Energetico"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
