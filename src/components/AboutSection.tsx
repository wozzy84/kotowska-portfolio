import AboutCard from "./AboutCard";
import AboutSectionStyle from "./AboutSectionStyle.module.css";
import classNames from "classnames";
import SectionHeader from "./SectionHeader";

const abouCardSections = [
  {
    title: "background",
    description:
      "My background in social sciences and conflict resolution gives me a deep understanding of human behaviour and cognitive processes. Also, it allows me to navigate challenges of the design and development process, ensuring smooth and effective collaboration.",
  },
  {
    title: "ethics",
    description:
      "I'm a firm believer in collaboration and transparency, working closely with clients and stakeholders to ensure that every project not only meets but exceeds expectations.",
  },
  {
    title: "approach",
    description:
      "My approach to design is rooted in empathy, curiosity, and continuous learning. I immerse myself in understanding the user journey, exploring new design trends, and experimenting with innovative tools and techniques to push the boundaries of what's possible.",
  },
  {
    title: "life",
    description:
      "When I'm not immersed in pixels and wireframes, you can find me biking, indulging in my love for DIY, or diving into a good horror book. I believe that life is about balance, and finding inspiration beyond the screen fuels my creativity and keeps me grounded.",
  },
];

const { aboutSection } = AboutSectionStyle;

const AboutSection = () => {
  return (
    <section
      className={classNames(
        " flex justify-center flex-col items-center mx-auto pb-16",
        aboutSection
      )}
    >
      <SectionHeader
        sectionName="About"
        title="Hi there!"
        description=" My mission is to bridge the gap between users and technology by
            rising awareness of user-centred approach and designing interfaces
            that are not only beautiful but also highly functional"
      ></SectionHeader>
      <div className="container max-w-screen-xl px-4 justify-center flex flex-wrap items-start gap-6 text-start">
        {abouCardSections.map((section, index) => (
          <AboutCard
            key={section.title}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
