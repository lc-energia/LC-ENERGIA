'use client';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

interface AccordionItem {
  title: string;
  content: string;
}

interface InfoAccordionProps {
  items: AccordionItem[];
  image?: string;
}

const InfoAccordion: React.FC<InfoAccordionProps> = ({ items, image }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {image && (
            <div className="lg:w-2/5 flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image 
                  src={image} 
                  alt="Impianto fotovoltaico" 
                  width={500} 
                  height={350}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          )}
          <div className={`flex-1 ${image ? 'lg:w-3/5' : 'w-full'}`}>
            <div className="space-y-3">
              {items.map((item, index) => (
                <Disclosure as="div" key={index} defaultOpen={index === 0} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between items-center px-5 py-4 text-left text-base font-semibold text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition-colors duration-200">
                        <span className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-200 ${open ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                          {item.title}
                        </span>
                        <ChevronUpIcon
                          className={`${open ? 'rotate-180 transform text-blue-500' : 'text-gray-400'} h-5 w-5 transition-all duration-200`}
                        />
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition duration-300 ease-out"
                        enterFrom="transform -translate-y-2 opacity-0"
                        enterTo="transform translate-y-0 opacity-100"
                        leave="transition duration-200 ease-out"
                        leaveFrom="transform translate-y-0 opacity-100"
                        leaveTo="transform -translate-y-2 opacity-0"
                      >
                        <Disclosure.Panel className="px-5 py-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-200">
                          {item.content}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAccordion;