import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
// import { checkModalTypeForImage } from './AlertModals.data'
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from '@mui/lab'
import DeleteIcon from '@mui/icons-material/Delete';


export const AlertModals = ({
  message,
  type,
  open,
  handleClose,
  handleCancelBtn = handleClose,
  handleSubmitBtn,
  cancelBtnText = 'No',
  submitBtnText = 'Yes',
  // typeImage,
  disableCancelBtn,
  loading,
  footer = true
}: any) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose?.()}
      fullWidth
      maxWidth={'sm'}
      sx={{ borderRadius: '10px', border: '1px' }}
    >
      <DialogTitle>
        <Box display='flex' alignItems='center' justifyContent='center' position='relative' padding={'35px 22px'}>
          <Box display='flex' alignItems='center' position='absolute' flexDirection={'column'}>
            {/* {checkModalTypeForImage(type) ?? typeImage} */}
            <IconButton sx={{background:'#C65468',borderRadius:'50%'}}>
            <DeleteIcon sx={{color:"white"}}/>
            </IconButton>
            <Typography variant='h3' textTransform='capitalize' sx={{ marginLeft: 1 }}>
              {type}
            </Typography>
          </Box>
          <Box
            sx={{ cursor: 'pointer', display: 'flex', position: 'absolute', right: 0 }}
            onClick={() => handleClose?.()}
          >
            <CloseIcon />
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ justifyContent: 'center', display: 'flex' }}>
        <Typography variant='h6' sx={{ fontWeight: 400, marginTop: '1rem' }}>
          {message}{' '}
        </Typography>
      </DialogContent>
      {footer && (
        <DialogActions sx={{ '&.MuiDialogActions-root': { padding: '23px !important' } }}>
          {cancelBtnText === 'No' && (
            <LoadingButton
              fullWidth
              variant='contained'
              onClick={() => handleCancelBtn?.()}
              disabled={disableCancelBtn}
              sx={{
                fontFamily: 'Roboto',
                background: 'transparent',
                fontWeight: 500,
                fontSize: 16,
                height: '52px',
                borderRadius: '10px',
                border: '1px',
                letterSpacing: '-0.5px',
                color: '#1E1C30',
                boxShadow: 'none',
                '&:hover': {
                  background: 'transparent' // Change the opacity value as needed
                }
              }}
            >
              {cancelBtnText}
            </LoadingButton>
          )}
          <LoadingButton
            fullWidth
            variant='contained'
            onClick={handleSubmitBtn}
            loading={loading}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 16,
              height: '52px',
              borderRadius: '10px',
              border: '1px',
              letterSpacing: '-0.5px',
              color: '#FFFFFF',
              background:'#C65468',
              boxShadow: 'none',
              '&:hover': {
                background: '#C65468' // Change the opacity value as needed
              }
            }}
          >
            {submitBtnText}
          </LoadingButton>
        </DialogActions>
      )}
    </Dialog>
  )
}
