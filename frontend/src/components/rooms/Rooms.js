import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RoomCard } from "../room-card/RoomCard";
import {
  Container,
  TextField,
  Stack,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { BookingDialog } from "../bookingDialog/BookingDialog";

export function Rooms() {
  const { token } = useAuth();
  const [rooms, setRooms] = useState([]);
  const [value, setValue] = useState([null, null]);
  const [selectedRoom, setSelectedRoom] = useState(undefined);

  const [open, setOpen] = useState(false);

  const handleBookNowClick = (room) => {
    setSelectedRoom(room);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = async () => {
    try {
      const res = await fetch("http://localhost:5001/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          startDate: value[0],
          endDate: value[1],
        }),
        credentials: "include",
      });

      const rooms = await res.json();
      setRooms(rooms);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          localeText={{ start: "Check-in", end: "Check-out" }}
        >
          <DateRangePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> - </Box>
                <TextField {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
        <div style={{ alignSelf: "flex-end" }}>
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={!value[0] || !value[1]}
          >
            Cautare
          </Button>
        </div>
      </div>
      <Stack spacing={2}>
        {rooms.length > 0 ? (
          rooms
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onBookNowClick={handleBookNowClick}
              />
            ))
        ) : (
          <Typography variant="h4">
            Efectuati o cautare cu intervalul dorit pentru a vedea camerele
            disponibile
          </Typography>
        )}
      </Stack>
      {open && (
        <BookingDialog
          open={open}
          handleClose={handleClose}
          startDate={value[0]}
          endDate={value[1]}
          room={selectedRoom}
          handleSearch={handleSearch}
        />
      )}
    </Container>
  );
}
