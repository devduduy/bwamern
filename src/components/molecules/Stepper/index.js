import React, { useState } from "react";
import propTypes from "prop-types";

const Stepper = (props) => {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [currentStep, setCurretStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );

  const totalStep = stepsKeys.length;
  const indexStep = stepsKeys.indexOf(currentStep);

  const prevStep = () => {
    if (+indexStep > 0) setCurretStep(stepsKeys[indexStep - 1]);
  };
  const nextStep = () => {
    if (+indexStep < totalStep) setCurretStep(stepsKeys[indexStep + 1]);
  };

  return <>{props.children(prevStep, nextStep, currentStep, steps)}</>;
};

export default Stepper;

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
