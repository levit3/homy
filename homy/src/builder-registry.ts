"use client";
import { builder, Builder } from "@builder.io/react";
import AboutUsOne from "./components/inner-pages/about-us/about-us-one";
import AboutUsTwo from "./components/inner-pages/about-us/about-us-two";
import AccountSettingBody from "./components/dashboard/account-settings/AccountSettingBody";
import AddPropertyBody from "./components/dashboard/add-property/AddPropertyBody";
import AddressAndLocation from "./components/dashboard/profile/AddressAndLocation";
import AddressBanner from "./components/homes/home-four/AddressBanner";
import Agency from "./components/inner-pages/agency/agency";
import AgencyArea from "./components/inner-pages/agency/agency/AgencyArea";
import AgencyDetails from "./components/inner-pages/agency/agency-details";
import AgencyDetailsArea from "./components/inner-pages/agency/agency-details/AgencyDetailsArea";
import AgencyDetailsSidebar from "./components/inner-pages/agency/agency-details/AgencyDetailsSidebar";
import AgencyFormOne from "./components/forms/AgencyFormOne";
import AgencyFormTwo from "./components/forms/AgencyFormTwo";
import AgencyNavTabs from "./components/inner-pages/agency/agency-details/AgencyNavTabs";
import Agent from "./components/inner-pages/agent/agent";
import AgentArea from "./components/homes/home-one/AgentArea";
import AgentDetails from "./components/inner-pages/agent/agent-details";
import Banner from "./components/homes/home-one/Banner";
import BarChart from "./components/dashboard/index/DashboardChart";
import BLockFeatureFive from "./components/homes/home-one/BLockFeatureFive";
import BLockFeatureFour from "./components/homes/home-one/BLockFeatureFour";
import Counter from "./components/Counter/Counter";
import HeaderOne from "./layouts/headers/HeaderOne";
import HeaderTwo from "./layouts/headers/HeaderTwo";
import HomeOne from "./components/homes/home-one";
import LoginForm from "./components/forms/LoginForm";
import LoginModal from "./modals/LoginModal";
import RegisterForm from "./components/forms/RegisterForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(AgencyDetailsSidebar, {
  name: "AgencyDetailsSidebar",
});

Builder.registerComponent(AgencyFormOne, {
  name: "AgencyFormOne",
});

Builder.registerComponent(AboutUsOne, {
  name: "AboutUsOne",
});

Builder.registerComponent(AboutUsTwo, {
  name: "AboutUsTwo",
});

Builder.registerComponent(AccountSettingBody, {
  name: "AccountSettingBody",
  inputs: [
    {
      name: "FirstName",
      type: "string",
    },
    {
      name: "LastName",
      type: "string",
    },
    {
      name: "Email",
      type: "email",
    },
    {
      name: "Phone",
      type: "number",
    },
    {
      name: "Password",
      type: "string",
    },
  ],
});

Builder.registerComponent(AddPropertyBody, {
  name: "AddPropertyBody",
});

Builder.registerComponent(AddressAndLocation, {
  name: "AddressAndLocation",
});

Builder.registerComponent(AddressBanner, {
  name: "AddressBanner",
});

Builder.registerComponent(Agency, {
  name: "Agency",
});

Builder.registerComponent(AgencyArea, {
  name: "AgencyArea",
});

Builder.registerComponent(AgencyDetails, {
  name: "AgencyDetails",
});

Builder.registerComponent(AgencyDetailsArea, {
  name: "AgencyDetailsArea",
});

Builder.registerComponent(AgencyFormTwo, {
  name: "AgencyFormTwo",
});

Builder.registerComponent(AgencyNavTabs, {
  name: "AgencyNavTabs",
});

Builder.registerComponent(Agent, {
  name: "Agent",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(AgentDetails, {
  name: "AgentDetails",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(Banner, {
  name: "Banner",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BarChart, {
  name: "BarChart",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BLockFeatureFive, {
  name: "BLockFeatureFive",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BLockFeatureFour, {
  name: "BLockFeatureFour",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BLockFeatureFour, {
  name: "BLockFeatureFour",
});

Builder.registerComponent(HomeOne, {
  name: "HomeOne",
});

Builder.registerComponent(HeaderOne, {
  name: "HeaderOne",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BLockFeatureFour, {
  name: "BLockFeatureFour",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(BLockFeatureFour, {
  name: "BLockFeatureFour",
});

Builder.registerComponent(AgentArea, {
  name: "AgentArea",
});

Builder.registerComponent(LoginForm, {
  name: "LoginForm",
  inputs: [
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
  ],
});

Builder.registerComponent(LoginModal, {
  name: "LoginModal",
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(RegisterForm, {
  name: "RegisterForm",
  inputs: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
  ],
});

Builder.registerComponent(HeaderTwo, {
  name: "HeaderTwo",
});
