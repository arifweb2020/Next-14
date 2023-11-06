'use client'
import Link from 'next/link';
import React,{ReactNode} from 'react';
import './style.css';
import { usePathname } from 'next/navigation';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    // conditonal routing
    const pathName = usePathname();
    return (
      <div>
        {
            pathName !== "/services" ?
            <ul className='menu'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul> : null
        }
       
        {children}
      </div>
    );
  };

export default Layout