export interface Author {
  id: string;
  name: string;
  bio: string;
  credentials: string;
  initials: string;
  accentColor: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export const authors: Author[] = [
  {
    id: 'mike-callahan',
    name: 'Mike Callahan',
    bio: 'Mike spent 22 years as a master ASE-certified technician at dealerships across Texas and Ohio before switching to full-time automotive writing. He has personally diagnosed more than 14,000 vehicles and walked hundreds of first-time car owners through repairs they thought were impossible without a shop.',
    credentials: 'ASE Master Technician (L1 Advanced Engine Performance)',
    initials: 'MC',
    accentColor: 'bg-red-700',
    social: {
      twitter: '#',
    },
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    bio: 'Sarah trained as an automotive technician before moving into journalism. She road-tests every product she covers and returns loaners after two weeks to avoid any editorial obligation to the manufacturer. Her work has appeared in AutoWeek and Popular Mechanics.',
    credentials: 'ASE Certified Technician — Automotive Journalist, 9 years',
    initials: 'SC',
    accentColor: 'bg-zinc-700',
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id);
}
