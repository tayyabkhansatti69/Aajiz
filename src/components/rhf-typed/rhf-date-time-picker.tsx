// form
import { Controller } from "react-hook-form";
// import type { FieldValues } from "react-hook-form";

// @mui
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
// import type { RHFDateTimePickerProps } from "./rhf.types";

// ----------------------------------------------------------------------

export function RHFDateTimePicker({
  name,
  label,
  control,
  fullWidth = false,
  ...other
}:any): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DateTimePicker
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          {...field}
          {...other}
          slotProps={{
            textField: {
              helperText: error ? error.message : "",
              error: Boolean(error),
              fullWidth,
            },
          }}
          label={label}
        />
      )}
    />
  );
}
