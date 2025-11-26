export default function PartnerShowcase() {
  return (
    <section className="partners container">
      <div className="partners-inner">
        <div className="partners-header">
          <h2 className="section-title">Your AI Dev Partner in Action</h2>
          <p className="section-sub ">
            Draw it, describe it, or combine both. Morphix converts your vision into working code.
            Preview the output, tweak the design live, and export instantly.
          </p>
        </div>

        <div className="partner-grid">
          <div className="partner-left">
            <div className="partner-card placeholder">
              {/* <img src={Template1} alt="template 1" /> */}
            </div>
          </div>

          <div className="partner-right">
            <div className="meta-buttons">
              <button className="meta-pill">Boost Productivity Instantly</button>
              <button className="meta-pill">Reduce Coding Time by 40%</button>
            </div>

            <div className="partner-card placeholder">
              {/* <img src={Template2} alt="template 2" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
