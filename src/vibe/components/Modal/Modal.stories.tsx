import { Meta, Story } from "@storybook/react";
import * as React from "react";

import { useDisclosure } from "@/hooks/useDisclosure";

import {
  Button,
  ModalContent,
  ModalFooterButtons,
} from "@/vibe/components";

import Modal from "./Modal";
import { ConfirmationModal } from "./ConfirmationModal";

const meta: Meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Normal: Story = () => {
  const { close, open, isOpen } = useDisclosure();
  const buttonRef = React.useRef(null);

  return (
    <>
      <Button ref={buttonRef} onClick={open}>
        Open Modal
      </Button>
      <Modal
        contentSpacing
        id="story-book-modal"
        onClose={close}
        title="Modal title"
        triggerElement={buttonRef.current}
        show={isOpen}
        width={'full_width'}
      >
        <ModalContent>
          <p>Modal content goes here</p>
        </ModalContent>
        <ModalFooterButtons
          onPrimaryButtonClick={function noRefCheck() {}}
          onSecondaryButtonClick={close}
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
        />
      </Modal>
    </>
  );
};

export const Confirmation: Story = () => {
  const openModalButtonRef = React.useRef<HTMLButtonElement>(null);
  const { close, open, isOpen } = useDisclosure();

  return (
    <>
      <Button ref={openModalButtonRef} onClick={open}>
        Confirm Button
      </Button>
      <ConfirmationModal
        title="Confirmation"
        description="Are you sure you want to do this ?"
        show={isOpen}
        close={close}
        openModalButtonRef={openModalButtonRef}
        type="danger"
        onConfirm={() => {
            console.log("confirm clicked");
            close();
        }}
      />
    </>
  );
};
