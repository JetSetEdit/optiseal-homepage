const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../app/construction-windows-doors/page.tsx');
const template = fs.readFileSync(templatePath, 'utf8');

const pages = [
  // Construction Sealing Solutions
  { route: 'construction-air-tightness', title: 'Construction: Air Tightness', crumb: 'Air Tightness', parent: 'Construction' },
  { route: 'construction-thermal-insulation', title: 'Construction: Thermal Insulation', crumb: 'Thermal Insulation', parent: 'Construction' },
  { route: 'construction-decking-timber', title: 'Construction: Decking & Timber', crumb: 'Decking & Timber', parent: 'Construction' },
  { route: 'construction-coolroom-sip-panels', title: 'Construction: Coolroom & SIP Panels', crumb: 'Coolroom & SIP Panels', parent: 'Construction' },
  { route: 'construction-opte2-innovative-products', title: 'Construction: OPTE2 Innovative Products', crumb: 'OPTE2 Innovative Products', parent: 'Construction' },
  // Agricultural Sealing Solutions
  { route: 'agricultural-ponds-dams-lakes', title: 'Agricultural: Ponds, Dams & Lakes', crumb: 'Ponds, Dams & Lakes', parent: 'Agricultural' },
  { route: 'agricultural-silos-linings', title: 'Agricultural: Silos & Linings', crumb: 'Silos & Linings', parent: 'Agricultural' },
  { route: 'agricultural-repairs', title: 'Agricultural: Repairs', crumb: 'Repairs', parent: 'Agricultural' },
  // Civil & Infrastructure
  { route: 'civil-road-sealing', title: 'Civil: Road Sealing', crumb: 'Road Sealing', parent: 'Civil' },
  { route: 'civil-water-infrastructure', title: 'Civil: Water Infrastructure', crumb: 'Water Infrastructure', parent: 'Civil' },
  { route: 'marine-sealing-solutions', title: 'Outdoor & Marine Grade Sealing', crumb: 'Outdoor & Marine Grade Sealing', parent: 'Civil' },
  // Automotive, Truck & Caravan
  { route: 'automotive-sealing', title: 'Automotive: Sealing', crumb: 'Sealing', parent: 'Automotive' },
  { route: 'automotive-soundproofing', title: 'Automotive: Soundproofing', crumb: 'Soundproofing', parent: 'Automotive' },
  { route: 'automotive-repair', title: 'Automotive: Repair', crumb: 'Repair', parent: 'Automotive' },
  // Synthetic Tapes
  { route: 'synthetic-grass-joining-tapes', title: 'Synthetic Tapes: Grass Joining Tapes', crumb: 'Grass Joining Tapes', parent: 'Synthetic Tapes' },
  { route: 'synthetic-tactile-surfaces', title: 'Synthetic Tapes: Tactile Surfaces', crumb: 'Tactile Surfaces', parent: 'Synthetic Tapes' },
  // OEM / Private Label Services
  { route: 'oem-private-label-services', title: 'OEM / Private Label Services', crumb: 'OEM / Private Label Services', parent: 'OEM' },
  // Services
  { route: 'services-tech-support', title: 'Services: Technical Support & Consultation', crumb: 'Technical Support & Consultation', parent: 'Services' },
  { route: 'services-custom-tape-development', title: 'Services: Custom Tape Development', crumb: 'Custom Tape Development', parent: 'Services' },
  { route: 'services-site-sealing-audits', title: 'Services: Site & Sealing Audits', crumb: 'Site & Sealing Audits', parent: 'Services' },
  // Resources
  { route: 'resources-sds', title: 'Resources: Safety Data Sheets', crumb: 'Safety Data Sheets', parent: 'Resources' },
  { route: 'resources-case-studies', title: 'Resources: Case Studies', crumb: 'Case Studies', parent: 'Resources' },
  { route: 'resources-faqs', title: 'Resources: FAQs', crumb: 'FAQs', parent: 'Resources' },
  { route: 'resources-downloads-technical-docs', title: 'Resources: Downloads & Technical Docs', crumb: 'Downloads & Technical Docs', parent: 'Resources' },
  // About & Contact
  { route: 'about-us', title: 'About Us', crumb: 'About Us', parent: '' },
  { route: 'contact-us', title: 'Contact Us', crumb: 'Contact Us', parent: '' },
];

pages.forEach(({ route, title, crumb, parent }) => {
  const dir = path.join(__dirname, '../app', route);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  let page = template
    .replace(/Construction: Windows & Doors/g, title)
    .replace(/Windows & Doors/g, crumb)
    .replace(/Construction/g, parent || '');
  // Breadcrumbs: update parent and crumb
  page = page.replace(
    /<BreadcrumbLink href="\/construction-windows-doors">Construction<\/BreadcrumbLink>/,
    parent ? `<BreadcrumbLink href="/${route}">${parent}</BreadcrumbLink>` : ''
  );
  page = page.replace(
    /<BreadcrumbPage>Windows & Doors<\/BreadcrumbPage>/,
    `<BreadcrumbPage>${crumb}</BreadcrumbPage>`
  );
  fs.writeFileSync(path.join(dir, 'page.tsx'), page, 'utf8');
});
console.log('Scaffolded all pages!'); 