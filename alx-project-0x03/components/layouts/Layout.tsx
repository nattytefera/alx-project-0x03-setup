import { type LayoutProps } from '@/interface/index';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
