import { useState } from "react";
import { Container, TextField, Box, Button } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const Book = () => {
  const [value, setValue] = useState([null, null]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const { token, userId, firstName, lastName } = useAuth()();
  const { roomId } = useParams();
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Box
        sx={{
          flexBasis: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
          padding: "3em 1em",
        }}
      >
        <div>Camera {roomId}</div>
        <TextField
          label="Nume"
          disabled
          value={firstName}
          variant="filled"
          style={{
            width: "100%",
          }}
        />
        <TextField
          label="Prenume"
          disabled
          value={lastName}
          variant="filled"
          style={{
            width: "100%",
          }}
        />
        <TextField
          label="Numar de telefon"
          variant="outlined"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          style={{
            width: "100%",
          }}
        />
        <TextField
          label="Persoane"
          variant="outlined"
          value={numberOfGuests}
          onChange={(event) => {
            setNumberOfGuests(event.target.value);
          }}
          style={{
            width: "100%",
          }}
        />
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
                <TextField
                  {...startProps}
                  style={{
                    width: "100%",
                  }}
                />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField
                  {...endProps}
                  style={{
                    width: "100%",
                  }}
                />
              </>
            )}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          onClick={() => {
            console.log({
              phoneNumber,
              numberOfGuests,
              startDate: value[0],
              endDate: value[1],
              userId,
              roomId,
            });
            const registerBooking = async () => {
              const response = await fetch("http://localhost:5001/book", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                  phoneNumber,
                  numberOfGuests,
                  startDate: value[0],
                  endDate: value[1],
                  userId,
                  roomId,
                }),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`,
                },
              });
              const msg = await response.json();
              console.log(msg);
            };
            registerBooking();
          }}
        >
          Rezerva
        </Button>
      </Box>
    </Container>
  );
};

export default Book;
