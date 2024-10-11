import HomeIcon from "/public/svgs/home.svg";
import CloseIcon from "/public/svgs/close.svg";
import PortfolioIcon from "/public/svgs/portfolio.svg";
import AboutIcon from "/public/svgs/about.svg";
import ServicesIcon from "/public/svgs/services.svg";
import TestimonialsIcon from "/public/svgs/testimonials.svg";
import ContactIcon from "/public/svgs/contact.svg";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`fixed pt-[72px] pl-[22px] z-10 top-0 left-0 h-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isOpen ? "min-w-[300px] md:min-w-[360px]" : ""}`}
      >
        <button onClick={onClose}>
          <CloseIcon className="w-6 h-6 left-[16px] top-[24px] absolute" />
        </button>
        <div className="left-[22px] top-[72px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <HomeIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Home
            </div>
          </div>
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <AboutIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              About
            </div>
          </div>
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <PortfolioIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Portfolio
            </div>
          </div>
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <ServicesIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Services
            </div>
          </div>
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <TestimonialsIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Testimonials
            </div>
          </div>
          <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
            <ContactIcon className="w-6 h-6 relative" />
            <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
              Contact
            </div>
          </div>
        </div>

        {/* <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              About
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Portfolio
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Services
            </Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="#" tabIndex={isOpen ? 0 : -1}>
              Contact
            </Link>
          </li>
        </ul> */}
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
    </>
  );
}

export default MobileDrawer;

// <div className="w-6 h-6 left-[16px] top-[24px] absolute" />
// <div className="h-80 left-[22px] top-[72px] absolute flex-col justify-start items-start gap-4 inline-flex">
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       Home
//     </div>
//   </div>
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       About
//     </div>
//   </div>
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       Portfolio
//     </div>
//   </div>
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       Services
//     </div>
//   </div>
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       Testimonials
//     </div>
//   </div>
//   <div className="self-stretch p-2 justify-start items-center gap-2 inline-flex">
//     <div className="w-6 h-6 relative" />
//     <div className="text-center text-[#1c1c1c] text-sm font-semibold font-['Inter'] leading-tight">
//       Contact
//     </div>
//   </div>
// </div>
