import React from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ count, page, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <MuiPagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};

export default Pagination;
