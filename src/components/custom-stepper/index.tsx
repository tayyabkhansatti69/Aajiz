// import type { StepIconProps } from "@mui/material";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
// import {
//   ColorLibStepIconRoot
// } from "./custom-stepper.style";

// function ColorLibStepIcon(props: StepIconProps): JSX.Element {
//   const { active, completed, className } = props;
//   return (
//     <ColorLibStepIconRoot
//       ownerState={{ completed, active }}
//       className={className}
//     />
//   );
// }

export function CustomJobStepper({
  steps,
  active,
}: {
  steps: string[];
  active: number;
}): JSX.Element {
  return (
    <Stepper
      activeStep={active}
      alternativeLabel
      // connector={<ColorLibConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel >
            <Typography variant="body1" color="primary.main">
            {label}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
