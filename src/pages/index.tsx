import AppShell from "../components/AppShell";
import Link from "next/link";
import ThemeToggle from "components/ThemeToggle";
import { useState } from "react";

const IndexPage = () => (
  <AppShell title="Home | Sushi Dojo">
    <h1>Sushi Dojo</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/client">
        <a>Client</a>
      </Link>
    </p>

    <ThemeToggle />
  </AppShell>
);

export default IndexPage;
