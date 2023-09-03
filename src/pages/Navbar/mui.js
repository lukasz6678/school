import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Rating, Typography, TextField } from "@mui/material";
import { useState } from "react";

export function ButtonUsage() {
  const [ratingValue, setRatingValue] = useState(null);
  const [comment, setComment] = useState("");

  const isDisabled = ratingValue === null || comment === "";

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>How would You rate this experience?</Typography>
        <Typography>Rating: {ratingValue}</Typography>
        <Rating
          value={ratingValue}
          onChange={(_, value) => setRatingValue(value)}
        />
        <Typography>Tell us how it went?</Typography>
        <TextField
          multiline
          maxRows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button disabled={isDisabled} sx={{ mt: 5 }} variant="contained">
          Submit!
        </Button>
      </Box>
    </Box>
  );
}

export function RatingUsage() {
  return <></>;
}
