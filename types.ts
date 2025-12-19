
export interface LinkItem {
  label: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface Category {
  id: string;
  title: string;
  links: LinkItem[];
}
