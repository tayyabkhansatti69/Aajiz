"use client";

import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Style } from "./custom-modal.styles";
import type { CustomModalProps } from "./custom-modal.types";
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import IconModel from "@/src/assets/icons/model-icon";
export function CustomModal({
  isOpen,
  onClose,
  children,
  headerLabel,
  cancelButtonsProps,
  acceptButtonProps,
  acceptButtonLabel,
  closeButtonProps,
  headerTypographyProps,
  rootSx,
  footer,
  headerMic,
  headerMicProps,
  headerAttachment,
  headerAttachmentProps,
  headerDuplicate,
  headerDuplicateProps,
  headerDelete,
  headerDeleteProps,
  headerSubLabel,
  headerIconProp,
}: CustomModalProps): JSX.Element {
  return (
    <Modal open={isOpen} onClose={onClose} closeAfterTransition>
      <Box width="100%" sx={Style.root(rootSx)}>
        <Box display="flex" justifyContent="center" alignContent="center" alignItems="center" gap={1} sx={{ background: "#16A2C4", p: 1 }}>
         {headerIconProp && (
          <IconModel/>
        )}
          {headerLabel && (
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'}>
              <Typography variant="h6" {...headerTypographyProps}>
                {headerLabel}
              </Typography>
              {headerSubLabel && (
                <Typography variant="subtitle2" sx={{ color: "text.secondary", mt: 0.5 }}>
                  {headerSubLabel}
                </Typography>
              )}

            </Box>
          )}
          <Box sx={{ ml: 'auto' }}>
            {headerMic && (
              <IconButton  {...headerMicProps}>
                <AttachFileIcon sx={{ color: '#FFF' }} />
              </IconButton>
            )}
            {headerAttachment && (
              <IconButton  {...headerAttachmentProps}>
                <MicIcon sx={{ color: '#FFF' }} />
              </IconButton>
            )}
            {headerDelete && (
              <IconButton  {...headerDeleteProps}>
                <DeleteIcon sx={{ color: '#FFF' }} />
              </IconButton>
            )}
            {headerDuplicate && (
              <IconButton  {...headerDuplicateProps}>
                <ContentCopyIcon sx={{ color: '#FFF' }} />
              </IconButton>
            )}

            <IconButton  {...closeButtonProps}>
              <CloseIcon sx={{ color: '#FFF' }} />
            </IconButton>
          </Box>
        </Box>
        <Box p={1}>
          {children}
        </Box>
        {footer && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button {...cancelButtonsProps}>Cancel</Button>
            <Button {...acceptButtonProps}>{acceptButtonLabel}</Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
