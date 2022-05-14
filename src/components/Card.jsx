import React, {useState} from 'react';
import {Center, Image, Link, Stack, Text} from "@chakra-ui/react";

const Card = ({book}) => {

  const [data, setData] = useState(null);

  const showFile = blob => {
  let newBlob = new Blob([blob], {type: "application/pdf"})

  setData(window.URL.createObjectURL(newBlob));
  setTimeout(function(){
    window.URL.revokeObjectURL(data);
  }, 100);
}

  const handleClick = () => {
    fetch(book["url_download"])
      .then(response => response.blob())
      .then(showFile)
  }

  return (
    <Stack as="section" bg="teal.200" p={6} justifyContent="space-between">
      <Image
        src={book.thumbnail}
        alt={book.title}
        boxSize="200px"
        objectFit="contain"
      />
      <Text
        textAlign="center"
        color="teal.900"
        maxW="200px"
        maxH="50px"
        overflow="hidden"
      >
        {book.title}
      </Text>
      <Center>
        <Link href={data} download="filename.pdf" onClick={handleClick}>More</Link>
      </Center>
    </Stack>
  );
};

export default Card;
