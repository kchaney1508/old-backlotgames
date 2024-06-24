import React from "react";
import Layout from "@theme/Layout";

export default function legal() {
  return (
    <Layout description="legal">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <embed
          src="legal.pdf"
          width="900rem"
          height="950rem"
          overflow="hidden"
        />
      </div>
    </Layout>
  );
}
