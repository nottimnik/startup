import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Footerr from "../components/Footer";
import axios from "axios";
import useScript from "./../functions/useScript";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Badge, Flex, Skeleton } from "@chakra-ui/react";

//Components
import ExchangeNavbar from "./components/Exchanges/ExchangeNavbar";
import Exchange from "./components/Exchanges/Exchange";
import ExchangesPagination from "./components/Exchanges/ExchangesPagination";

export default function Exchanges() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.coingecko.com/api/v3/exchanges?per_page=200";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Flex justifyContent="center">
          <Title>Exchanges</Title>
        </Flex>

        <br />

        <ExchangeNavbar />

        <br />

        {loading === true ? (
          <div>
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
          </div>
        ) : (
          <Exchange coins={coins} />
        )}

        <br />

        <ExchangesPagination />
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
