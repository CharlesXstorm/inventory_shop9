import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container_">
      <Dashboard />
      <div className="container__content">
        <Header />
        <main className="container__body">{children}</main>
      </div>
    </div>
  );
}
