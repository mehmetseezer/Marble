import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function Grid() {
  return (
    <div className="w-full py-12">
      <h1 className="text-wrap mx-auto max-w-7xl tracking-wider text-center text-3xl md:text-5xl lg:text-7xl p-10">Yeni Renkler, Yenilikçi Dokular: Evinize Şıklık Katın!</h1>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Anadolu",
    description: "Tüm renklerin karışımı, tıpkı Anadolu gibi",
    header: (
      <img
        src="/anadolu.jpg"
        className="flex flex-1 my-auto w-full max-h-[70%] object-cover mx-auto rounded-xl"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Ufuk",
    description: "Mavinin beyazla buluştuğu 2 yerin birleşiminde",
    header: (
      <img
        src="/ufuk.jpg"
        className="flex flex-1 w-full max-h-[70%] object-cover mx-auto rounded-xl"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Dark",
    description: "Koyunun hayat bulmuş hali",
    className: "md:col-span-1",
    header: (
      <img
        src="/dark.jpg"
        className="flex flex-1 w-full max-h-[70%] object-cover mx-auto rounded-xl"
        alt="Marble"
      />
    ),
  },
  {
    title: "Hayat",
    description: "Gri ve beyazın birleşimi ama gri ton daha fazla",
    header: (
      <img
        src="/hayat.jpg"
        className="flex flex-1 w-full max-h-[70%] object-cover mx-auto rounded-xl"
        alt="Marble"
      />
    ),
    className: "md:col-span-2",
  },
];
