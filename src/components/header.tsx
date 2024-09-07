export type HeaderProps = {
  headerText: string
  subHeaderText?: string
  text: {
    first: string
    second: string
    third: string
  }
  onClick?: {
    first: () => void
    second: () => void
    third: () => void
  }
}

const Header = ({ headerText, subHeaderText, text, onClick }: HeaderProps) => {
  return (
    <div className="flex flex-col bg-text text-background relative">
      <ul className="flex xl:text-2xl lg:text-base md:text-sm text-xs font-bold z-10">
        <button
          onClick={() => onClick?.first()}
          className={`flex-1 text-start py-2 ${onClick?.first ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {text.first}
        </button>
        <button
          onClick={() => onClick?.second()}
          className={`flex-2 text-center py-2 ${onClick?.second ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {text.second}
        </button>
        <button
          onClick={() => onClick?.third()}
          className={`flex-1 text-end py-2 ${onClick?.third ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {text.third}
        </button>
      </ul>
      <hr className="bg-background h-1" />
      <div className="w-max mx-auto font-extrabold">
        {subHeaderText && (
          <div>
            <div className="flex gap-4 mt-5 justify-between items-center">
              <h2 className="text-5xl">{subHeaderText}</h2>
              <hr className="bg-background h-1 flex-1" />
            </div>
          </div>
        )}
        <h2 className="text-center sm:text-9xl text-5xl">{headerText}</h2>
      </div>
    </div>
  )
}

export default Header
