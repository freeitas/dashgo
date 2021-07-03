import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Guilherme</Text>
					<Text color="gray.300" fontSize="email">
						guilherme@guil.com
		  </Text>
				</Box>
			)}

			<Avatar size="md" name="Guilherme" src="https://github.com/freeitas.png" />
		</Flex>
	)
}