import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import useCitadel from "./hooks/useCitadel";

export const App = () => {
  const { node, citadel, online } = useCitadel();

  const prettyJson = (x: any) => (x ? JSON.stringify(x, null, 5) : null);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            {[node, citadel, online].map((x) => (
              <>
                <Heading>Node:</Heading>
                <Text>
                  <Code fontSize="xl">{prettyJson(x)}</Code>
                </Text>
              </>
            ))}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
