const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 place-items-center">
      <h3 className="font-bold text-3xl cursor-pointer">
        <a href="/">CollabIn</a>
      </h3>
      <ul className="flex justify-between xl:w-1/3 2xl:w-1/4 cursor-pointer navbar">
        <li>
          <a href="/">HOMEPAGE</a>
        </li>
        <li>
          <a href="/projects">PROJECTS</a>
        </li>
        <li>
          <a href="/my-projects">MY PROJECTS</a>
        </li>
        <li>
          <a href="/bookmarks">BOOKMARKS</a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Navbar;
