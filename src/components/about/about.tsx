import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Music,
  MapPin,
  Clapperboard,
  Tv,
  Utensils,
  Laptop,
  type LucideIcon,
} from "lucide-react";

export default function AboutMinimal() {
  const facts: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Music, label: "Music", value: "Perfect" },
    { icon: MapPin, label: "City", value: "Batangas" },
    { icon: Clapperboard, label: "Movie", value: "Ironman" },
    { icon: Tv, label: "TV Show", value: "Showtime" },
    { icon: Utensils, label: "Food", value: "Nachos" },
    { icon: Laptop, label: "System", value: "Linux/Windows" },
  ];

  return (
    <section className="font-mono mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <header className="mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Meet a skilled Front‑end Developer.
        </p>
      </header>

      {/* Minimal container: just border, no background */}
      <div className="rounded-2xl border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-5 md:p-8 lg:p-10">
          {/* Image — hidden on mobile, shown on md+ */}
          <div className="hidden md:block md:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/profile.png" // replace with your image
                alt="Portrait"
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 0px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Introduction
            </p>

            <h3 className="mt-2 text-xl md:text-xl lg:text-xl font-extrabold leading-tight">
              Front‑end Developer passionate about tech, coffee, and personal
              projects
            </h3>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I build dynamic user experiences with React, Next.js, and
                Tailwind CSS. I’m focused on impactful projects and continuous
                growth.
              </p>
              <p>
                Beyond coding, I share knowledge, help others improve their
                skills, and stay current with the latest in web development.
              </p>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
