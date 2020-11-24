import { GetStaticPaths, GetStaticProps } from "next";

import AppShell from "../../components/AppShell";
import ListDetail from "../../components/ListDetail";
import { User } from "../../interfaces";
import { sampleUserData } from "../../../data/sample-data";
import { useRouter } from "next/router";

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <AppShell title="Searching | Sushi Dojo" />;
  }

  if (errors) {
    return (
      <AppShell title="Error | Sushi Dojo">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </AppShell>
    );
  }

  return (
    <AppShell title={`${item ? item.name : "User Detail"} | Sushi Dojo`}>
      {item && <ListDetail item={item} />}
    </AppShell>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time

    if (!item) {
      throw new Error(`No user with id ${id}!`);
    }

    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
