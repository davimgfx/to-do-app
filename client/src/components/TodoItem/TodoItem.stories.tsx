import type { Meta, StoryObj } from "@storybook/react";

import { TodoItem } from ".";

const meta: Meta<typeof TodoItem> = {
  title: "components/Todo/TodoItem",
  component: TodoItem,
  args: {
    todoName: "Do the homework",
  },
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

const template: Story = {
  render: (args) => <TodoItem {...args} />,
};

export const Default: Story = {
  ...template,
};

