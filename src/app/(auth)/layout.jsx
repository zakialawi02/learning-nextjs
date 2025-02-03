import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Toaster />
    </>
  );
}
