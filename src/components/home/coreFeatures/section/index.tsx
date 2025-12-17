import React from "react";
import ContentCard from "./contentcard";
import ImageCard from "./imagecard";
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  content: any;
  render: number;
}

const Section = ({ content, render }: Props) => {
  const { sectionImages, ...rest } = content;
  const isTextSectionRight = render % 2 === 0;

  const { width } = useWindowSize();

  return (
    <div className="flex lg:flex-nowrap flex-wrap lg:gap-6 gap-10 justify-between items-center md:py-16 sm:py-10 py-8">
      {
        width > 1024
          ? isTextSectionRight ? (
            <>
              <ImageCard render={render} sectionImages={sectionImages} />
              <ContentCard render={render} content={rest} />
            </>
          ) : (
            <>
              <ContentCard render={render} content={rest} />
              <ImageCard render={render} sectionImages={sectionImages} />
            </>
          )
          : <>
            <ContentCard render={render} content={rest} />
            <ImageCard render={render} sectionImages={sectionImages} />
          </>
      }
    </div>
  );
};

export default Section;