import dynamic from "next/dynamic";

const NumberedHeader = dynamic(() => import("@/components/common/NumberedHeader"));
const FeaturedProject = dynamic(() => import("@/components/homepage/FeaturedProject"));

const projects = [
  {
    title: "Născut în Moldova",
    description:
      "The landing page for the upcoming Născut în Moldova music festival. The website consists of page with the festival's information, from lineup to tickets. I've been constantly updating the website to ensure the marketing team has the latest information. Supabase was used for a promotional campaign where people could register.",
    image: "/images/nim.webp",
    link: "https://nim.md/",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Supabase"],
  },
  {
    title: "BR Films",
    description:
      "A portfolio website for BR Films, a film production company part of BRMG. The website features a landing page with the company's work. It uses Sanity CMS to manage the content, and GSAP for animations.",
    image: "/images/brfilms.webp",
    link: "https://brfilms.md/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "GSAP"],
  },
  {
    title: "Versus Artist",
    description:
      "A multilingual business website for the Versus Artist music label, part of BR Media Group (BRMG). It features information about the artists, producers, releases and merch store. Sanity CMS was used to manage the content, and the website is optimized for SEO.",
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
    title: "BRO Rent",
    description:
      "A multilingual website for BRO Rent, also subsidiary of BRMG, which features an e-commerce product catalog. The platform includes essential functionalities such as a shopping cart and email integration. To facilitate seamless updates to the product catalog, I also built a dashboard using React and Firebase.",
    image: "/images/brorent.webp",
    link: "https://brorent.md/",
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
