import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from '../hooks/Pagination';

const Pages = ({ data }) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ] = usePagination(5, data.length);
  return (
    <div style={{marginLeft: '35px', marginTop: '35px'}}>
      <h1>User Posts</h1>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h2>
                <span>{i + 1}</span> {data[i].title}{" "}
              </h2>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;
