import { Card, Form, Input, Row, Col, Select, Button } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../features/users/usersSlice";
import { useAppSelector } from "../app/hooks";

const UsersForm = () => {
  // state for the form
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(-1);


  const dispatch = useDispatch();
  //let users: any = useAppSelector((state) => state.users.value);
  //submit form function 
  const handleSubmit = (event: any) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        role: role,
      }),
    })
    .then(response => response.json())
    .then(data => dispatch(data))//error
    // .then((data) => {
    //   users = [...users, data];
    //   dispatch(users)
    // });
  };


  return (
    <Card title="Nouvel Utilisateur">
      <Form name="new_user" onFinish={handleSubmit}>
        <Row>
          <Col span={12}>
            <Form.Item
              name="firstname"
              rules={[
                { required: true, message: "Veuillez rentrer un Prénom" },
              ]}
            >
              <Input
                type="text"
                prefix={<UserOutlined />}
                placeholder="Prénom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastname"
              rules={[{ required: true, message: "Veuillez rentrer un Nom" }]}
            >
              <Input
                type="text"
                prefix={<UserOutlined />}
                placeholder="Nom"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Veuillez rentrer un email valide" },
              ]}
            >
              <Input
                type="email"
                prefix={<MailOutlined />}
                placeholder="dupont@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Select
                placeholder="Administrateur"
                onChange={(event) => setRole(event)}
                
              >
                <Select.Option value={1}>Administrateur</Select.Option>
                <Select.Option value={2}>Intégrateur</Select.Option>
                <Select.Option value={3}>Auditeur</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
              >
                AJOUTER
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  
  );
};

export default UsersForm;
