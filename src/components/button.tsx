const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <button
      className={
        'md:px-3 md:py-2 px-2 py-1 md:text-base sm:text-sm text-xs rounded bg-secondary hover:bg-text text-text hover:text-secondary hover:border-secondary border border-secondary cursor-pointer duration-200' +
        ' ' +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
