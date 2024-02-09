import './landing.css';

export const Landing = () => {
  return (
    <div>
      <nav className="top-nav">
        <ul className="top-nav-items">
          <li className="top-nav-item-left">
            <p className="top-nav-icon-star">*</p>
            <p className="top-nav-icon-text">JXWT</p>
          </li>
          <li className="top-nav-item-center">
            <a href="/home" className="top-nav-links">Home</a>
            <a href="/products" className="top-nav-links">Products</a>
            <a href="/services" className="top-nav-links">Services</a>
            <a href="/company" className="top-nav-links">Company</a>
          </li>
          <li className="top-nav-item-right">
            <a href="/account" className="link">
              <i className="fa-regular fa-user" style={{ fontSize: '29px' }} />
            </a>
          </li>
        </ul>
      </nav>

      <section className="landing-section">
        <div className="noise" />
        <div className="landing-hero-image" />
        <div className="landing-text-top-section">
          <div className="landing-text-top-left">
            WE COMBINE TRADITIONAL CRAFTSMANSHIP WITH MODERN DESIGN
          </div>
        </div>
        <div className="landing-text-bottom" />
      </section>

      <footer className="ending-section" />

    </div>
  )
}