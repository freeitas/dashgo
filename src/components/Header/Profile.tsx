import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Guilherme</Text>
				<Text color="gray.300" fontSize="email">
					guilherme@guil.com
		  </Text>
			</Box>

			<Avatar size="md" name="Guilherme" />
		</Flex>
	)
}