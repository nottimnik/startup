import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";

export function Layout({ children }) {
  return (
    <Box mb={16}>
      <Navbar />
      <ScrollButton />
      <br />
      <br />
      <br />
      <br />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
}
