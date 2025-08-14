"use client";

import { LucideIcon } from "lucide-react";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface DropdownMenuProps {
  sections: DropdownSection[];
  isOpen: boolean;
  onMouseEnter: () => void;
  className?: string;
}

export default function DropdownMenu({ 
  sections, 
  isOpen, 
  onMouseEnter, 
  className = "" 
}: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className={`absolute top-full left-0 w-screen max-w-4xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-lg mt-2 ${className}`}
      onMouseEnter={onMouseEnter}
    >
      <div className={`grid gap-8 p-8 ${sections.length === 1 ? 'grid-cols-1' : sections.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {item.description}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export types for use in other components
export type { DropdownItem, DropdownSection, DropdownMenuProps };
