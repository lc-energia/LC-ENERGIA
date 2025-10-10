'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@/lib/utils';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/Button';
import { Fragment, useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useSticky } from '@/hooks/useSticky';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/components/ui/Typography';

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
    <header className={cn(
      'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
      isSticky ? 'shadow-sm' : ''
    )}>
      <nav className="relative">
        <div className="flex h-auto items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center px-4 lg:px-5 self-stretch hover:opacity-80 transition-opacity duration-300">
            <Image src="/img/logo.png" alt="LC Energia Logo" width={150} height={35} priority />
          </Link>

          <div className="flex w-full items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden w-full items-center lg:flex ml-auto">
              <div className="ml-auto flex items-center p-0">
                {navigation.links.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className={cn("whitespace-nowrap px-4 py-6 hover:-translate-y-1 transition-all duration-300")}
                    active={pathname === item.href}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {navigation.dropdowns.map((dropdown) => (
                  <Menu as="div" className="relative" key={dropdown.name}>
                    <Menu.Button className="nav-link flex items-center whitespace-nowrap px-4 py-6 hover:-translate-y-1 transition-all duration-300">
                      {dropdown.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute z-10 mt-0 w-max rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {dropdown.items.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={item.href} className={cn(active ? 'bg-gray-200' : '', 'block px-4 py-2 text-sm text-gray-700')}>
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

                <NavLink
                  href={navigation.rightLink.href}
                  className="whitespace-nowrap px-4 py-6 hover:-translate-y-1 transition-all duration-300"
                  active={pathname === navigation.rightLink.href}
                >
                  {navigation.rightLink.name}
                </NavLink>
              </div>
            </div>

                      <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-300 rounded-full shadow-sm hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/30 overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #e67e00, #cc6f00)',
                }}
              >
                <span className="relative z-10 flex items-center" style={{ color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                  Preventivo
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: '#ffffff' }}
                  />
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e, #fdc830, #7db042, #6e9c3a, #e67e00, #cc6f00)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient-shift 3s ease infinite'
                }} />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="mr-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
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
                <Link href={item.href} key={item.name} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-accent transition-all duration-300">
                  {item.name}
                </Link>
              ))}
              {navigation.dropdowns.map((dropdown) => (
                <Disclosure as="div" key={dropdown.name} className="space-y-1">
                  {({ open: dOpen }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-accent transition-all duration-300">
                        <span>{dropdown.name}</span>
                        <ChevronDownIcon className={cn(dOpen ? 'rotate-180' : '', 'h-5 w-5 transition-transform duration-200')} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4 space-y-1">
                        {dropdown.items.map((item) => (
                          <Link href={item.href} key={item.name} className="block rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:bg-neutral-100 hover:text-accent transition-all duration-300">
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <Link href={navigation.rightLink.href} key={navigation.rightLink.name} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-neutral-100 hover:text-accent transition-all duration-300">
                {navigation.rightLink.name}
              </Link>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/contact" key="contact">
                  Richiedi un preventivo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}