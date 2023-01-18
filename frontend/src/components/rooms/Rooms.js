import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RoomCard } from "../room-card/RoomCard";
import { Container, TextField, Stack, Box, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export function Rooms() {
  const { token } = useAuth();
  const [rooms, setRooms] = useState([]);
  const [value, setValue] = useState([null, null]);

  console.log(value, new Date(value[0].getTime()));
  console.log(new Date(value[0].getTime()));

  useEffect(() => {
    const getRooms = async () => {
      try {
        const res = await fetch("http://localhost:5001/rooms", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          credentials: "include",
        });
        if (res.status === 200) {
          //fara eroare
          setRooms(await res.json());
        } else {
          const resBody = await res.json();
          console.log(resBody.error);
        }
      } catch (e) {
        console.log(e);
      }
    };
    token && getRooms();
  }, [token]);

  return (
    <Container maxWidth="lg">
      <Stack mt={2} mb={2}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
          <Button variant="contained">Cautare</Button>
        </div>
      </Stack>

      {rooms
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((room) => (
          <RoomCard
            key={room.id}
            title={room.title}
            capacity={room.capacity}
            phone={room.phone}
            type={room.type}
          />
        ))}
    </Container>
  );
}
