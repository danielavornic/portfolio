import { Link } from "react-scroll";
import cn from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  size?: "sm" | "md" | "lg";
  as?: "button" | "a" | "scrollLink";
  href?: string;
  target?: string;
}

const Button = ({
  size = "md",
  as = "button",
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  const classNames = cn(
    "font-mono transition-all cursor-pointer duration-200 hover:transform bg-transparent text-lavender border border-lavender hover:shadow-lavender hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-btn",
    {
      "px-4 py-2 text-sm ": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className,
  );

  if (as === "scrollLink") {
    return (
      <Link
        to={href || ""}
        href={`#${href}`}
        activeClass="text-lavender"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={classNames}
      >
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a className={classNames} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
