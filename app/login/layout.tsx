import Link from 'next/link';
import React,{ReactNode} from 'react';
import './style.css'

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div>
        <ul className='menu'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
        {children}
      </div>
    );
  };

export default Layout