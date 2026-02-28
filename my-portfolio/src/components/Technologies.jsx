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
    <section id="technologies">
      <div className="max-w-2xl mx-auto text-center">
        <Typography variant="h4" className="mb-16 pb-5">
          Key Skills
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 p-6 border border-zinc-800 px-4 py-2 rounded-md text-sm transition hover:border-violet-400 hover:text-violet-400"
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