import AboutSetionStyle from "./AboutSectionStyle.module.css";
import classNames from "classnames";

const AboutSection = () => {
  return (
    <section
      className={classNames(
        "flex justify-center items-center mx-auto",
        AboutSetionStyle.aboutSection
      )}
    >
      <div className="container mx-auto max-w-screen-xl flex flex-col justify-center items-center  px-4 pb-12 gap-1 my-16 text-center">
        <div className="self-stretch text-center text-[#555cf3] text-xs font-bold font-['Inter'] uppercase leading-[18px]">
          ABOUT
        </div>
        <div className="self-stretch text-center text-[#1c1c1c] text-4xl font-bold font-['Inter'] leading-10">
          Hi there!
        </div>
        <div className="pt-4 justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-[#5f6367] text-base font-medium font-['Inter'] leading-tight max-w-[890px]">
            My mission is to bridge the gap between users and technology by
            rising awareness of user-centred approach and designing interfaces
            that are not only beautiful but also highly functional
          </div>
        </div>

        <div className="h-[530px] px-4 justify-center flex flex-wrap items-start gap-6 mt-12 mb-16 text-start">
          <div className="w-[480px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-[#1c1c1c] text-lg font-semibold font-['Inter'] leading-normal">
                About my{" "}
              </div>
              <div className="text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">
                background
              </div>
            </div>
            <div className="self-stretch text-[#5f6367] text-base font-normal font-['Inter'] leading-normal">
              My background in social sciences and conflict resolution gives me
              a deep understanding of human behaviour and cognitive processes.
              Also, it allows me to navigate challenges of the design and
              development process, ensuring smooth and effective collaboration.
            </div>
          </div>
          <div className="w-[480px] self-stretch p-6 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-[#1c1c1c] text-lg font-semibold font-['Inter'] leading-normal">
                About my{" "}
              </div>
              <div className="text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">
                ethics
              </div>
            </div>
            <div className="self-stretch text-[#5f6367] text-base font-normal font-['Inter'] leading-normal">
              I'm a firm believer in collaboration and transparency, working
              closely with clients and stakeholders to ensure that every project
              not only meets but exceeds expectations.
            </div>
          </div>
          <div className="w-[480px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-[#1c1c1c] text-lg font-semibold font-['Inter'] leading-normal">
                About my{" "}
              </div>
              <div className="text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">
                approach
              </div>
            </div>
            <div className="self-stretch text-[#5f6367] text-base font-normal font-['Inter'] leading-normal">
              My approach to design is rooted in empathy, curiosity, and
              continuous learning. I immerse myself in understanding the user
              journey, exploring new design trends, and experimenting with
              innovative tools and techniques to push the boundaries of what's
              possible.{" "}
            </div>
          </div>
          <div className="w-[480px] p-6 bg-white rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-[#1c1c1c] text-lg font-semibold font-['Inter'] leading-normal">
                About my{" "}
              </div>
              <div className="text-[#1c1c1c] text-[32px] font-bold font-['Inter'] leading-9">
                life
              </div>
            </div>
            <div className="self-stretch text-[#5f6367] text-base font-normal font-['Inter'] leading-normal">
              When I'm not immersed in pixels and wireframes, you can find me
              biking, indulging in my love for DIY, or diving into a good horror
              book. I believe that life is about balance, and finding
              inspiration beyond the screen fuels my creativity and keeps me
              grounded.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
