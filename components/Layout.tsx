import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div id="header-container">
        <Header />
      </div>
      <div id="content-container" className="grow flex justify-center">
        {children}
      </div>
      <div id="footer-container">
        <Footer />
      </div>
    </div>
  );
}
