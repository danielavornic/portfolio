import dynamic from "next/dynamic";

const Button = dynamic(() => import("@/components/common/Button"), { ssr: false });

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-center mx-auto max-w-sm md:max-w-lg mt-28 md:mt-32 lg:mt-40 xl:mt-52 "
    >
      <p className="text-lavender sm:text-lg font-mono mb-4">03. What&apos;s next?</p>
      <h2 className="font-bold text-text text-2xl sm:text-3xl md:text-4xl">Get In Touch</h2>

      <p className="my-10 text-subtext0">
        I&apos;m actively seeking new opportunities, and I welcome any inquiries. Feel free to reach
        out to me via email, as my inbox is always open. Whether you have a question or want to
        discuss a potential collaboration, I will make every effort to respond promptly.
      </p>

      <Button
        as="a"
        href="mailto:daniela.vornic@gmail.com"
        target="_blank"
        className="w-fit block mx-auto"
      >
        Say Hello
      </Button>
    </section>
  );
};

export default Contact;
