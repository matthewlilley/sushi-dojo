import React, { ReactNode } from "react";

import Head from "next/head";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const AppShell = ({ children, title = "This is the default title" }: Props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: 32,
    }}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header style={{ flexShrink: 0 }}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>

    <main style={{ flexGrow: 1 }}>{children}</main>

    <footer style={{ flexShrink: 0, textAlign: "center" }}>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}</style>
  </div>
);

export default AppShell;
