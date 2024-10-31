import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="p-3 mb-3">
        
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
            <img style={{ width: "auto", height: "20px", backgroundColor: "black" }}       className="img-fluid"
  src="https://ph2digital.com/wp-content/uploads/2023/10/Logo-ph2.png" alt="logo" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Campanhas</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Relatórios</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Galeria</a></li>
            <li><a href="#" className="nav-link px-2 link-body-emphasis">Dicas</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
  <a
    href="#"
    className="d-block link-dark text-decoration-none dropdown-toggle"
    id="dropdownUser1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img src="https://github.com/mdo.png" alt="user avatar" width="32" height="32" className="rounded-circle" />
  </a>
  <ul className="dropdown-menu dropdown-menu-end text-small shadow" aria-labelledby="dropdownUser1">
    <li><a className="dropdown-item" href="#">New project...</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
