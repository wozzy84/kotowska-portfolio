
export interface TestimonialContent {
    description: string;
    image: string;
    name: string;
    job: string;
}

export const testimonialsContent:TestimonialContent[] = [
    {
        description: "Ewa is a trustworthy person. She collaborated with me on several large advertising projects. I value her professionalism in preparing graphic materials; it was always very easy and efficient for us to determine what I and the client needed and what needed to be designed. I recommend working with Ewa to anyone who needs an independent, level-headed, and experienced graphic designer.",
        image: "/images/kopacki.webp",
        name: "-- Paweł Kopacki",
        job: "then Online Sales & Traffic Manager @ Burda Media Polska"
    },
        {
        description: "Working with Ewa was an absolute pleasure. She’s open-minded and always focused on delivering value from the end customer’s perspective. Ewa thinks outside the box and designs interfaces that provide a top-notch experience, even with complex technologies. Her work in the public sector, across diverse products and audiences, shows her versatility. What really sets her apart is her humility, easygoing nature, and loyalty. I highly recommend her!",
        image: "/images/brzezinski.webp",
        name: "-- Piotr Brzeziński",
        job: "then Head of Development @ KMD"
    },
            {
        description: "Ewa is always open to new ideas, and her creativity and attention to detail continually raise our standards. Her ability to combine aesthetics with functionality makes our project more intuitive and user-friendly.",
        image: "/images/telus.webp",
        name: "-- Wojciech Telus",
        job: "Team Leader @ LUX MED Benefity"
    }
]