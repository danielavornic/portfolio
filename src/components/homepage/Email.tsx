const Email = () => (
  <aside className="fixed bottom-0 right-6 sm:right-10 lg:right-12 hidden sm:flex flex-col justify-center items-center">
    <a
      href="mailto:daniela.vornic@gmail.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Email"
      className="text-sm text-subtext0 hover:text-lavender hover:-translate-y-1 focus:text-mauve transition"
      style={{ writingMode: "vertical-lr" }}
    >
      daniela.vornic@gmail.com
    </a>
    <div className="mt-6 bg-subtext0 h-24 w-0.5" />
  </aside>
);
export default Email;
