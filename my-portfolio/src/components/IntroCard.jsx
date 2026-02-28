import Technologies from "./Technologies";
import {
  IoLocationOutline,
  IoCode,
  IoGameControllerOutline
} from "react-icons/io5";

export default function IntroCard({ onSkillClick }) {
    return (
        <section className="flex py-10 justify-center px-6 relative overflow-hidden">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
                <div className="space-y-2">

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
                    </div>

                    <p className="text-gray-400 max-w-lg">
                        Software Developer focused on full-stack web applications, and
                        game development
                    </p>
                </div>

                <div className="space-y-10">
                    <div className="flex items-end justify-center gap-6 mb-12">
                        <Technologies onSkillClick={onSkillClick} />
                    </div>
                </div>
            </div>
        </section>
    );
}