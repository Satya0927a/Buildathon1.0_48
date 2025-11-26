export default function FeatureBoxes() {
  return (
    <section className="feature-boxes container">

      <div className="feature-row">
        
        <div className="feature-box">
          <h3>Draw Anything. We Understand It</h3>
          <p>
            Morphix converts your hand-drawn UI sketches into structured layouts
            using advanced vision models. Your rough idea becomes real UI instantly.
          </p>
        </div>

        <div className="feature-box">
          <h3>Clean Code. Zero Effort.</h3>
          <p>
            Your sketch is transformed into clean, readable React + Tailwind code.
            No boilerplate, no clutter — production-ready components optimized by AI.
          </p>
        </div>

        <div className="feature-box">
          <h3>Describe Changes, Watch Them Happen.</h3>
          <p>
            Change styles, layouts, colors, or structure using plain English:
            <br/>“Make it glassmorphic.”
            <br/>“Add a sidebar.”
            <br/>“Turn the button purple.”
            <br/>Morphix updates the UI and code instantly.
          </p>
        </div>

      </div>

      <div className="feature-row bottom">
        <div className="feature-box large">
          <h3>Full Control When You Need It.</h3>
          <p>
            Every generated component opens inside an in-browser editor.
            Tweak the code, add logic, or restyle it — with real-time preview
            and instant rendering.
          </p>
        </div>

        <div className="feature-box large">
        </div>
      </div>
    </section>
  );
}
