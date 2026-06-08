#import "@preview/basic-resume:0.2.9": *

#set list(marker: [--])

#let name = "Daniela Vornic"
#let location = "Chișinău, Moldova"
#let email = "contact@danielavornic.com"
#let github = "github.com/danielavornic"
#let linkedin = "linkedin.com/in/danielavornic"
#let phone = "+373 68576855"
#let personal-site = "danielavornic.com"

#show: resume.with(
  author: name,
  email: email,
  github: github,
  // linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#000",
  font: "New Computer Modern Math",
  paper: "a4",
  author-position: center,
  personal-info-position: left,
)

#show heading.where(level: 2): it => [
  #if it.body == [Summary] {
  pad(top: 0pt, bottom: -24pt, [#smallcaps(it.body)])
    image("cat-divider.svg", width: 100%)
  } else {
  pad(top: 0pt, bottom: -10pt, [#smallcaps(it.body)])
    line(length: 100%, stroke: 1pt)
  }
]
#show heading.where(level: 2): set block(above: 16pt, below: 6pt)

== Summary

Full-stack engineer with 4 years of experience building web platforms.
Primarly focused on front-end development, I also have experience in system
design, back-end development, databases, and deployment. Worked on B2B SaaS products and custom software projects.

/*
* Lines that start with == are formatted into section headings
* You can use the specific formatting functions if needed
* The following formatting functions are listed below
* #edu(dates: "", degree: "", gpa: "", institution: "", location: "", consistent: false)
* #work(company: "", dates: "", location: "", title: "")
* #project(dates: "", name: "", role: "", url: "")
* certificates(name: "", issuer: "", url: "", date: "")
* #extracurriculars(activity: "", dates: "")
* There are also the following generic functions that don't apply any formatting
* #generic-two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "")
* #generic-one-by-two(left: "", right: "")
*/

== Education

#edu(
  institution: "Technical University of Moldova",
  location: "Chișinău, Moldova",
  dates: dates-helper(start-date: "Sep 2022", end-date: "Expected July 2026"),
  degree: "Bachelor of Science, English-taught Honours Programme in Software Engineering",

  // Uncomment the line below if you want edu formatting to be consistent with everything else
  consistent: true
)
- Rector's List (Top 1% of University)
- Relevant Coursework: Web Programming, Distributed Systems, Databases, Requirements Engineering

== Work Experience

#work(
  title: "Freelance Full-stack Engineer",
  location: "Chișinău, Moldova",
  company: "Self-employed",
  dates: dates-helper(start-date: "Oct 2025", end-date: "Present"),
)
- Architected and delivered a geospatial web platform used by the National Archaeological Agency of Moldova to digitize and manage a register of 11,000+ archaeological sites
// - Served as the sole developer, responsible for requirements gathering, system design, implementation, deployment, and maintenance using React, NestJS, PostGIS, and GeoServer
- Leading front-end development of an ERP/LMS platform for impact Academies,
  shaping user workflows and contributing to deployment processes

#work(
  title: "Front-end Developer",
  location: "Chișinău, Moldova",
  company: "Lixium",
  dates: dates-helper(start-date: "May 2024", end-date: "Oct 2025"),
)
- Owned front-end of 2 production B2B SaaS platforms for logistics fleet management and truck
  repair operations which serve multi-shop operators. Shaped architecture decisions and drove refactoring efforts.
- Designed and built a dental tourism platform in Next.js (patient-facing and doctor-facing)

// #work(
//   title: "Front-end Developer",
//   location: "Chișinău, Moldova",
//   company: "IXOBIT LTD",
//   dates: dates-helper(start-date: "Sep 2023", end-date: "Mar 2024"),
// )
// - Built e-commerce websites and landing pages for international and local companies using Next.js, built-in CMSs and Shopify
// - Implemented new features for older projects in React


#work(
  title: "Front-end Developer",
  location: "Chișinău, Moldova",
  company: "EBS Integrator",
  dates: dates-helper(start-date: "May 2022", end-date: "May 2023"),
)
- Developed and shipped features across 4 production applications, including
  large-scale CMS and CRM systems, focusing on improving user experience and
  accessibility
- Audited and improved Lighthouse performance and SEO scores across marketing pages
- Built reusable Storybook components for the internal React UI library shared across 2 production applications
// - Assisted in web performance optimization and accessibility improvements

#work(
  title: "Freelance Full-stack Engineer (Part-time)",
  location: "Chișinău, Moldova",
  company: "BR Media Group",
  dates: dates-helper(start-date: "Jun 2021", end-date: "Present"),
)
-  Served as the primary technical owner of 7+ web properties for a Moldovan media group, including technology selection, hosting, and third-party integrations
- Integrated Shopify, local payment gateways, shipping providers, and ticketing systems into 2 e-commerce platforms
// - Generated 140k impressions and 49k clicks for the Născut în Moldova festival website through an SEO-optimized React implementation
  
// == Awards
//
// #certificates(
//   name: "1st Place, TechBridge Hackathon",
//   issuer: "Ministry of Research (Romania) & Electronic Governance Agency (Moldova)",
//   date: "May 2023",
// )
//
// #certificates(
//   name: "1st Place, ESN Hackathon",
//   issuer: "ESN Moldova",
//   date: "Nov 2023",
// )
//
// #certificates(
//   name: "1st Place, XMas FAF Hackathon",
//   issuer: "FAF NGO",
//   date: "Dec 2022",
// )
//
// #certificates(
//   name: "1st Place, C/C++ Algorithm Programming Contest",
//   issuer: "Tekwill",
//   date: "Jun 2022",
// )

== Organizations

#extracurriculars(
  activity: "Sigmoid R&D",
  dates: dates-helper(start-date: "Mar 2023", end-date: "Present"),
)

- Building a custom learning platform for the organization's courses as the lead
  front-end developer and DevOps engineer
- Mentored new members through a 5-month ML/data science internship 
- Contributed to the events coordinated by the organization, including a
  university hackathon

// #certificates(
//   name: "OSCP",
//   issuer: "Offensive Security",
//   // url: "",
//   date: "Oct 2024",
// )
//

== Technical Skills
- *Languages*: TypeScript, Python, HTML, SCSS
- *Front-end*: React, Next.js, Tailwind CSS, Tanstack Query, Framer Motion
- *Back-end*: Node.js, NestJS, GraphQL
- *Databases*: PostgreSQL, PostGIS, MongoDB, Neo4j
- *Tools and Platforms*: Git, GitHub Actions, Docker, Linux, Vim

// == Soft Skills
// Problem-solving | Collaboration | Attention to Detail | Self-learning
// | Flexibility
//

== Languages 
*Romanian* – Native | *English* – C2 | *Russian* – Intermediate (Passive)
