import React from 'react';
import {Skeleton, Stack} from "@chakra-ui/react";

const Loader = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {items.map(item => (
          <Skeleton key={item} startColor="teal.200" endColor="teal.500" w="250px" h="350px"></Skeleton>
      ))}
    </>
  );
};

export default Loader;

