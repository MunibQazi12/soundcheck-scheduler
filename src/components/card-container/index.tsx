type CardContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={"h-full overflow-y-auto bg-white scrollbar-hide"}>
      <div className={`w-full ${className}`}>{children}</div>
    </div>
  );
};

export default CardContainer;
