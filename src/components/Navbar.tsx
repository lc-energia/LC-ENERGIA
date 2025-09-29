'use client';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useSticky } from '@/hooks/useSticky';

// Data structure for navigation, preserving the original links and sections
const navigation = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'Azienda', href: '/azienda' },
  ],
  dropdowns: [
    {
      name: 'Progettazione',
      items: [
        { name: 'Progettazione e consulenza tecnica', href: '/progettazione-e-consulenza-tecnica' },
        { name: 'Contabilizzazione e ripartizione del calore', href: '/contabilizzazione-calore-impianti-termici-centralizzati' },
        { name: 'Progettazione Antincendio', href: '/progettazione-antincendio' },
        { name: 'Progettazione Acustica', href: '/progettazione-acustica' },
        { name: 'Progettare il risparmio energetico', href: '/progettare-il-risparmio-energetico' },
        { name: 'Impianti Geotermici', href: '/impianti-geotermici' },
      ]
    },
    {
      name: 'Impianti',
      items: [
        { name: 'Impianti Fotovoltaici', href: '/impianti-fotovoltaici' },
        { name: 'Stazioni di Ricarica', href: '/stazioni-di-ricarica' },
      ]
    },
    {
      name: 'Studio',
      items: [
        { name: 'Diagnosi Energetica e Riqualificazione Centrali Termiche', href: '/riqualificazione-di-centrali-termiche-esistenti' },
      ]
    }
  ],
  rightLink: { name: 'Accrediti', href: '/accrediti' }
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const isSticky = useSticky();

  return (
    <header className={classNames(
      'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
      isSticky ? 'shadow-sm' : ''
    )}>
      <Disclosure as="nav">
        {({ open, close }) => (
          <>
            <div className="flex h-auto items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center border-r px-4 lg:px-5 self-stretch">
                <Image src="/img/logo.png" alt="LC Energia Logo" width={150} height={35} priority />
              </Link>

              <div className="flex w-full items-center justify-between">
                {/* Desktop Navigation */}
                <div className="hidden w-full items-center lg:flex ml-auto">
                  <div className="ml-auto flex items-center p-0">
                    {navigation.links.map((item) => (
                      <Link key={item.name} href={item.href} className="whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-[#F49918] transition-all duration-300 hover:-translate-y-1">
                        {item.name}
                      </Link>
                    ))}

                    {navigation.dropdowns.map((dropdown) => (
                      <Menu as="div" className="relative" key={dropdown.name}>
                        <Menu.Button className="flex items-center whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-[#F49918] transition-all duration-300 hover:-translate-y-1">
                          {dropdown.name}
                          <ChevronDownIcon className="ml-1 h-4 w-4" />
                        </Menu.Button>
                        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                          <Menu.Items className="absolute z-10 mt-0 w-max rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {dropdown.items.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link href={item.href} onClick={() => close()} className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ))}

                    <Link href={navigation.rightLink.href} className="whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-[#F49918] transition-all duration-300 hover:-translate-y-1">
                      {navigation.rightLink.name}
                    </Link>
                  </div>
                </div>
                
                <Link href="/contact" className="whitespace-nowrap rounded-none bg-[#F49918] px-4 py-4 text-white hover:bg-[#e68a16] lg:px-5 hidden lg:block">
                  Richiedi un preventivo
                  <i className="fa fa-arrow-right ml-3"></i>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="mr-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F49918]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <Disclosure.Panel className="w-full lg:hidden border-t">
              <div className="space-y-1 p-4">
                {navigation.links.map((item) => (
                  <Disclosure.Button key={item.name} as={Link} href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#F49918]">
                    {item.name}
                  </Disclosure.Button>
                ))}
                {navigation.dropdowns.map((dropdown) => (
                  <Disclosure key={dropdown.name}>
                    {({ open: dOpen }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#F49918]">
                          <span>{dropdown.name}</span>
                          <ChevronDownIcon className={classNames(dOpen ? 'rotate-180' : '', 'h-5 w-5')} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4">
                          {dropdown.items.map((item) => (
                            <Disclosure.Button key={item.name} as={Link} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#F49918]">
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <Disclosure.Button as={Link} href={navigation.rightLink.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#F49918]">
                  {navigation.rightLink.name}
                </Disclosure.Button>
                <Disclosure.Button as={Link} href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#F49918]">
                  Richiedi un preventivo
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
