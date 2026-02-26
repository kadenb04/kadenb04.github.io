import Technologies from "./Technologies";
import {
  IoLocationOutline,
  IoCode,
  IoGameControllerOutline,
  IoCalendarOutline
} from "react-icons/io5";

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "TailwindCSS", level: 85 },
  { name: "C#", level: 80 },
  { name: "Node.js", level: 75 },
];

export default function IntroCard() {
    return (
        <section className="flex py-15 justify-center px-8 relative overflow-hidden">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
                <div className="space-y-6">

                    <p className="uppercase tracking-widest text-gray-500 text-sm">
                        About Me
                    </p>

                    <h1 className="text-5xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-violet-400">Kaden Buchanan</span>
                    </h1>

                    <div className="space-y-2 text-gray-400 text-lg">
                        <div className="flex gap-3 ml-1 items-center"><IoLocationOutline className="text-violet-400 text-2xl" /> Based in Utah, USA</div>
                        <div className="flex gap-3 ml-1 items-center"><IoCode className="text-violet-400 text-2xl" /> Full Stack Developer</div>
                        <div className="flex gap-3 ml-1 items-center"><IoGameControllerOutline className="text-violet-400 text-2xl" /> Game Developer</div>
                        <div className="flex gap-3 ml-1 items-center"><IoCalendarOutline className="text-violet-400 text-2xl" /> 7+ Years of Experience</div>
                    </div>

                    <p className="text-gray-400 max-w-lg">
                        Software Developer focused on full-stack web applications, and
                        game development
                    </p>

                    <div className="flex gap-4 pt-4">
                        <button className="bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-lg font-semibold transition">
                        Get in Touch
                        </button>

                        <button className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg transition">
                        View Projects
                        </button>
                    </div>

                </div>

                <div className="space-y-10">
                    <div className="flex items-end justify-center gap-6 mb-12">
                        <Technologies />
                    </div>
                </div>
            </div>
        </section>
    );
}