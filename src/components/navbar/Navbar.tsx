function Navbar() {
  return (
    <>
      <div className="logo-veloFit">
        <span>VeloFit</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="l-button">Login</button>
        <button className="cad-button">Cadastrar</button>
      </div>
    </>
  );
}

export default Navbar;
