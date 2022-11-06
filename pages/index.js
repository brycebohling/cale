import Head from "next/head";
import Image from "next/image";
import { Button } from 'antd';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `http://pocketbase:8090/api/collections/faces/records`
  );
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Cale</h1>
      <Button href="/log" type="primary">Log Today</Button>

      <ul>
        {data?.items?.map((item) => (
          <li key={item.id}>Rating: {item.rating}</li>
        ))}
      </ul>
    </div>
  );
}
