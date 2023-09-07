import {
  Typography,
  Button,
  ButtonGroup,
  Stack,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export function MuiTypography() {
  const [formats, setFormats] = useState([]);
  const handleFormatChange = (_, updatedFormats) => {
    setFormats(updatedFormats);
  };

  console.log(formats);

  return (
    <>
      <Typography variant="h5">Header1</Typography>

      <Stack display="block" spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <br />
      <br />
      <Stack direction={"row"}>
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <br />
      <Stack direction={"row"}>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value={"bold"}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underlined"}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <br />
      <br />
      <Stack spacing={4} direction={"row"}>
        <TextField label="name"></TextField>
      </Stack>
      <br />
      <br />
      <Stack spacing={4} direction={"row"}>
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>

        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        ></TextField>
      </Stack>
      <br />
      <br />
      <Stack spacing={4} direction="row">
        <TextField
          label="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </>
  );
}
