import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import Success from "../Success";
import { useRouter } from "next/router";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default function ContactForm() {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const form = useRef();
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 5000);
      },
      (error) => {
        console.log(error);
        <div>Sorry, Something wrong with our server. Please try again!</div>;
      }
    );
    event.target.reset();
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: [4, 8],
            marginBottom: [0, 10],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Let us get connected
          </Typography>

          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              name="message"
              multiline
              rows={8}
              value={value}
              onChange={handleChange}
              fullWidth
            />
            <Button
              className="bg-purple-800 text-white hover:none"
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Contact
            </Button>
          </Box>
          {
            success && <Success />
          }
        </Box>
      </Container>
    </ThemeProvider>
  );
}
