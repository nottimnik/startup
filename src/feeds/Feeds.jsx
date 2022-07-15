import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { daily } from "../data/feeds/general/daily";
import { influencers } from "./influencers";
import { Wrap, WrapItem, useColorMode, Box } from "@chakra-ui/react";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import { SearchBarLight, SearchBarDark } from "./components/SearchBox";
import Coins from "./components/CryptoPrices/Coins";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HashtagsNav from "./components/HashtagsNav";
import axios from "axios";

export default function Feeds() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(daily);
  const [searchKey, setSearchKey] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://127.0.0.1:5000/feeds/general`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    //scroll to the top
    window.scrollTo(0, 0);
  }, []);

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = daily;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.searchKeywords.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(daily);
    setSearchKey("");
  };

  return (
    <>
      <Helmet>
        <title>Feeds | Capitnest</title>
        {console.log("Yes")}
      </Helmet>
      <Layout>
        <Content>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="scrollbarParent"
          >
            <LeftSide>
              <HashtagsNav />
            </LeftSide>

            <MiddleSide>
              <Search>
                <div style={{ marginTop: "0px" }}>
                  {colorMode === "dark" ? (
                    <SearchBarDark
                      value={searchKey}
                      clearSearch={handleClearSearch}
                      formSubmit={handleSearchBar}
                      handleSearchKey={(e) => setSearchKey(e.target.value)}
                    />
                  ) : (
                    <SearchBarLight
                      value={searchKey}
                      clearSearch={handleClearSearch}
                      formSubmit={handleSearchBar}
                      handleSearchKey={(e) => setSearchKey(e.target.value)}
                    />
                  )}
                </div>
              </Search>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "75px",
                }}
              >
                {!blogs.length ? (
                  <h1
                    style={{
                      fontSize: "30px",
                      marginBottom: "100%",
                      marginTop: "10px",
                    }}
                  >
                    No results found :(
                  </h1>
                ) : (
                  posts.map((tweet) => (
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <WrapItem>
                        <Tweet blog={tweet} />
                      </WrapItem>
                    </div>
                  ))
                )}
              </div>
            </MiddleSide>

            <RightNavbar>
              <RightNavbarContent>
                <SmallerTitle>Top Influencers</SmallerTitle>
                <Wrap width="300px">
                  {influencers.map((influ) => (
                    <div style={{ marginTop: "5px", marginBottom: "8px" }}>
                      <WrapItem>
                        <Influencer blog={influ} />
                      </WrapItem>
                    </div>
                  ))}
                </Wrap>

                <SmallerTitle
                  style={{ marginBottom: "10px", marginTop: "5px" }}
                >
                  <Linkk>
                    <Link to="/markets">Top Cryptocurrencies</Link>
                  </Linkk>
                </SmallerTitle>
                <Coins />
              </RightNavbarContent>
            </RightNavbar>
          </div>
        </Content>
      </Layout>
    </>
  );
}

const LeftSide = styled.div`
  position: fixed;
  margin-right: 1000px;
  margin-top: -7px;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const Linkk = styled.div`
  a {
    &:hover {
      text-decoration: underline;
      color: inherit;
      filter: brightness(0.8);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;

const Title = styled.h1`
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
`;

const SmallerTitle = styled.h1`
  font-size: 23px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 1500px) {
    font-size: 23px;
  }
`;

const RightNavbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: -7px;

  @media (max-width: 1150px) {
    width: 40%;
  }
`;

const RightNavbarContent = styled.div`
  position: fixed;
  margin-right: 20%;
  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 786px) {
    width: 0px;
    height: 0px;
    position: relative;
    display: none !important;
  }
`;

const Search = styled.div`
  position: fixed;
  z-index: 1;
  margin-top: -32px;
  width: 496px;

  @media (max-width: 1150px) {
    width: 50%;
  }

  @media (max-width: 1050px) {
    width: 53%;
  }

  @media (max-width: 840px) {
    width: 415px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

const MiddleSide = styled.div`
  width: 50%;
  margin-right: 40px;

  @media (max-width: 1150px) {
    width: 53%;
  }

  @media (max-width: 786px) {
    display: flex;
    justify-content: center;
    margin-right: 10%;
    margin-left: 10%;
    width: 100%;
  }
`;
