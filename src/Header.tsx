export default function Header() {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" href="/hm">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/prd">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/any">
                Others
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
