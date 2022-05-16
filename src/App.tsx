import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import { Layout, Row, Col, Typography, Space } from "antd";

const { Header, Footer, Content } = Layout;
const { Text, Title } = Typography;

function App() {
  return (
    <>
      <Layout>
        <Space direction="vertical" style={{ display: "flex" }} size={50}>
          <Header style={{textAlign: "center", paddingTop: "0.5em"}}>
            <Title level={2} style={{marginBottom: 0, color: "white"}}>Users Management</Title>
          </Header>
          <Content>
            <Row>
              <Col span={8} offset={3}>
                <UsersList></UsersList>
              </Col>
              <Col span={8} offset={2}>
                <UsersForm></UsersForm>
              </Col>
            </Row>
          </Content>
          <Footer style={{textAlign: "center"}} >
            <Text>Nathan LE ROUX 2022</Text>
          </Footer>
        </Space>
      </Layout>
    </>
  );
}

export default App;
