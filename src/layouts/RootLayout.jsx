import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function RootLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
