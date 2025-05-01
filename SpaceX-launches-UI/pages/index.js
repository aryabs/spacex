import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Container, Typography, Grid, Box } from "@mui/material";
import Pagination from "@/components/Pagination";
import LaunchCard from "@/components/LaunchCard";

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Display 12 cards per page

  useEffect(() => {
    const fetchLaunchData = async () => {
      try {
        const response = await axios.post("https://api.spacexdata.com/v5/launches/query", {
          options: {
            select: [
              "id",
              "name",
              "date_utc",
              "success",
              "upcoming",
              "details",
              "failures",
              "links",
            ],
            sort: { date_utc: "desc" },
            limit: 150,
          },
        });
        setApiData(response.data.docs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLaunchData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(apiData.length / itemsPerPage);

  // Slice the data for the current page
  const currentData = apiData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change when next/prev buttons or page numbers are clicked
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>SpaceX Launch Tracker</title>
        <meta name="description" content="Track SpaceX launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="header" sx={{ backgroundColor: "#0b0c10", py: 4 }}>
        <Typography variant="h3" align="center" sx={{ color: "#fff", fontWeight: "bold" }}>
          🚀 SpaceX Launch Tracker
        </Typography>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
        <Grid
          container
          spacing={3}
          justifyContent={currentData.length < itemsPerPage ? "flex-start" : "center"} // Align left if it's the last page with fewer cards
          wrap="wrap"
        >
          {currentData.map((launch) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={launch.id}>
              <LaunchCard launch={launch} />
            </Grid>
          ))}
        </Grid>

        {/* Pagination Component */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
}
