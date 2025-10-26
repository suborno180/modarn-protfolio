import Image from "next/image";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// ক্লায়েন্টের ডেটা অনুযায়ী Information summary update
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "15+ Y.",
  },
  {
    id: 2,
    title: "Projects Managed",
    description: "100+",
  },
  {
    id: 3,
    title: "Countries",
    description: "3",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I&apos;m
            <span className="text-nowrap shrink-0 inline-block w-full text-picto-primary">
              Dinesh Fernando
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I&apos;m a Senior <span className="bg-highlight">Industrial Engineering Professional</span>{" "}
            with <span className="bg-highlight">15+ years</span> of experience in 
            apparel manufacturing across Sri Lanka, Vietnam, and Bangladesh. 
            I specialize in driving operational excellence through process optimization, 
            lean manufacturing, and strategic cost-reduction initiatives.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white hover:scale-105 transition-transform duration-300"
              href="mailto:amiliya177@gmail.com"
            >
              Contact Me
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-536/636 relative`}
      >
        <Image
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src="/images/person.png" // ক্লায়েন্টের ছবি ব্যবহার করুন
          alt="Dinesh S. Fernando - Industrial Engineering & Project Management Professional"
          width={536}
          height={636}
          priority
        />
      </div>
    </div>
  );
};

export default Introduction;