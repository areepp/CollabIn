import { AnimatePresence } from 'framer-motion'
import { RevealDiv } from './reveal-animation'

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
  finished?: string | boolean
}

const Header = ({
  headerText,
  subHeaderText,
  text,
  onClick,
  finished,
}: HeaderProps) => {
  return (
    <AnimatePresence>
      <div className="flex flex-col bg-text text-background relative">
        <ul className="flex xl:text-2xl lg:text-base text-sm font-bold z-10">
          <button
            onClick={() => {
              onClick?.first()
            }}
            className={`flex-1 text-start py-2 ${onClick?.first ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {text.first}
          </button>
          <button
            onClick={() => {
              onClick?.second()
            }}
            className={`flex-2 text-center py-2 ${onClick?.second ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {text.second}
          </button>
          <button
            onClick={() => {
              onClick?.third()
            }}
            className={`flex-1 text-end py-2 ${onClick?.third ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {text.third}
          </button>
        </ul>

        <hr className="bg-background h-1" />
        <RevealDiv
          key={headerText}
          className="w-max mx-auto font-extrabold mt-2"
        >
          {subHeaderText && (
            <div>
              <div className="flex sm:gap-4 gap-1 md:mt-3 justify-between items-center">
                <h2 className="md:text-5xl sm:text-3xl text-lg">
                  {subHeaderText}
                </h2>
                <hr className="bg-background sm:h-1 h-0.5 flex-1" />
              </div>
            </div>
          )}

          <h2 className="text-center xl:text-9xl md:text-7xl sm:text-6xl text-3xl mb-2">
            {headerText}
          </h2>
          {finished && (
            <p className="text-end w-full md:text-xl text-sm">{finished}</p>
          )}
        </RevealDiv>
      </div>
    </AnimatePresence>
  )
}

export default Header
