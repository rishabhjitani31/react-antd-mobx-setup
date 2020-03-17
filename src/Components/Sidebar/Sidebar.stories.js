import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "./Sidebar";
import StoryRouter from "storybook-react-router";

storiesOf("Sidebar", module)
  .addDecorator(StoryRouter())
  .add("Sidebar", () => (
    <div>
      <Sidebar />
    </div>
  ));
