import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [rooms, setRooms] = useState([]);
  const { token } = useAuth()();
  let navigate = useNavigate();

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch("http://localhost:5001/rooms", {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const rooms = await response.json();
      console.log(rooms);
      setRooms(rooms);
    };
    token && getRooms();
  }, [token]);

  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Camera</TableCell>
              <TableCell>Mic dejun inclus</TableCell>
              <TableCell>Tip</TableCell>
              <TableCell>Vedere la lac</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow
                key={room.id}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {room.id}
                </TableCell>
                <TableCell>{room.breakfast_included ? "Da" : "Nu"}</TableCell>
                <TableCell>{room.type.toLowerCase()}</TableCell>
                <TableCell>{room.lake_view ? "Da" : "Nu"}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate(`/book/${room.id}`);
                    }}
                  >
                    Rezerva
                  </Button>
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
