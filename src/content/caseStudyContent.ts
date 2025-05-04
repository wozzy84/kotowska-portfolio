
export interface CaseStudySection {
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
    sliderSummary: string;
    images: CaseStudyImage[];
}

export interface CaseStudyImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
        "1_carrot": {
        tag: "Mobile App",
        title: "Carrotspot – UX Overhaul of a Developer-Built HR Platform",
        subtitle: "LUX MED Group – Leader in private health care services",
        description: "As the sole UX designer, I joined Carrotspot early in its development and worked across multiple iterations of the product. Despite the constraints of a developer-led architecture and limited resources, I incrementally improved usability, designed and tested new features, and introduced client-specific gamified UI elements to increase engagement. The project evolved significantly over time, and my long-term involvement helped stabilise the user experience and lay the groundwork for future transformation.",
        overview:{
            title: "Project Overview",
            description: "Carrotspot is a comprehensive platform built to manage HR operations, benefit distribution, and internal processes for large organisations. In its initial phase, it included a core application, an informational blog (Carrotspot LAB), and a promotional corporate website. I joined the team as the only UX designer, working closely with developers to gradually shape a more user-focused product from an existing technical framework"
        },
        challenge:{
            title: "The Challenge",
            description: "The platform was initially developed without UX input — its interface reflected a developer-oriented mindset, prioritising logic over usability. I couldn’t overhaul the system from scratch, so I approached the problem incrementally, identifying pain points and proposing user-friendly improvements. The product was being developed by a small team without a dedicated business analyst, meaning I often served as the link between users, tech, and business expectations."
        },
        approach: {
            title: "The Approach",
            description: "My approach was pragmatic and iterative. I began with a usability audit to identify issues, then prioritised changes that could be implemented with minimal disruption. I designed new features, mockups, and UI components tailored to the platform’s evolving needs. In one of the client-specific modules, I helped design an unusually creative engagement layer: a gamified, fantasy-themed training interface built around a floating island map, where users “visited” locations to complete learning tasks. It was a highly customised and imaginative feature — a sharp contrast to the otherwise conventional HR tooling."
        },
        solution: {
            title: "The Solution",
            description: "Through continuous collaboration with developers and stakeholders, I delivered a cohesive, more accessible UI while working within existing platform limitations. My input improved core usability, shaped product direction, and helped maintain visual consistency as the platform grew in complexity. As the product matured, my role expanded to cover broader UX strategy and cross-feature alignment." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "The result was a functional and uniquely engaging platform that evolved significantly over time, both in terms of user experience and product maturity. My involvement across multiple development cycles helped stabilise the platform’s foundation and positioned it for further growth. Eventually, the product was adopted and integrated by a major healthcare group, which marked the beginning of a new development phase under a new name and strategy — a story that continues in a separate project."
        },
        sliderSummary: "As the sole UX designer, I joined Carrotspot early in its development and worked across multiple iterations of the product. Despite the constraints of a developer-led architecture and limited resources, I incrementally improved usability, designed and tested new features, and introduced client-specific gamified UI elements to increase engagement. The project evolved significantly over time, and my long-term involvement helped stabilise the user experience and lay the groundwork for future transformation.",
        images: [
            {src: "/images/carrot_1.webp", alt: "Carrotspot Platform", width: 661, height: 400}, 
            {src: "/images/carrot_2.webp", alt: "Carrotspot Platform", width: 496, height: 400}, 
            {src: "/images/carrot_3.webp", alt: "Carrotspot Platform", width: 661, height: 400}, 
            {src: "/images/carrot_4.webp", alt: "Carrotspot Platform", width: 757, height: 400}, 
            {src: "/images/carrot_5.webp", alt: "Carrotspot Platform", width: 424, height: 400}, 
        ],
        
    },
     "2_luxmed": {
        tag: "Web Platform",
        title: "From Brand to System: Shaping LUX MED’s New Digital Experience",
        subtitle: "LUX MED Group – Leader in private health care services",
        description: "After Carrotspot was acquired and rebranded as LUX MED Benefity, I remained as the sole UX specialist, tasked with designing an entirely new design system for the platform. My role involved creating a scalable, brand-aligned system with comprehensive documentation — all while the product remained live and in daily use by major enterprise clients. The challenge was delivering a deep visual and functional transformation with minimal disruption to its users.",
        overview:{
            title: "Project Overview",
            description: "LUX MED Benefity is a benefit management and cafeteria platform serving employees of Poland’s largest corporations. Originally developed under the Carrotspot brand, the platform was acquired and repurposed by LUX MED, shifting its focus from broad HR operations to targeted benefits management. I stayed on through this transition as the sole UX designer. My primary responsibility was to design a completely new design system grounded in LUX MED’s corporate identity — a visual language previously used mostly in static marketing contexts, with little guidance for digital interfaces. This required translating the brand’s core principles into a consistent, functional UI language tailored for a complex, user-facing product. The new system needed to feel familiar to existing users while modernising the experience and ensuring long-term scalability. At the same time, I supported the newly formed development and analytics teams as the project grew into a more structured and collaborative environment."

        },
        challenge:{
            title: "The Challenge",
            description: "The shift from Carrotspot to LUX MED Benefity brought sweeping changes — a new name, new strategic focus, new team members, and a stricter alignment with a major healthcare brand. At the same time, the platform had to remain operational for its enterprise clients, which include some of the largest employers in the country. The main challenge was delivering a complete visual and functional overhaul without disrupting the user experience. I had to design a full design system and documentation layer from scratch, based on a corporate identity that wasn’t built for digital products. Additionally, we were migrating from an ad hoc, loosely documented workflow into a more structured ecosystem using tools like Jira and Confluence — which, for the first time, gave us clarity and consistency in how we collaborated."
        },
        approach: {
            title: "The Approach",
            description: "My first step was to interpret LUX MED’s corporate identity guidelines and shape them into scalable design principles for digital use. While the CVI provided some direction — including a designated digital typeface and general visual tone — it was primarily built for print and marketing. At the same time, there was an existing LUX MED platform for patients, which I treated as a secondary reference point to maintain brand cohesion. Navigating these two sources, I made deliberate design decisions to modernise and unify the interface while keeping the experience recognisable and grounded in the brand. I conducted a partial audit of the original Carrotspot interface to evaluate which elements could be retained or evolved. I then designed a Figma-based system architecture to cover foundations, UI components, and interface patterns. Throughout the process, I collaborated with developers, analysts, and QA to ensure alignment and shared ownership of the system."
        },
        solution: {
            title: "The Solution",
            description: "The result was a fully developed design system tailored to LUX MED Benefity — including visual foundations, reusable components, interface patterns, and an evolving documentation suite. The system was designed with accessibility and clarity in mind, while ensuring recognisability for existing users and future scalability for new modules. What I’m especially proud of is the documentation: it’s the most comprehensive visual guide I’ve produced to date. Beyond usage rules and specs, it outlines design logic, component rationale, and usage scenarios — something I’ve always wished to encounter more often in my own UX work. This foundation now serves both designers and developers as a shared language across the platform." 
        },
        outcomes:{
            title: "Outcomes and Takeaways",
            description: "The new design system brought visual and structural coherence to LUX MED Benefity, while respecting its legacy and user base. The transition happened without disrupting the platform’s operation — a critical requirement given the scale of its corporate clients. This project taught me the value of deep documentation, and how design systems can function as both strategic tools and cultural assets. Moving from a loose, reactive workflow to a structured, collaborative product environment was a defining shift, and one I’m proud to have supported from the inside out."
        },

        sliderSummary: "After Carrotspot was acquired and rebranded as LUX MED Benefity, I remained as the sole UX specialist, tasked with designing an entirely new design system for the platform. My role involved creating a scalable, brand-aligned system with comprehensive documentation — all while the product remained live and in daily use by major enterprise clients. The challenge was delivering a deep visual and functional transformation with minimal disruption to its users.", 

        images: [
               {src: "/images/luxmed01.webp", alt: "Luxmed Platform", width: 655, height: 400}, 
               {src: "/images/luxmed02.webp", alt: "Luxmed Platform", width: 655, height: 400}, 
               {src: "/images/luxmed03.webp", alt: "Luxmed Platform", width: 655, height: 400}, 
              
        ],
        
    },
    "3_aed": {
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
        sliderSummary: "I led the design of a life-saving app for AED accessibility, working with major stakeholders in the IT and pharmaceutical industries. The app focused on quick, intuitive navigation and first aid instructions, ultimately improving access to defibrillators. Despite challenges stemming from passionate yet non-technical stakeholders and shifting project goals, I successfully delivered a user-friendly solution. My role included conducting workshops, creating wireframes, and ensuring user testing with target audiences, demonstrating my ability to drive complex, high-stakes projects to completion.",
        images: [
            {src: "/images/aed_1.webp", alt: "AED Access App", width: 456, height: 400}, 
            {src: "/images/aed_2.webp", alt: "AED Access App", width: 624, height: 400},
            {src: "/images/aed_3.webp", alt: "AED Access App", width: 535, height: 400},
        ],
        
    },
    "4_workzone":  {
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
        sliderSummary: "As a UI/UX designer, I worked on KMD’s flagship WorkZone platform, an EIM solution for large organisations. My role spanned both maintenance and design improvements, including a transition to Fluent UI. Key challenges included limited user feedback and coordinating across diverse, international teams. I focused on user education, led design system improvements, and helped expand the product’s reach in new markets. This experience reinforced the importance of collaboration and face-to-face interaction in a complex, multi-team environment.",
        images: [
              {src: "/images/workzone_1.webp", alt: "WorkZone Platform", width: 456, height: 400}, 
              {src: "/images/workzone_2.webp", alt: "WorkZone Platform", width: 684, height: 400}, 
              {src: "/images/workzone_3.webp", alt: "WorkZone Platform", width: 891, height: 400}, 
              {src: "/images/workzone_4.webp", alt: "WorkZone Platform", width: 684, height: 400}, 
        ],
        
    },
   
    "5_sustainability":  {
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
        sliderSummary: "I helped Sustainable Brands modernise and consolidate their outdated, inconsistent system of multiple websites into a cohesive, user-friendly experience. The project involved navigating significant client resistance to change and unifying the work of different teams across many years. My role was to streamline the UX, improve the UI, and provide a more efficient, intuitive structure, ensuring consistency and a better user experience.",  
        images: [
             {src: "/images/sustainability_1.webp", alt: "Sustainable Brands", width: 655, height: 400}, 
             {src: "/images/sustainability_2.webp", alt: "Sustainable Brands", width: 643, height: 400}, 
             {src: "/images/sustainability_3.webp", alt: "Sustainable Brands", width: 643, height: 400}, 
             {src: "/images/sustainability_4.webp", alt: "Sustainable Brands", width: 643, height: 400}, 
             {src: "/images/sustainability_5.webp", alt: "Sustainable Brands", width: 456, height: 400}, 
             {src: "/images/sustainability_6.webp", alt: "Sustainable Brands", width: 643, height: 400}, 
        ],
    }
};