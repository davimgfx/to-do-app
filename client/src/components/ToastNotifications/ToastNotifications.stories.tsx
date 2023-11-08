import type { Meta, StoryObj } from "@storybook/react";

import { ToastNotifications } from ".";

const meta: Meta<typeof ToastNotifications> = {
  title: "components/ToastNotifications",
  component: ToastNotifications,
  args: {
    type: "success",
  },
};

export default meta;

type Story = StoryObj<typeof ToastNotifications>;

const template: Story = {
  render: (args) => <ToastNotifications {...args} />,
};

export const Default: Story = {
  ...template,
};

export const SuccessToast: Story = {
  args: {
    type: "success",
  },
};

export const ErrorToast: Story = {
  args: {
    type: "error",
  },
};

export const WarningToast: Story = {
  args: {
    type: "warning",
  },
};

export const InfoToast: Story = {
  args: {
    type: "info",
  },
};
