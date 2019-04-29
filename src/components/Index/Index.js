import React from "react";
import { Link } from "gatsby";
import { SEO, Header, Footer } from "../";
import "./index.scss";

const Index = ({ children, metadata: { author, title, description, keywords } }) => (
  <>
    <SEO title={title} description={description} keywords={keywords} />
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            {children}
          </article>
          <Footer author={author} />
        </div>
      </div>
    </div>
  </>
);

export default Index;