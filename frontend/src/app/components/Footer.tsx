"use client";

import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import IconBar from "./IconBar";
import Logo from "./Logo";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            width="100%">
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}>
                <Logo />
                <Text>© 2023 Splittery. All rights reserved</Text>
                <IconBar />
            </Container>
        </Box>
    );
}
