import { Footer } from "./footer/footer";
import { Header } from "./header/header";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main>{children}</main>
      </div>

      <footer className="bg-footerBG pt-[80px] pb-[30px]">
        <Footer />
      </footer>
    </div>
  );
};
