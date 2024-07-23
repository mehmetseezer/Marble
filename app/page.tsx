"use client";

import Hero from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { IconMessage, IconUser, IconHome } from "@tabler/icons-react";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Foooter";

export default function Home() {
  const navItems = [
    {
      name: "Anasayfa",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Hakkımızda",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "İletişim",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="text-slate-900 bg-zinc-50 relative overflow-x-hidden">
      <Hero />
      <Grid />
      <FloatingNav navItems={navItems} />
      <Galeria/>
      <Footer/>
    </main>
  );
}
