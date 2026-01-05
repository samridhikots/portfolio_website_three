import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const Timeline = ({
  data,
  highlightColor = "#4ade80",
  secondaryColor = "#06b6d4",
  lineWidth = 2,
  animate = true,
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  // Update height on mount & resize
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Detect active timeline item
  useEffect(() => {
    if (!animate) return;

    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline-entry");
      const viewportHeight = window.innerHeight;

      let closestIndex = null;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - viewportHeight / 2
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animate]);

  return (
    <div className="relative w-full px-4 py-8 lg:px-10" ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-entry flex justify-start pt-8 lg:gap-10 lg:pt-16 ${
              activeIndex === index ? "z-10" : "z-0"
            }`}
            initial={{ opacity: animate ? 0.5 : 1, y: animate ? 20 : 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: index * 0.1 },
            }}
            viewport={{ once: true, margin: "-100px 0px" }}
          >
            {/* LEFT SIDE */}
            <div className="sticky top-32 z-40 flex max-w-xs flex-col items-center self-start lg:w-full lg:max-w-sm lg:flex-row">
              {/* Timeline dot */}
              <motion.div
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full lg:left-3"
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  backgroundColor:
                    activeIndex === index
                      ? "rgba(156, 163, 175, 0.3)"
                      : "rgba(156, 163, 175, 0)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800">
                  {item.icon || null}
                </div>
              </motion.div>

              {/* Title (desktop) */}
              <motion.div
                className="hidden w-full lg:block lg:pl-20"
                animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-neutral-700 lg:text-3xl dark:text-neutral-300">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.date}
                  </p>
                )}
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full pr-4 pl-16 lg:pl-4">
              {/* Title (mobile) */}
              <div className="mb-4 block lg:hidden">
                <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.date}
                  </p>
                )}
              </div>

              {/* Content */}
              <motion.div
                animate={{ opacity: activeIndex === index ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
                className="prose prose-neutral dark:prose-invert max-w-none"
              >
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{ height: `${height}px`, width: `${lineWidth}px` }}
          className="absolute top-0 left-8 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 to-transparent dark:via-neutral-700 lg:left-8
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {animate && (
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
                width: `${lineWidth}px`,
                background: `linear-gradient(to top, ${highlightColor} 0%, ${secondaryColor} 50%, transparent 100%)`,
              }}
              className="absolute inset-x-0 top-0 rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};
