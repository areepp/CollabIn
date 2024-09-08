const Navbar = () => {
  return (
    <nav className="py-8 relative" id="navbar">
      <h3 className="left-10 font-bold text-3xl cursor-pointer mb-4 absolute top-1/2 -translate-y-1/2">
        <a href="/">CollabIn</a>
      </h3>
      <ul className="flex gap-4 items-center cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 navbar">
        <a
          href="/"
          className="py-1 px-4 hover:bg-text hover:text-background rounded-sm"
        >
          HOMEPAGE
        </a>
        <a
          href="/projects"
          className="py-1 px-4 hover:bg-text hover:text-background rounded-sm"
        >
          PROJECTS
        </a>
        <a
          href="/my-projects"
          className="py-1 px-4 hover:bg-text hover:text-background rounded-sm"
        >
          MY PROJECTS
        </a>
        <a
          href="/bookmarks"
          className="py-1 px-4 hover:bg-text hover:text-background rounded-sm"
        >
          BOOKMARKS
        </a>
      </ul>
      <div></div>
    </nav>
  )
}

export const NAVBAR_HEIGHT = '64px'

export default Navbar
