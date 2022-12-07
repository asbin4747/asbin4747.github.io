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
import FormValidationResponse from "./FormValidationResponse";
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
  const [textMessage, setTextMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [failedResponse, setFailedResponse] = useState(false);
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const form = useRef();
  const serviceId = (process.env.NEXT_PUBLIC_SERVICE_ID).toString().replaceAll("\"","");
  const templateId = (process.env.NEXT_PUBLIC_TEMPLATE_ID).toString().replaceAll("\"","");
  const publicKey = (process.env.NEXT_PUBLIC_PUBLIC_KEY).toString().replaceAll("\"","");

  const handleValidation = () => {
    let formIsValid = true;

    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[\s*a\s*-z\s*A\s*-Z\s*]+$/)) {
        formIsValid = false;
        errors["name"] = "Name is not valid";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    setErrors({ errors: errors });
    setIsError(true);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (handleValidation()) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            router.push("/");
          }, 5000);
        },
        (error) => {
          setFailedResponse(true);
        }
      );
      event.target.reset();
      setTextMessage("");
      setName("");
      setEmail("");
    } else {
      setIsError(true);
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              name="message"
              multiline
              rows={8}
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              fullWidth
            />
            <Button
              className=" border-2 bg-purple-800 text-white hover:none"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Contact
            </Button>
          </Box>
          {success && <FormValidationResponse success={success} />}
          {failedResponse && (
            <FormValidationResponse failedResponse={failedResponse} />
          )}
          {isError && <FormValidationResponse errors={errors} />}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
