const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={
        'px-3 py-2 rounded bg-secondary hover:bg-text text-text hover:text-secondary hover:border-secondary border border-secondary cursor-pointer duration-200' +
        ' ' +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
