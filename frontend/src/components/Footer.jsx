// import Logo from "../assets/logo.png";

// const UploadedPreview = "/mnt/data/3d8b2c88-c734-4092-a158-5b8f6e10db65.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="brand">
          <div className="logo small">
            {/* <img src={Logo} alt="Morphix logo preview" /> */}
          </div>
          <div className="brand-text large">MORPHIX</div>
        </div>

        <nav className=" flex gap-10 underline text-white">
          <a className="cursor-pointer opacity-[70%] hover:opacity-100">Dashboard</a>
          <a className="cursor-pointer opacity-[70%] hover:opacity-100">Pricing</a>
          <a className="cursor-pointer opacity-[70%] hover:opacity-100">FAQs</a>
          <a className="cursor-pointer opacity-[70%] hover:opacity-100">Blog</a>
          <a className="cursor-pointer opacity-[70%] hover:opacity-100">Contact Support</a>
        </nav>

        <div className="auth-buttons-footer">
          <button className="btn-outline small">Sign Up</button>
          <button className="btn-primary small">Login</button>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copyright">Morphix. All rights are reserved</div>

        <div className="legal-links">
          <a>Terms of Service</a>
          <a>Policy Service</a>
          <a>Cookie Policy</a>
          <a>Partners</a>
        </div>
      </div>
    </footer>
  );
}

