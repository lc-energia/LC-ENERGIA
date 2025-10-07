'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useSticky } from '@/hooks/useSticky';
import { usePathname } from 'next/navigation';

// Data structure for navigation
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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className={classNames(
      'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
      isSticky ? 'shadow-sm' : ''
    )}>
      <nav className="relative">
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
                  <Link key={item.name} href={item.href} className="whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                    {item.name}
                  </Link>
                ))}

                {navigation.dropdowns.map((dropdown) => (
                  <Menu as="div" className="relative" key={dropdown.name}>
                    <Menu.Button className="flex items-center whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                      {dropdown.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute z-10 mt-0 w-max rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {dropdown.items.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={item.href} className={classNames(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}>
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

                <Link href={navigation.rightLink.href} className="whitespace-nowrap px-4 py-6 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  {navigation.rightLink.name}
                </Link>
              </div>
            </div>

            <Link href="/contact" className="whitespace-nowrap rounded-none bg-secondary hover:bg-secondary-600 text-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 lg:px-5 hidden lg:block">
              Richiedi un preventivo
              <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="mr-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="lg:hidden border-t absolute w-full bg-white shadow-lg">
            <div className="space-y-1 p-4">
              {navigation.links.map((item) => (
                <Link href={item.href} key={item.name} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-primary transition-all duration-300">
                  {item.name}
                </Link>
              ))}
              {navigation.dropdowns.map((dropdown) => (
                <Disclosure as="div" key={dropdown.name} className="space-y-1">
                  {({ open: dOpen }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-primary transition-all duration-300">
                        <span>{dropdown.name}</span>
                        <ChevronDownIcon className={classNames(dOpen ? 'rotate-180' : '', 'h-5 w-5 transition-transform duration-200')} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4 space-y-1">
                        {dropdown.items.map((item) => (
                          <Link href={item.href} key={item.name} className="block rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-neutral-100 hover:text-primary transition-all duration-300">
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <Link href={navigation.rightLink.href} key={navigation.rightLink.name} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-primary transition-all duration-300">
                {navigation.rightLink.name}
              </Link>
              <Link href="/contact" key="contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-primary transition-all duration-300">
                Richiedi un preventivo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}