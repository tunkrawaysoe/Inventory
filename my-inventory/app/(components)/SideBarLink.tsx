import { Icon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SideBarTypes {
  href: string;
  icon: Icon;
  Label: string;
  isCollapsed: boolean;
}

function SideBarLink({ href, icon: IconComponent, Label, isCollapsed }: SideBarTypes) {
    const pathName = usePathname();
    const isActvieSideBar = pathName === href
  return (
    <Link href={href}>
      <div className={`
      ${isCollapsed ? 'py-4 justify-center' : 'justify-start px-8 py-4'} 
      ${isActvieSideBar ? ' bg-blue-200' : ''}
       flex items-center cursor-pointer hover:bg-blue-100 hover:text-blue-500`}>
        <IconComponent className="w-5 h-5 !text-gray-700"  />
        {!isCollapsed && <span className="ml-4">{Label}</span>}
      </div>
    </Link>
  );
}

export default SideBarLink;
