import type { Meta, StoryObj } from "@storybook/react";

import Pokemon from "@/rsc/Pokemon";

const meta = {
  title: "RSC",
  component: Pokemon,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Pokemon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
