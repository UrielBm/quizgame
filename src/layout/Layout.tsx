import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      <main className="wrapperPages">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
