import {
  Card,
  CardContent,
  Box,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

export function RoomCard({ room, onBookNowClick }) {
  const { title, capacity, phone, type } = room;

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://th.bing.com/th/id/OIP.QxadRQgf34lGKQLXWXFIHgHaE7?pid=ImgDet&rs=1"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Capacitate: {capacity}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Telefon:{phone}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Tip: {type}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        <Button variant="contained" onClick={() => onBookNowClick(room)}>
          Rezerva acum!
        </Button>
      </CardActions>
    </Card>
  );
}
