import AppShell from "../components/AppShell";
import Link from "next/link";

const ClientPage = () => (
  <AppShell title="Client | Sushi Dojo">
    <h1>Client</h1>
    <p>This is a client-only page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </AppShell>
);

export default ClientPage;
