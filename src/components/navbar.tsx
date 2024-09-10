import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  {
    title: 'HOMEPAGE',
    href: '/',
  },
  {
    title: 'PROJECTS',
    href: '/projects',
  },
  {
    title: 'MY PROJECTS',
    href: '/my-projects',
  },
  {
    title: 'BOOKMARKS',
    href: '/bookmarks',
  },
]

const MENU_CONTAINER_VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const LINK_VARIANTS = {
  initial: {
    y: '10vh',
  },
  animate: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
    },
  },
}

const LINK_WRAPPER_VARIANTS = {
  initial: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
}

type MenuProps = {
  isMenuOpen: boolean
}

type MenuButtonProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuButton = ({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) => {
  const variant = isMenuOpen ? 'opened' : 'closed'

  const WIDTH = 24
  const HEIGHT = 24
  const UNIT_HEIGHT = 5
  const UNIT_WIDTH = 4

  const TOP_VARIANTS = {
    closed: {
      rotate: 0,
      translateY: 0,
      stroke: '#e4e4e7',
    },
    opened: {
      rotate: 45,
      translateY: 2,
      stroke: '#129092',
    },
  }
  const CENTER_VARIANTS = {
    closed: {
      opacity: 1,
      stroke: '#e4e4e7',
    },
    opened: {
      opacity: 0,
      stroke: '#129092',
    },
  }
  const BOTTOM_VARIANTS = {
    closed: {
      rotate: 0,
      translateY: 0,
      stroke: '#e4e4e7',
    },
    opened: {
      rotate: -45,
      translateY: -2,
      stroke: '#129092',
    },
  }

  const LINE_PROPS = {
    strokeWidth: 2.5,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: {
      duration: 0.3,
    },
  }

  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <motion.svg
        viewBox={`0 0 ${UNIT_WIDTH} ${UNIT_HEIGHT}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={WIDTH}
        height={HEIGHT}
        aria-label="toggle menu"
      >
        <motion.line
          x1="0"
          x2={UNIT_WIDTH}
          y1="0"
          y2="0"
          variants={TOP_VARIANTS}
          {...LINE_PROPS}
        />
        <motion.line
          x1="0"
          x2={UNIT_WIDTH}
          y1="2"
          y2="2"
          variants={CENTER_VARIANTS}
          {...LINE_PROPS}
        />
        <motion.line
          x1="0"
          x2={UNIT_WIDTH}
          y1="4"
          y2="4"
          variants={BOTTOM_VARIANTS}
          {...LINE_PROPS}
        />
      </motion.svg>
    </button>
  )
}

const Menu = ({ isMenuOpen }: MenuProps) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          variants={MENU_CONTAINER_VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 h-screen w-screen bg-accent pt-[150px] z-10 bg-background"
        >
          <motion.nav
            variants={LINK_WRAPPER_VARIANTS}
            initial="initial"
            animate="animate"
            className="flex bg-background h-screen flex-col gap-12 px-12 text-text sm:px-24 lg:px-48"
          >
            {NAV_LINKS.map(({ href, title }) => (
              <div key={title} className="overflow-hidden">
                <motion.h2
                  variants={LINK_VARIANTS}
                  className="w-fit text-2xl font-bold transition duration-300 hover:text-secondary sm:text-4xl lg:text-6xl"
                >
                  <a href={href}>{title}</a>
                </motion.h2>
              </div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed lg:hidden inset-x-0 top-0 z-50 flex h-[80px] w-screen items-center bg-background">
        <div className=" flex h-[30px] w-full items-center justify-between px-4 sm:mb-0 sm:px-8 lg:px-16 z-50">
          <a
            href="/"
            className={clsx(
              'text-3xl font-bold transition duration-500 lg:text-2xl',
              isMenuOpen ? 'text-secondary' : 'text-text  '
            )}
          >
            CollabIn
          </a>
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <Menu isMenuOpen={isMenuOpen} />
      </header>

      <nav
        className="py-8 h-[80px] hidden lg:block fixed top-0 inset-x-0 z-50 bg-background"
        id="navbar"
      >
        <h3 className="left-10 font-bold text-3xl cursor-pointer mb-4 absolute top-1/2 -translate-y-1/2">
          <a href="/">CollabIn</a>
        </h3>
        <ul className="flex gap-4 items-center cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 navbar">
          {NAV_LINKS.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="py-1 px-4 hover:bg-text hover:text-background rounded-sm"
            >
              {nav.title}
            </a>
          ))}
        </ul>
        <div></div>
      </nav>
    </>
  )
}

export const NAVBAR_HEIGHT = '64px'

export default Navbar
