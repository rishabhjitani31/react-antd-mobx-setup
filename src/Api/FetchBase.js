import { getItem, removeItem } from "Utils/Storage";
import { messageNotification } from "Utils/notification";
import history from "../history";

class FetchBase {
  constructor(headers = {}) {
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: getItem("session-token"),
      ...headers
    };
  }

  // for serializing the object to query string
  serialize(obj = {}) {
    return Object.keys(obj).length
      ? "?" +
          Object.keys(obj)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
            .join("&")
      : "";
  }

  // this will convert object to form data
  getFormData(object = {}) {
    const formData = new FormData();
    Object.entries(object).forEach(([key, value]) =>
      formData.append(key, value)
    );
    return formData;
  }

  // this will construct the API url
  constructUrl(url) {
    return process.env.REACT_APP_API_URL + url;
  }

  download({ filename, text }) {
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(text)
    );
    pom.setAttribute("download", filename);

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }

  downloadReport(url, data) {
    fetch(this.constructUrl(url) + this.serialize(data), {
      headers: this.headers
    })
      .then(async response => {
        const filename = response.headers
          .get("content-disposition")
          .split('"')[1];
        const text = await response.text();
        return { filename, text };
      })
      .then(responseText => this.download(responseText))
      .catch(error => {
        messageNotification("error", error.message);
        throw new Error(error.message);
      });
  }

  get(url, data) {
    return fetch(this.constructUrl(url) + this.serialize(data), {
      method: "GET",
      headers: this.headers
    })
      .then(response => {
        if (response.status === 403) {
          removeItem("session-token");
          history.push("/login");
        }
        return response.json();
      })
      .then(response => {
        if (response.success) {
          return response;
        } else {
          messageNotification("error", response.message);
          throw new Error(response.message);
        }
      });
  }
  // this method check content type whether it is application json or form data
  postBody(data = {}) {
    const dataNew = data || {};
    Object.keys(dataNew).forEach(key => {
      if (dataNew[key] === undefined) {
        delete dataNew[key];
      }
    });
    const headers = this.headers;
    if (headers["Content-Type"] === "application/json") {
      return JSON.stringify(dataNew);
    } else {
      return this.getFormData(dataNew);
    }
  }

  post(url, data) {
    return fetch(this.constructUrl(url), {
      method: "POST",
      body: this.postBody(data),
      headers: this.headers
    })
      .then(response => {
        if (response.status === 403) {
          removeItem("session-token");
          history.push("/login");
        }
        return response.json();
      })
      .then(response => {
        if (response.success) {
          return response;
        } else {
          messageNotification("error", response.message);
          throw new Error(response.message);
        }
      });
  }

  delete(url, data) {
    return fetch(this.constructUrl(url), {
      method: "Delete",
      body: this.postBody(data),
      headers: this.headers
    })
      .then(response => {
        if (response.status === 403) {
          removeItem("session-token");
          history.push("/login");
        }
        return response.json();
      })
      .then(response => {
        if (response.success) {
          return response;
        } else {
          messageNotification("error", response.message);
          throw new Error(response.message);
        }
      });
  }

  put(url, data) {
    return fetch(this.constructUrl(url), {
      method: "PUT",
      body: this.postBody(data),
      headers: this.headers
    });
  }
}
export default FetchBase;
