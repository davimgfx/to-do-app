import type { Meta, StoryObj } from "@storybook/react";

import { AddTodo } from ".";

const meta: Meta<typeof AddTodo> = {
  title: "components/Todo/AddTodo",
  component: AddTodo,
  args: {
    todoName: "Do the homework",
  },
};

export default meta;

type Story = StoryObj<typeof AddTodo>;

const template: Story = {
  render: () => <AddTodo />,
};

export const Default: Story = {
  ...template,
};

