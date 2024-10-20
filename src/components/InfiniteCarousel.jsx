/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/Marquee";
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import q3 from "../assets/q3.jpg";
import q4 from "../assets/q4.jpg";
const images = [{ img: q1 }, { img: q2 }, { img: q3 }, { img: q4 }];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center ">
        <img className="rounded h-full overflow-clip" alt="" src={img} />
      </div>
    </figure>
  );
};

export function InfiniteCarousel() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
