

export default function Navbar(){
    return(
        <header className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">
            {/* <img src={Logo} alt="Morphix Logo" /> */}
          </div>

          <div className="brand-text">MORPHIX</div>
        </div>

        <nav className="flex gap-10 underline text-white ">
          <a className=" cursor-pointer opacity-[70%]  hover:opacity-100">About</a>
          <a className=" cursor-pointer opacity-[70%] hover:opacity-100"> Pricing</a>
          <a className=" cursor-pointer opacity-[70%] hover:opacity-100">FAQs</a>
          <a className=" cursor-pointer opacity-[70%] hover:opacity-100">Blog</a>
        </nav> 

        <div className="auth-buttons">
          <button className="bg-violet-600 h-10 w-20 rounded-xl hover:scale-110 transition-all text-white">Sign Up</button>
          <button className="btn-primary hover:scale-110 transition-all">Login</button>
        </div>
      </div>
    </header>
  );
}
