const Navbar = () => {
  return (
    <nav className="py-8 mx-10 relative">
      <h3 className="font-bold text-3xl cursor-pointer mb-4 absolute left-0 top-1/2 -translate-y-1/2">
        <a href="/">CollabIn</a>
      </h3>
      <ul className="flex gap-4 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 navbar">
        <li className="py-1 px-[.7rem]">
          <a href="/">HOMEPAGE</a>
        </li>
        <li className="py-1 px-[.7rem]">
          <a href="/projects">PROJECTS</a>
        </li>
        <li className="py-1 px-[.7rem]">
          <a href="/my-projects">MY PROJECTS</a>
        </li>
        <li className="py-1 px-[.7rem]">
          <a href="/bookmarks">BOOKMARKS</a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
