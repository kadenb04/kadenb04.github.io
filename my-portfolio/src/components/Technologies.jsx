import { Typography } from "@mui/material";
import {
  SiReact,
  SiMongodb,
  SiDotnet,
  SiTailwindcss,
  SiLua
} from "react-icons/si";

const tech = [
  { name: "React", icon: <SiReact /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Lua", icon: <SiLua /> },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-10 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <Typography variant="h4" className="mb-16 pb-5">
          Technologies
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
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