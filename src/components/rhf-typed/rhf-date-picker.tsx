// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import { FormLabel, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

export function RHFDatePicker({
  name,
  label,
  outerLabel,
  required = false,
  yearOnly = false,
  ...other
}: any): JSX.Element {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack gap="0.6rem">
            {outerLabel && (
              <FormLabel>
                {outerLabel}{" "}
                {required && <span style={{ color: "red" }}>*</span>}
              </FormLabel>
            )}

            <DatePicker
              {...field}
              {...other}
              views={yearOnly ? ['year'] : ['year', 'month', 'day']}
              openTo={yearOnly ? 'year' : 'day'}
              slotProps={{
                textField: {
                  helperText: error ? error.message : "",
                  error: Boolean(error),
                  fullWidth: other.fullWidth,
                  size: other.size,
                  variant: "outlined",
                  // placeholder: "Select a date",
                  placeholder: yearOnly ? "Select year" : "Select date",
                },
              }}
              label={label}
              onChange={(date) => {
                // Allow the field to be empty if no date is selected
                field.onChange(date ? date : null);
              }}
              value={field.value || null}
            />
          </Stack>
        );
      }}
    />
  );
}
