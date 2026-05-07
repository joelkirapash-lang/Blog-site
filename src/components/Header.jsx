// Header component - displays the blog name
// Connected to: App (parent)
// Props received: name (string)

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
