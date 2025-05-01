import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  CardActions,
  Tooltip,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const LaunchCard = ({ launch }) => {
  const { name, date_utc, success, upcoming, details, links } = launch;

  const formattedDate = new Date(date_utc).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const status = upcoming ? "Upcoming" : success ? "Success" : "Failed";
  const statusColor = upcoming ? "info" : success ? "success" : "error";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%", 
        maxWidth: 300, 
        minWidth: 280,
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden", 
        height: "100%", 
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={links?.patch?.small || "/placeholder.jpg"}
        alt={name}
        height="160"
        sx={{ objectFit: "contain", p: 2 }}
      />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", px: 2 }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>

          <Box sx={{ mt: 1, mb: 2 }}>
            <Chip label={status} color={statusColor} size="small" />
          </Box>

          <Tooltip title={details || "No mission details available."} arrow>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "4.5rem",
                cursor: "pointer",
              }}
            >
              {details || "No mission details available."}
            </Typography>
          </Tooltip>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end", pb: 2 }}>
          {links?.webcast && (
            <Button
              size="small"
              color="primary"
              href={links.webcast}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<RocketLaunchIcon />}
            >
              Watch
            </Button>
          )}
        </CardActions>
      </Box>
    </Card>
  );
};

export default LaunchCard;
