export default function Page() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center gap-10 backdrop-blur-sm">
      <h1 className="px-3 text-center text-4xl font-bold md:text-6xl">
        The start of the journey.
      </h1>
      <iframe
        src="https://www.youtube.com/embed/aBZE6FcD7qg?si=b90wLG6QMqPIWUHp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-[50.6vw] w-[90vw] md:h-[39.9vw] md:w-[71vw]"
      ></iframe>
    </div>
  );
}
