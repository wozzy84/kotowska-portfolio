interface CaseStudySection {
    title: string;
    description: string;
}

export interface CaseStudyContent {
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    overview: CaseStudySection;
    challenge: CaseStudySection;
    approach: CaseStudySection;
    solution: CaseStudySection;
    outcomes: CaseStudySection;
    images: string[];
}


export const caseStudyContent: Record<string, CaseStudyContent> = {
    "1_aed": {
        tag: "Mobile App",
        title: "Designing an AED Access App: Life-Saving Simplicity",
        subtitle: "KMD (Major IT Solutions Provider) & Polpharma (Poland's Largest Pharmaceutical Manufacturer)",
        description: "I led the design of a life-saving app for AED accessibility, working with major stakeholders in the IT and pharmaceutical industries. The app focused on quick, intuitive navigation and first aid instructions, ultimately improving access to defibrillators. Despite challenges stemming from passionate yet non-technical stakeholders and shifting project goals, I successfully delivered a user-friendly solution. My role included conducting workshops, creating wireframes, and ensuring user testing with target audiences, demonstrating my ability to drive complex, high-stakes projects to completion.",
        overview:{
            title: "Project Overview",
            description: "This project centred around the creation of a mobile app designed to save lives by helping people access Automated External Defibrillators (AEDs) faster and offering guided first aid. My role as the sole designer involved collaborating with developers from one company and stakeholders from another, navigating both technical and non-technical challenges. The end goal was to create an intuitive, user-friendly app that provided essential guidance during critical moments while also fostering community involvement."
        },
        challenge:{
            title: "The Challenge",
            description: "The project posed a unique challenge due to the collaboration between two distinct parties with different visions and competencies. KMD, an IT powerhouse, had the technical expertise, while Polpharma, a pharmaceutical giant, was deeply invested in the humanitarian aspect of the app. The project owner’s passion for saving lives, while commendable, led to an initial lack of clear functionality and an evolving feature set that needed significant refinement. Managing expectations and aligning both sides while keeping the user experience simple and effective was a key hurdle."
        },
        approach: {
            title: "The Approach",
            description: "Given the complexity of the stakeholders' needs, I organised numerous live workshops, using low-tech tools like whiteboards and sketches to bridge the technical gap for non-digital stakeholders. This collaborative process helped gather essential requirements, clarify the app's goals, and most importantly, define which features truly mattered. I spent considerable time simplifying the app’s structure, stripping away unnecessary functions, and ensuring it remained intuitive under high-pressure circumstances. Once wireframes were established, I carried out thorough consultations with the app’s target audience to confirm the usability and effectiveness of the design."
        },
        solution: {
            title: "The Solution",
            description: "The final solution was a clear, easy-to-use mobile app that mapped AED locations, provided detailed descriptions for finding the devices, and offered step-by-step instructions on first aid procedures. I opted for soothing colours and personally created illustrations for the instructional segments to reduce cognitive load. My focus was on ensuring that users could quickly find help and perform essential first aid without feeling overwhelmed, minimising distractions during emergency situations." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "The app, while delayed due to changes in ownership, was eventually launched—though not in the form I initially designed. Nonetheless, my contribution ensured the foundation was solid, user-focused, and built to handle the high-stakes nature of the task. This project underscored the importance of balancing stakeholder expectations, simplifying complex problems, and maintaining a clear focus on user needs, especially when lives are at stake. It also highlighted my adaptability and communication skills in managing a project with passionate but non-technical stakeholders."
        },
        images: ["aed_1.jpg", "aed_2.jpg", "aed_3.jpg"],
        
    },
    "2_workzone":  {
        tag: "Cross-platform",
        title: "Enhancing WorkZone: User-Centric Design for KMD's EIM Platform",
        subtitle: "KMD - Major IT Solutions Provider",
        description: "As a UI/UX designer, I worked on KMD’s flagship WorkZone platform, an EIM solution for large organisations. My role spanned both maintenance and design improvements, including a transition to Fluent UI. Key challenges included limited user feedback and coordinating across diverse, international teams. I focused on user education, led design system improvements, and helped expand the product’s reach in new markets. This experience reinforced the importance of collaboration and face-to-face interaction in a complex, multi-team environment.",
        overview:{
            title: "Project Overview",
            description: "KMD WorkZone is an Enterprise Information Management (EIM) platform designed to streamline workflows and case management in large, complex organisations, including private companies and government bodies from central to local levels. Developed by multiple teams across different countries, it’s a high-stakes, multi-faceted product vital to KMD's overall portfolio."
        },
        challenge:{
            title: "The Challenge",
            description: "The project posed unique challenges, mainly due to its scale and the international, multi-team collaboration involved. One of the most difficult aspects was obtaining consistent user feedback, as the clients were primarily Danish governmental organisations – busy professionals who often lacked time for in-depth research or feedback sessions. Another challenge was working in a dispersed environment, where various teams across different countries had their own goals, working styles, and timelines."
        },
        approach: {
            title: "The Approach",
            description: "To make the project successful, I took a hands-on approach. I frequently travelled between KMD’s offices across Europe, conducting workshops and training sessions to foster better collaboration and raise awareness about the importance of user-centric design. I also worked on-site with development teams to ensure smooth integration of design updates. Education became a key component of my role – I hosted a series of lectures to help both developers and stakeholders understand how user experience could enhance the product’s value."
        },
        solution: {
            title: "The Solution",
            description: "During my five years working on the project, I focused on two key aspects: maintaining the platform’s existing features and improving the design direction. I worked on all layers of the system, including the desktop user interface, native mobile apps, and MS Office add-ins. Initially, I helped refine the custom design system built on a proprietary framework, before moving on to lead the transition to Fluent UI – a complete redesign of the platform's visual and interaction logic. This required careful consideration of both design consistency and ease of use, balancing the legacy framework with the modern UI standards." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "By the end of my engagement, WorkZone had gained greater prominence within KMD’s product portfolio, expanding into new markets and countries. The design improvements I led contributed to enhanced user experiences, better integration across platforms, and a more cohesive design system. Personally, I learned the value of frequent face-to-face interactions in fostering collaboration and building strong organisational culture. Despite the challenges, the international scope of the project taught me to appreciate diverse perspectives, which enriched my approach to problem-solving and design."
        },
        images: [],
        
    },
    "3_luxmed": {
        tag: "Web Platform",
        title: "Carrotspot – HR Operations Platform for LUX MED Group",
        subtitle: "LUX MED Group – Leader in private health care services",
        description: "As a sole UX designer, I joined the Carrotspot project at its early stage and was responsible for designing an engaging UI for a complex HR platform. Despite the constraints of an existing developer-centric framework, I incrementally optimised usability, designed new features, and gamified key elements. After LUX MED acquired the platform, I redesigned the UI to align with their corporate identity and tackled significant market-specific adaptations. The most challenging aspects were working in a small team with minimal resources, lack of business analysis, and overcoming inherited usability issues. Through hard work, creativity, and persistence, I delivered a highly functional product ready for the next phase of growth.",
        overview:{
            title: "Project Overview",
            description: "Carrotspot is a comprehensive platform designed to manage complex HR operations, benefit distribution, and process optimization. Alongside the core platform, it also features Carrotspot LAB, a specialized blog for knowledge sharing, and a corporate website to promote the product. I joined the project as the sole UX designer when the product was in its infancy, tasked with transforming an initial framework into a user-friendly and visually appealing system."
        },
        challenge:{
            title: "The Challenge",
            description: "When I joined the team, the product’s usability was far from ideal, having been entirely designed by developers with minimal focus on user experience. My role was to create an engaging, intuitive UI for a platform that already existed but had considerable gaps in usability. I couldn’t overhaul the system in one go, so I had to work incrementally, making improvements where possible while working around existing constraints. Additionally, the project was being developed by a very small team, and there was no dedicated business analyst. As a result, complex features were often built with limited understanding from both the business and development sides, leaving me to bridge the gap between what was built and what was actually needed."
        },
        approach: {
            title: "The Approach",
            description: "My approach was to be pragmatic and patient. I started by auditing the platform, identifying usability issues, and prioritizing areas that could be improved without disrupting the overall system. I created prototypes and mockups to visualize how new features and improvements could be seamlessly integrated into the platform. For new features, I designed UI components that aligned with the platform's growing needs while keeping the user experience as intuitive as possible. One of the more creative aspects was the development of a fantasy-themed UI where navigation took the form of a map of a fantastic world. Achievements and interactions were gamified, inspired by classic RPG games, making the platform not only functional but also engaging and fun for the users."
        },
        solution: {
            title: "The Solution",
            description: "Through numerous iterations, I delivered a refined and cohesive UI that worked within the platform's existing technical constraints. My designs improved the overall usability and addressed many of the early design flaws. When LUX MED acquired the platform, I was tasked with adapting the system to a new corporate visual identity and modifying it to fit market-specific needs. This required a complete redesign of the UI to ensure it aligned with LUX MED’s branding guidelines, as well as further adjustments to meet the expectations of the health care sector." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "The result was a robust platform that not only met the business needs but also provided an enjoyable experience for its users. The gamification aspect of the platform became a unique selling point, making HR operations more engaging. After LUX MED’s acquisition, the platform successfully transitioned into the healthcare market with a clean and professional interface that reflected their brand. The project pushed me to think creatively while dealing with real-world constraints like existing frameworks, limited resources, and a lack of upfront analysis. Ultimately, I learned that patience, clear communication, and a relentless focus on the user experience can overcome even the most chaotic environments."
        },
        images: [],
        
    },
    "4_sustainability":  {
        tag: "Website",
        title: "Unifying a Complex Website System for Sustainable Brands",
        subtitle: "Sustainable Brands - Public Benefit Corporation",
        description: "I helped Sustainable Brands modernise and consolidate their outdated, inconsistent system of multiple websites into a cohesive, user-friendly experience. The project involved navigating significant client resistance to change and unifying the work of different teams across many years. My role was to streamline the UX, improve the UI, and provide a more efficient, intuitive structure, ensuring consistency and a better user experience.",
        overview:{
            title: "Project Overview",
            description: "Sustainable Brands’ website ecosystem had grown organically over many years, resulting in a scattered, inconsistent collection of sites serving different functions: public-facing information, internal user platforms, and conference management tools. My task was to modernise the user experience by merging these separate systems into a single, cohesive, and user-friendly digital platform."
        },
        challenge:{
            title: "The Challenge",
            description: "The project’s complexity lay in the website’s fragmented architecture, which was developed by multiple teams over time without a unified vision. The site’s design, navigation, and functionality varied significantly across different sections. Adding to the challenge was the internal dynamics at SB: a flat, democratic decision-making process meant every change required extensive discussions and negotiations. Additionally, the team, many of whom had been working on the site for years, were resistant to altering the familiar yet outdated systems in place. To make matters more complicated, communication was remote, spanning different time zones."
        },
        approach: {
            title: "The Approach",
            description: "I began by mapping out the existing system through wireframes, identifying redundancies and areas for improvement. This involved extensive research, interviews, and documentation to understand the client’s needs and challenges. With this groundwork, I proposed a streamlined structure that improved information architecture, simplified navigation, and unified the user experience across the public and internal-facing segments of the site. My approach was incremental, introducing small changes that aligned with modern UX/UI standards while respecting the team’s familiarity with the old system."
        },
        solution: {
            title: "The Solution",
            description: "The final solution was a modern, user-friendly platform that combined all the fragmented sections into one cohesive system. By simplifying navigation, improving the site’s hierarchy, and implementing best practices in UX, I was able to create a much more intuitive and visually appealing experience. The new design not only enhanced usability but also reflected Sustainable Brands’ mission and values in a more consistent and professional way." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "This project was a balancing act between innovation and sensitivity to the client’s comfort zone. Despite initial resistance, the new design proved highly effective, leading to smoother user flows and a more efficient system. The project reaffirmed my belief in the power of persistence, communication, and incremental change when dealing with large, legacy systems. Most importantly, it showcased my ability to manage complex projects involving multiple stakeholders, negotiate change, and deliver a product that both meets the client's needs and significantly improves the user experience."
        },
        images: [],
    }
};