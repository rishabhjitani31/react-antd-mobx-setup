import React, { Component } from "react";
import "./Login.scss";
import TextInput from "Components/TextInput";
import IconUser from "Components/IconUser/IconUser";
import { images } from "config/images";
import LBlueButton from "Components/LBlueButton/LBlueButton";
import { Form } from "antd";
import { Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { getItem } from "Utils/Storage";
// @inject(stores => ({
//   username: stores.user.name,
//   orderId: stores.order.id,
// }))
@withRouter
@Form.create()
@inject("login")
@observer
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { handleSubmit } = this.props.login;
        handleSubmit(values, this.props.history);
      }
    });
  };
  checkLogin = () => {
    if (getItem("session-token")) {
      this.props.history.push("/");
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.props.login;
    this.checkLogin();
    return (
      <div className="LoginBox">
        <div className="LoginBox__Logo">
          <img src={images.Logo} alt="" />
        </div>
        <div className="LoginBox__Box_Area">
          <Form onSubmit={this.handleSubmit} className="LoginBox__Box">
            <div className="LoginBox__Heading_row">
              <div className="LoginBox__Heading_Icon">
                <IconUser />
              </div>
              <div className="LoginBox__Heading_Text">Login</div>
            </div>
            <div className="LoginBox__Form_Row">
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(<TextInput label="Email or username" />)}
              </Form.Item>
            </div>
            <div className="LoginBox__Form_Row">
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    }
                  ]
                })(<TextInput label="Password" type="password" />)}
              </Form.Item>
            </div>
            <div className="LoginBox__Form_Row LBlueButton_row">
              <LBlueButton
                type="primary"
                htmlType="submit"
                buttonText="Log in"
                loading={loading}
              />
            </div>

            <div className="LoginBox__Form_Row Forgot_Password_row">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <div className="LoginBox__Privacy">
              By logging in I agree to Intel’s{" "}
              <Link to="/privacy-policy" target="_blank">
                {" "}
                Privacy Policy
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
