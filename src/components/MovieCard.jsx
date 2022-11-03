import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import movieImg from "../assets/mulan.webp";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={movieImg}
          alt="green iguana"
        />
        <CardContent sx={{ background: "#246e82" }}>
          <Typography
            sx={{ fontWeight: "bold", color: "whitesmoke" }}
            variant="body1"
            color="text.secondary"
          >
            Mulan
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
