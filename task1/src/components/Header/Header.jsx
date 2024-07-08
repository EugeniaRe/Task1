import "./Header.css";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <header>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal isOpen={isModalOpen}>
        <p>This is Modal!</p>
        <p>It will be closed after 3 sec</p>
      </Modal>
    </header>
  );
}
