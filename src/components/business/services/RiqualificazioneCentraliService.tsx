/**
 * RiqualificazioneCentraliService - Componente para Riqualificazione Centrali Termiche
 * Layout con introduction box y 3 cards grandes en gradient con listas
 */

'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ServiceData, Section } from '@/data/services';
import { fadeInUp, cardEntrance, viewportSettings } from '@/lib/animation-variants';

interface RiqualificazioneCentraliServiceProps {
  service: ServiceData;
}

export default function RiqualificazioneCentraliService({ service }: RiqualificazioneCentraliServiceProps) {
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
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {service.sections.map((section: Section, i: number) => (
          <motion.div
            key={i}
            className="lg:col-span-1"
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#F49918] to-[#e68900] rounded-xl shadow-xl hover:shadow-2xl p-8 h-full border border-[#F49918]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              {/* Efectos decorativos */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>

              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <div className="relative z-10">
                <h5 className="text-2xl font-bold mb-4 text-white">{section.title}</h5>
                <p className="text-white/95 leading-relaxed mb-4">{section.content}</p>
                {section.list && (
                  <ul className="space-y-3 mt-4">
                    {section.list.map((item: string, j: number) => (
                      <li key={j} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-white/30 transition-colors">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                        </div>
                        <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
