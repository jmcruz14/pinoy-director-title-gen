const Navbar = () => {
  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginInline: '4em',
  }

  return ( 
    <nav className="navbar" style={navStyle}>
      <h1>Movie Director Title Generator</h1>
      <i>By Jay Cruz</i>
    </nav>
  );
}
 
export default Navbar;