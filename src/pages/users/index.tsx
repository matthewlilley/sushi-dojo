import AppShell from "../../components/AppShell";
import { GetStaticProps } from "next";
import Link from "next/link";
import List from "../../components/List";
import { User } from "../../interfaces";
import { sampleUserData } from "../../../data/sample-data";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <AppShell title="Users List | Sushi Dojo">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </AppShell>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
