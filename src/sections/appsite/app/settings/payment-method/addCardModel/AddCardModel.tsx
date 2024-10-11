
import {
  
  Button,
  Grid,
  IconButton,
  Stack,

} from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import IconVisa from "@/src/assets/icons/Transaction/icon-visa";
import IconMaster from "@/src/assets/icons/Transaction/icon-master";
import { CustomModal } from "@/src/components";
import {  FormProvider, RHFSelect, RHFTextField } from "@/src/components/rhf";
import { useForm } from "react-hook-form";

function AddCardModel() {
  const [open, setOpen] = React.useState(false);
  const methods = useForm({
    defaultValues: {},
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {};
  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <AddBoxOutlinedIcon sx={{ color: "primary.main", fontSize: 35 }} />
      </IconButton>
      <CustomModal
        isOpen={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        headerLabel="Add New Card"
        closeButtonProps={{ onClick: () => setOpen(false) }}
        rootSx={{
          maxWidth: 600,
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container >
            <Grid xs={12} sm={12} p={1} item>
              <RHFSelect label="Select Card" fullWidth name="card" />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <RHFTextField label="Name on Card*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <RHFTextField label="Card Number*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField label="Expiry Date*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField type="password" fullWidth label="cvv*" name="cvv" />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
                <Stack my={1} direction="row" justifyContent="end" spacing={2}>
                <IconVisa />
                <IconMaster />
                </Stack>
              <Stack direction="row" justifyContent="end" spacing={2}>
                <Button
                  sx={{ borderRadius: 30, minWidth: 100 }}
                  variant="contained"
                  size="small"
                  onClick={() => setOpen(false)}
                >
                  cancel
                </Button>

                <Button
                  variant="outlined"
                  type="submit"
                  size="small"
                  sx={{
                    borderRadius: 30,
                    minWidth: 100,
                    color: "primary.main",
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </CustomModal>
    </div>
  );
}

export default AddCardModel;
