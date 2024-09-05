const Navbar = () => {
  return (
    <nav className="py-8 relative" id="navbar">
      <h3 className="left-10 font-bold text-3xl cursor-pointer mb-4 absolute top-1/2 -translate-y-1/2">
        <a href="/">CollabIn</a>
      </h3>
      <ul className="flex gap-4 items-center cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 navbar">
        <li className="py-1 px-4 hover:bg-text hover:text-background rounded-sm">
          <a href="/">HOMEPAGE</a>
        </li>
        <li className="py-1 px-4 hover:bg-text hover:text-background rounded-sm">
          <a href="/projects">PROJECTS</a>
        </li>
        <li className="py-1 px-4 hover:bg-text hover:text-background rounded-sm">
          <a href="/my-projects">MY PROJECTS</a>
        </li>
        <li className="py-1 px-4 hover:bg-text hover:text-background rounded-sm">
          <a href="/bookmarks">BOOKMARKS</a>
        </li>
      </ul>
      <div></div>
    </nav>
  )
}

export const NAVBAR_HEIGHT = '64px'

export default Navbar
