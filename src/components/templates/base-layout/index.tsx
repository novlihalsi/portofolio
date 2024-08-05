import { PropsWithChildren } from "react";
import Header from "app/components/molecules/header";
import Footer from "app/components/molecules/footer";

export type BaseLayoutProps = PropsWithChildren;

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
