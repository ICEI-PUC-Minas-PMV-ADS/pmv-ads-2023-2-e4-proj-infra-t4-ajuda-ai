/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({ open, handleClose, onConfirm, title, textContent }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {textContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={onConfirm} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
