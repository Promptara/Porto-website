export const navItems = [
  { label: 'About', target: '#about' },
  { label: 'Services', target: '#services' },
  { label: 'Work', target: '#work' },
  { label: 'Notes', target: '#notes' },
  { label: 'Lab', target: '#lab' },
];

export const sectionInfoMap = [
  { id: 'hero', label: 'Home Studio', target: '#hero' },
  { id: 'about', label: 'About Studio', target: '#about' },
  { id: 'services', label: 'Services Showcase', target: '#services' },
  { id: 'work', label: 'Curated Digital Catalog', target: '#work' },
  { id: 'notes', label: 'Opinionated Notes', target: '#notes' },
  { id: 'lab', label: 'Experimental Lab', target: '#lab' },
  { id: 'contact', label: 'Get In Touch', target: '#contact' },
];

export const handleNavClick = (target, setMobileOpen = null) => {
  if (setMobileOpen) {
    setMobileOpen(false);
  }
  if (target === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.querySelector(target);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
