/**
 * Navigation Type Definitions
 */

export interface NavItem {
  name: string;
  href: string;
}

export interface NavDropdown {
  name: string;
  items: NavItem[];
}

export interface Navigation {
  links: NavItem[];
  dropdowns: NavDropdown[];
  rightLink: NavItem;
}
