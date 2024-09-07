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
        'px-3 py-2 rounded bg-secondary hover:bg-text text-text hover:text-secondary hover:border-secondary border border-secondary cursor-pointer duration-200' +
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
