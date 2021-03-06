import { Box, Text, LinkBox, Image } from "@chakra-ui/react";
import Link from 'next/link'
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Link href={href}>
      <Image
        height="150px"
        width="sm"
        objectFit="cover"
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      </Link>
        <Text mt={2}>{title}</Text>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
