import education from "../data/education";

export default function EducationTimeline() {
   return (
      <section id="education" className="py-20">
         <h2 className="text-3xl font-bold text-center mb-16">
            Education
         </h2>
         
         {/* Timeline Wrapper */}
         <div className="relative max-w-8xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-(--color-surface-3) transform -translate-x-1/2" />

            <div className="space-y-32 relative">
               {education.map((item, index) => (
                  <div
                     key={index}
                     className={`relative h-32 flex items-center ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                     } justify-center`}
                  >
                     {/* Timeline Dot */}
                     <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-violet-400 border-4 border-(--color-surface-base) z-10" />
         
                     {/* Card */}
                     <div
                        className={`absolute top-0 w-[25%] rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                           ${
                              index % 2 === 0
                              ? "left-1/2 -translate-x-[calc(100%+20px)] text-right"
                              : "left-1/2 translate-x-5 text-left"
                           }
                        `}
                     >
                        <h3 className="text-xl font-semibold">{item.school}</h3>
                        <p className="text-violet-400 font-medium">{item.degree}</p>
                        <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                        <p className="text-gray-300">{item.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}