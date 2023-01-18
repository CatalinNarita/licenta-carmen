import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format, parseISO } from "date-fns";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { token, userId } = useAuth();

  useEffect(() => {
    const getBookings = async () => {
      const response = await fetch(
        "http://localhost:5001/bookings?" + new URLSearchParams({ userId }),
        {
          method: "GET",
          credentials: "include",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const bookings = await response.json();

      setBookings(bookings);
    };
    token && getBookings();
  }, [token, userId]);

  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Denumire</TableCell>
              <TableCell>Numar rezervare</TableCell>
              <TableCell>Tip</TableCell>
              <TableCell>Capacitate</TableCell>
              <TableCell>Check-in</TableCell>
              <TableCell>Check-out</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.booking_number}>
                <TableCell component="th" scope="row">
                  {booking.title}
                </TableCell>
                <TableCell>{booking.booking_number}</TableCell>
                <TableCell>{booking.type}</TableCell>
                <TableCell>{booking.capacity}</TableCell>
                <TableCell>
                  {format(parseISO(booking.start_date), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>
                  {format(parseISO(booking.end_date), "dd/MM/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Bookings;
