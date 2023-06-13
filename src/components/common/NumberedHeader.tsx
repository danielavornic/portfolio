import cn from "classnames";

interface NumberedHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  number: number;
}

const NumberedHeader = ({ heading, number, className, ...props }: NumberedHeaderProps) => {
  const formattedNumber = number < 10 ? `0${number}` : number;

  return (
    <div className={cn("flex items-center w-full space-x-6 mb-10", className)} {...props}>
      <div className="flex items-baseline space-x-2">
        <span className="text-lavender text-lg sm:text-xl md:text-2xl font-mono font-bold">
          {formattedNumber}.
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text">{heading}</h2>
      </div>
      <div className="h-[1px] w-full flex-1 md:w-[240px] md:flex-initial lg:w-[320px] bg-subtext0 bg-opacity-40" />
    </div>
  );
};

export default NumberedHeader;
