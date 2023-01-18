import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { format } from "date-fns";
import { useAuth } from "../../hooks/useAuth";

export const BookingDialog = ({
  open,
  handleClose,
  room,
  startDate,
  endDate,
  handleSearch,
}) => {
  const { userId, token } = useAuth();

  const { id, title, type, phone, capacity } = room;

  const handleOnReserveClick = async () => {
    try {
      await fetch("http://localhost:5001/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          userId,
          roomId: id,
          startDate,
          endDate,
          phoneNumber: phone,
          numberOfGuests: capacity,
        }),
        credentials: "include",
      });
      handleSearch();
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Verificati detaliile rezervarii"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Denumire: {title}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Tip: {type}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Check-in: {startDate && format(startDate, "dd/MM/yyyy")}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          Check-out: {endDate && format(endDate, "dd/MM/yyyy")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnReserveClick}>Rezerva</Button>
      </DialogActions>
    </Dialog>
  );
};
