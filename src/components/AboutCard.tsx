import classNames from "classnames";
import AboutCardStyle from "./AboutCardStyle.module.css";

interface AboutCardProps {
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <div
      className={classNames(
        "max-w-[480px] self-stretch p-6 flex-col justify-start items-start gap-4 inline-flex",
        AboutCardStyle.aboutCard
      )}
    >
      <div className="flex-col justify-start items-start gap-1 flex">
        <h3 className={AboutCardStyle.aboutMy}>About my</h3>
        <h2 className={AboutCardStyle.aboutTitle}>{title}</h2>
      </div>
      <p className={AboutCardStyle.aboutDescription}>{description}</p>
    </div>
  );
};

export default AboutCard;
