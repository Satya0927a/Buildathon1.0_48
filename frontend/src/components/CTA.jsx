export default function CTA() {
  return (
    <section className="cta container">
      <div className="cta-inner">
        <div className="cta-bar" />
        <h2 className="cta-title">Start Building Better UI Faster</h2>
        <h3 className="cta-highlight">With Morphix!</h3>
        <p className="cta-desc">Sign up now to experience a smarter and creative way to develop with AI.</p>

        <div className="cta-actions">
          <button className="cta-primary bg-linear-to-br from-50% from-violet-700 to-violet-400 h-12 w-40 text-[16px] rounded-xl mt-8 font-bold cursor-pointer hover:bg-violet-500 hover:scale-110 transition-all">Get Started</button>
        </div>

        <div className="cta-demo-placeholder">
          {/* large grey demo box under CTA */}
        </div>
      </div>
    </section>
  );
}