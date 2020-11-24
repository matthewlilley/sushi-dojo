import AppShell from "../components/AppShell";
import Link from "next/link";

const AboutPage = () => (
  <AppShell title="About | Sushi Dojo">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </AppShell>
);

export default AboutPage;
