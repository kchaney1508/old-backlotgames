import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img class="spike spikerelay" src="/img/index-spike.png"></img>
          <img class="spikemobile" src="/img/index-spike-mobile.png"></img>
        </Heading>
        {/* <p className="hero__subtitle">roleplay community in GTAV</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg homepageButton glass"
            to="/docs/portal"
          >
            {" "}
            Docs Portal
          </Link>
          <Link
            className="button button--secondary button--lg homepageButton glass"
            to="/updates"
          >
            Game Updates
          </Link>
          <Link
            className="button button--secondary button--lg homepageButton glass"
            to="/rules"
          >
            Server Rules
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout noFooter description="Open world roleplay community in GTAV.">
      <HomepageHeader />
    </Layout>
  );
}
