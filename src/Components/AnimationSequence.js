import React, { useState } from "react";

const AnimationSequence = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step >= 0 && <FadeInText text="Step 1" onComplete={() => setStep(1)} />}
      {step >= 1 && (
        <ExpandElement>
          <p>Step 2</p>
        </ExpandElement>
      )}
      {step >= 2 && <FadeInText text="Step 3" />}
    </div>
  );
};

export default AnimationSequence;
