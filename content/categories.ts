export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  accentClass: string;
  count?: number;
}

export const categories: Category[] = [
  {
    id: 'engine-repair',
    name: 'Engine Repair',
    slug: 'engine-repair',
    description: 'Deep dives into engine diagnostics, rebuilds, and repairs',
    accentClass: 'bg-red-600',
  },
  {
    id: 'diy-fixes',
    name: 'DIY Fixes',
    slug: 'diy-fixes',
    description: 'Step-by-step repairs any car owner can handle at home',
    accentClass: 'bg-zinc-700',
  },
  {
    id: 'maintenance-tips',
    name: 'Maintenance Tips',
    slug: 'maintenance-tips',
    description: 'Keep your car running longer with proven habits',
    accentClass: 'bg-slate-600',
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    slug: 'diagnostics',
    description: 'Decode warning lights and codes before they get expensive',
    accentClass: 'bg-amber-600',
  },
  {
    id: 'tools-reviews',
    name: 'Tools & Reviews',
    slug: 'tools-reviews',
    description: 'Honest reviews of tools and products worth your money',
    accentClass: 'bg-blue-700',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
