import { Layout } from "antd";
const { Content } = Layout;
function Page({ title, children }) {
  return (
    <Layout>
      <Content style={{ width: "800px", margin: "4em auto" }}>
        <h1>{title}</h1>
        {children}
      </Content>
    </Layout>
  );
}

export default Page;
