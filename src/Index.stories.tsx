import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@wds-ui/label";
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Marbella/Switch",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <div className="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
