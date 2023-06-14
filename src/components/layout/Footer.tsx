const Footer = () => {
  return (
    <footer className="mt-28 md:mt-40 lg:mt-60 2xl:mt-72 pb-8 mx-auto font-mono text-sm text-center text-subtext0">
      <p>
        Design inspired by{" "}
        <a
          href="https://v4.brittanychiang.com/"
          target="_blank"
          className="hover:text-lavender transition"
        >
          Brittany Chiang.
        </a>
      </p>
      <p>Built by Daniela Vornic &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
