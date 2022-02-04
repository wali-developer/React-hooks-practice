import react, { useState } from "react";
import { Form, Button, Checkbox, Container } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormHandling = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState([]);

  const submit = (e) => {
    if (email && password) {
      e.preventDefault();
      const newEntry = { id: new Date().toString(), email, password };
      setEntry([...entry, newEntry]);

      setEmail("");
      setPassword("");
    } else {
      alert("Email or Password Incorrect Please try again !");
    }
  };

  const notify = () => {
    if (email && password) {
      toast("Login Successfull! ", { position: "top-center" });
    } else {
      return "Error";
    }
  };
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Form handling</h2>
      <Form onSubmit={submit}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Enter your Email Address..."
            type="email"
            id="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            id="pass"
            type="password"
            autoComplete="off"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={notify}>
          Log In
        </Button>
      </Form>

      {entry.map((data) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirecion: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "10px 60px",
              fontWeight: "bold",
              backgroundColor: "lightgreen",
              color: "black",
            }}
            key={data.id}
          >
            <p>{data.email}</p>
            <p>{data.password}</p>
          </div>
        );
      })}
      <ToastContainer />
    </Container>
  );
};
export default FormHandling;
