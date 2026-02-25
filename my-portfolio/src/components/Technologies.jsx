import { Typography } from "@mui/material";
import {
  SiReact,
  SiMongodb,
  SiDotnet,
  SiTailwindcss,
  SiRoblox
} from "react-icons/si";

const tech = [
  { name: "React", icon: <SiReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Roblox", icon: <SiRoblox /> },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Typography variant="h4" className="mb-16">
          Technologies
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 rounded-xl 
                         bg-(--color-surface-2) border 
                         border-(--color-surface-3)"
            >
              <div className="text-4xl">{t.icon}</div>
              <p className="text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}