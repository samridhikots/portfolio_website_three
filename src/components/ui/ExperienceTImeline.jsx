import { Timeline } from "./Timeline";
import timelineData from "./TimelineData";

export default function ExperienceSection() {

  return (
    <div
      className="relative h-fit w-full py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      id="experience"
    >
      {/* Decorative background glows (dark mode only) */}
        <>
          <div className="absolute top-10 -left-40 z-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-1/4 left-1/2 z-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-10 -right-40 z-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        </>

      <section className="relative z-10 mx-auto flex w-11/12 flex-col">
        {/* Header */}
        <div className="relative mb-8 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Career Path
            </h2>
          </div>

          <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text pb-2 text-3xl font-bold text-transparent lg:text-5xl dark:from-white dark:via-gray-200 dark:to-gray-300">
            How I Got Here
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground">
            A timeline of my professional and academic milestones.
          </p>

          <div className="absolute -bottom-4 left-0 h-0.5 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </section>
    </div>
  );
}
