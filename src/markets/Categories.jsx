import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Footerr from "../components/Footer";
import axios from "axios";
import useScript from "./../functions/useScript";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { Badge, Flex } from "@chakra-ui/react";

//Components
import Coins from "./components/Coins";
import CoinItem from "./components/CoinItem";
import NavbarCategories from "./components/NavbarCategories";

export default function Categories() {
  const [coins, setCoins] = useState([]);
  const { id } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${id}&order=market_cap_desc&per_page=200&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Flex justifyContent="center">
          <Title>{id}</Title>
          <Badge
            colorScheme="red"
            marginLeft="5px"
            marginTop="30px"
            marginBottom="20px"
            fontSize="13px"
          >
            Beta
          </Badge>
        </Flex>

        <NavbarCategories />

        <br />

        <Coins coins={coins} />
      </Layout>

      <Footerr />
    </>
  );
}

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;
