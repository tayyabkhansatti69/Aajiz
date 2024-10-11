import { UploadSingleFile } from "../upload";
import { Controller, useFormContext } from "react-hook-form";

// @mui
import {
  // ButtonBase,
  FormHelperText,
  FormLabel,
  Stack,
  // Typography,
  TextField,
  IconButton,
  // Input,
} from "@mui/material";
import { useRef } from "react";

// common utils
// import { fData } from "@/components/utils/format-number";
import IconCloud from "@/src/assets/icons/icon-cloud";

//  icons
// import { AttachFileIcon } from "common/assets";

export function RHFUploadSingleFileWithPreview({
  name,
  outerLabel,
  supportedFormats,
  ...other
}: any): JSX.Element {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const hasError = Boolean(error) && !field.value;

        return (
          <Stack gap="0.6rem">
            {outerLabel && <FormLabel>{outerLabel}</FormLabel>}
            <UploadSingleFile
              file={field.value}
              error={hasError}
              onChange={field.onChange}
              supportedFormats={supportedFormats}
              {...other}
            />
            <FormHelperText error sx={{ px: 2 }}>
              {error?.message}
            </FormHelperText>
          </Stack>
        );
      }}
    />
  );
}

export function RHFUploadSingleFileWithoutPreview({
  name,
  label = "Upload File",
  accept,
  disabled,
  ...other
}: any): JSX.Element {
  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  }: any = useFormContext();
  const fileInputRef: any = useRef(null);

  const file = watch(name);

  const handleClickAttachFile = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <Stack direction="column" alignItems="start" spacing={1.6}>
        <TextField
          fullWidth
          id=""
          variant="outlined"
          label={label}
          value={file?.name}
          InputLabelProps={{ shrink: true }}
          {...other}
          InputProps={{
            endAdornment: (
              <IconButton disableRipple onClick={handleClickAttachFile}>
                <IconCloud />
              </IconButton>
            ),
          }}
        />

        <input
          disabled={disabled}
          {...register(name)}
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={(event) => {
            const selectedFile: any = event.target.files?.[0];
            setValue(name, selectedFile);
            trigger(name);
          }}
          style={{ display: "none" }}
        />
      </Stack>

      {Boolean(errors[name]) && (
        <FormHelperText sx={{ px: 2, display: "block" }} error>
          {errors[name].message}
        </FormHelperText>
      )}
    </div>
  );
}
