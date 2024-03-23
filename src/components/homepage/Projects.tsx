import dynamic from "next/dynamic";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));
const FeaturedProject = dynamic(() => import("@/components/homepage/FeaturedProject"));

const projects = [
  {
    title: "Versus Artist",
    description:
      "A multilingual business website for the Versus Artist music label, part of BRMG. It features information about the artists, producers, releases and merch store. Sanity CMS was used to manage the content, and the website is optimized for SEO.",
    image: "/images/versus.webp",
    link: "https://versusartist.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
  },
  {
    title: "Elven Springs",
    description:
      "A showcase website for the upcoming products of Elven Springs, a brand that sells energy drinks. Using GSAP animations, I created a visually appealing platform that showcases the products and their benefits. The content is managed through the Shopify Storefront API.",
    image: "/images/elven.webp",
    link: "https://elven-springs.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API", "GSAP"],
  },
  {
    title: "BR Equipment Rental",
    description:
      "A multilingual website for BR Rental, subsidiary of BR Media Group, which features an e-commerce product catalog. The platform includes essential functionalities such as a shopping cart and email integration. To facilitate seamless updates to the product catalog, I also built a dashboard using React and Firebase.",
    image: "/images/brrental.webp",
    link: "https://rental.brmg.md/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Google Scripts", "i18n"],
  },
  {
    title: "Fabella",
    description:
      "An e-commerce website for Fabella, a skincare brand. The platform features a landing page, product catalog and shopping cart. As a freelance project, I worked closely with the client to ensure the website met their requirements and expectations.",
    image: "/images/fabella.webp",
    link: "https://fabella.md/",
    tech: ["WordPress", "Elementor", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-28 md:mt-32 lg:mt-40 xl:mt-52">
      <NumberedHeader number={2} heading="Projects" />

      <div className="space-y-8 md:space-y-10 lg:space-y-16 xl:space-y-20">
        {projects.map((project, index) => (
          <FeaturedProject key={index} project={project} dir={index % 2 ? "right" : "left"} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
