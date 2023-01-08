import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

const DashboardRootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen p-6 rainbow-mesh ">
        <GlassPane className="w-full h-full flex items-center justify-center ">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;
