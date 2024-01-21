import React from "react";
import Modal from "./Modal";
import { Info, Warning } from "../Icon/Icons";
import {
  ModalContent,
  ModalFooterButtons,
  ModalHeader,
} from "@/vibe/components";

const Icon = {
  danger: Warning,
  info: Info,
};

const IconColor = {
  danger: "red",
  info: "blue",
};

export const ConfirmationModal = ({
  show,
  close,
  title,
  description,
  openModalButtonRef,
  onConfirm,
  type = "danger",
}: {
  show: boolean;
  close: () => void;
  title: string;
  description?: string;
  openModalButtonRef?: React.RefObject<HTMLButtonElement>;
  onConfirm: () => void;
  type?: "info" | "danger";
}) => {
  return (
    <Modal
      id={"story-book-modal"}
      title="Modal header with an Icon"
      triggerElement={openModalButtonRef?.current ?? null}
      show={show}
      onClose={close}
      closeButtonAriaLabel={"close"}
      width={Modal.width.DEFAULT}
      contentSpacing
    >
      <ModalHeader title={title} iconColor={IconColor[type]} icon={Icon[type]} iconSize={32} />
      {description && <ModalContent>{description}</ModalContent>}
      <ModalFooterButtons
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        onPrimaryButtonClick={onConfirm}
        onSecondaryButtonClick={close}
      />
    </Modal>
  );
};
