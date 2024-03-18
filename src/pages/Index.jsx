import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Stack, Image, Link } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulated search results
    const results = [
      {
        title: "Mabo v Queensland (No 2) [1992] HCA 23",
        description: "Landmark case recognizing native title rights of Indigenous Australians.",
        url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/1992/23.html",
      },
      {
        title: "Commonwealth v Tasmania [1983] HCA 21",
        description: "Significant case regarding the constitutional powers of the Commonwealth.",
        url: "https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/1983/21.html",
      },
      // Add more sample search results
    ];

    setSearchResults(results);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Australian Legal Precedent Search
      </Heading>
      <Stack direction="row" spacing={4} mb={8}>
        <Input placeholder="Enter search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {searchResults.length > 0 ? (
        <Stack spacing={8}>
          {searchResults.map((result, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md">
              <Heading as="h2" size="lg" mb={2}>
                <Link href={result.url} isExternal>
                  {result.title}
                </Link>
              </Heading>
              <Text>{result.description}</Text>
            </Box>
          ))}
        </Stack>
      ) : (
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1575282343536-469af953c6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rc3xlbnwwfHx8fDE3MTA3ODQzNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Law Books" maxW="400px" mx="auto" mb={4} />
          <Text>No search results yet. Enter a search term to begin.</Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
