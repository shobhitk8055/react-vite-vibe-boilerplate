import { Meta, Story } from "@storybook/react";
import * as React from "react";

import { useDisclosure } from "@/hooks/useDisclosure";

import { Button } from "../Button";

import { DialogBox } from "./DialogBox";

const meta: Meta = {
  title: "Examples/DialogBox",
  component: DialogBox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Demo: Story = () => {
  const { close, open, isOpen } = useDisclosure();
  const cancelButtonRef = React.useRef(null);

  return <Button onClick={open}>Open Modal</Button>;
};
