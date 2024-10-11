import { TypewriterWords } from "@/components/ui/typewriter";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SparklesCore } from "@/components/ui/sparkles";

export default function AboutMe() {
  const words = ["  Hello!", " 안녕"," Bonjour"," 你好!", " Meow!", " வணக்கம்!", " Hola!", ' こんにちは。']

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="relative">
      <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full fixed inset-0 z-0"
          particleColor="#03dbfc"
        />
      <div className="flex flex-col justify-center min-h-screen z-10">
        <h1 className="text-7xl font-mono">
          <TypewriterWords words={words} />
        </h1>
        <br />
        <h4 className="text-3xl ml-2 font-sans">I'm Curteis</h4>
      </div>
      <Carousel items={cards} />
    </div>
  );
}


const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                This is a title that im too lazy to fill....
              </span>{" "}
              This is some placeholder text that im too lazy to fill....
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category:"",
    title: "2019",
    src:"/2019.JPG",
    content: <DummyContent />,
  },
  {
    category:"",
    title: "2020",
    src:"/2020.JPG",
    content: <DummyContent />,
  },
  {
    category:"",
    title: "2021",
    src:"/2021.JPG",
    content: <DummyContent />,
  },
 
  {
    category:"",
    title: "2022",
    src:"/2022.JPG",
    content: <DummyContent />,
  },
  {
    category:"",
    title: "2023",
    src:"/2023.JPG",
    content: <DummyContent />,
  },
  {
    category:"",
    title: "2024",
    src:"/2024.jpg",
    content: <DummyContent />,
  },
];