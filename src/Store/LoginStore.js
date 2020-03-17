import { observable, action } from "mobx";
import FetchBase from "../Api/FetchBase";
import { setItem, getItem, removeItem } from "Utils/Storage";
import { messageNotification } from "Utils/notification";

class LoginStore extends FetchBase {
  @observable loading = false;

  // @action.bound
  // async handleSubmit(value, history) {
  //   try {
  //     this.headers = {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     };
  //     this.loading = true;
  //     const response = await this.post("/auth/login", value);
  //     setItem("session-token", response.data.token);
  //     history.push("/");
  //     this.loading = false;
  //   } catch (e) {
  //     this.loading = false;
  //   }
  // }
}

export default LoginStore;
