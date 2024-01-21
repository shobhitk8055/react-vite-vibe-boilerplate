import { Meta, Story } from "@storybook/react";
import * as React from "react";

import { useDisclosure } from "@/hooks/useDisclosure";

import { Button, ModalContent, ModalFooterButtons, ModalHeader } from "@/vibe/components";

import Modal, { useHelperOpenModalButton } from "./Modal";
import { Upgrade, Warning } from "../Icon/Icons";

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
      <Button ref={buttonRef} onClick={open}>Open Modal</Button>
      <Modal
        contentSpacing
        id="story-book-modal"
        onClose={close}
        title="Modal title"
        triggerElement={buttonRef.current}
        show={isOpen}
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
  const { close, open, isOpen } = useDisclosure();
  const openModalButtonRef = React.useRef<HTMLButtonElement>(null);
  const openModalButton = useHelperOpenModalButton({
    title: "Header with icon",
    open,
    openModalButtonRef,
  });
  return (
    <div>
      {openModalButton}
      <Modal
        id={"story-book-modal"}
        title="Modal header with an Icon"
        triggerElement={openModalButtonRef.current}
        show={isOpen}
        onClose={close}
        closeButtonAriaLabel={"close"}
        width={Modal.width.DEFAULT}
        contentSpacing
      >
        <ModalHeader title={"Modal Heading"} iconColor="red" icon={Warning} iconSize={32} />
        <ModalContent>Modal content goes here</ModalContent>
        <ModalFooterButtons
          primaryButtonText="Confirm"
          secondaryButtonText="Cancel"
          onPrimaryButtonClick={close}
          onSecondaryButtonClick={close}
        />
      </Modal>
    </div>
  );
};
