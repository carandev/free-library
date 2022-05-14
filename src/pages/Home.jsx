import React, {useEffect, useState} from 'react';
import {Box, Container, Flex, Wrap} from "@chakra-ui/react";

import Loader from "../components/Loader";
import Card from "../components/Card";
import api from "../services/api";

const Home = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.get(API_URL, "book_title=javascript&results_range=0,10")
      .then(json => {
        setBook(json)
        setIsLoading(false)
      })
      .catch(console.log);
  }, []);

  return (
    <Box w="full" bg="teal.100">
      <Container maxW="container.xl">
        <Wrap gap={6} justify="center" spacing={10} minH="100vh">
          {isLoading
            ?<Loader/>
            : book.map(book => <Card key={book.id} book={book}/>)
          }
        </Wrap>
      </Container>
    </Box>
  );
};

export default Home;
