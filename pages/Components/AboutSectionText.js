import * as React from "react";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Container } from "@mui/system";

export default function AboutSectionText() {
  return (
    <CardContent className="shadow-2xl blue_background text-center m-2 p-4 sm:m-4 sm:p-8 sm:max-w-4xl sm:mx-auto">
      <Container maxWidth="lg">
        <Typography className="text-black text-3xl md:text-6xl mb-2">
          ABOUT ME
        </Typography>
        <Typography className="text-black md:text-2xl animate-pulse">
          I am Austin based developer passionate about web development and software engineering. I have experience working in eCommerce industry,
          experience developing a payment solution as a software engineer, and as a software developer in different projects ranging from android development, 
          machine learning, web development to software testing and validation. Some of the programming languages that I have worked with are Java, JavaScript,
          Python, SQL, C/C++.  
        </Typography>
      </Container>
    </CardContent>
  );
}
