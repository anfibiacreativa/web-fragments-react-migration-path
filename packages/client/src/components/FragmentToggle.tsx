import { useState, useEffect } from "react";

function FragmentToggle() {
  const [fragmentSeam, setFragmentSeam] = useState(false);

  useEffect(() => {
    if (fragmentSeam) {
      document.body.classList.add("fragment-border");
    } else {
      document.body.classList.remove("fragment-border");
    }

    return () => {
      document.body.classList.remove("fragment-border");
    };
  }, [fragmentSeam]);

  return (
    <div className="toggle-wrapper">
      <span className="tiny-text">Fragment Borders</span>
      <div
        className={`toggle-pill ${fragmentSeam ? "active" : ""}`}
        onClick={() => setFragmentSeam(!fragmentSeam)}
      >
        <div className="toggle-knob"></div>
      </div>
    </div>
  );
}

export default FragmentToggle;
