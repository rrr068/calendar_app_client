import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Text, } from "@chakra-ui/react";

export const CreateEventModal = ({ isOpen, onClose, createEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const clearEvent = () => {
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        
        <ModalHeader>イベントを追加</ModalHeader>
        <ModalCloseButton />

          <ModalBody>
            <Text fontWhight="bold">タイトル</Text>
            <Input placeholder="タイトル" value={title} onChange={(event) => setTitle(event.target.value)} mb="16" />
            <Text fontWeight="bold">内容</Text>
            <Input placeholder="内容" value={description} onChange={(event) => setDescription(event.target.value)} mb="16px" />
            <Text fontWeight="bold">予定開始日</Text>
            <Input value={startDate} type="date" mb="16px" onChange={(e) => setStartDate(e.target.value)} />
            <Text fontWeight="bold">予定終了日</Text>
            <Input value={endDate} type="date" mb="16px" onChange={(e) => setEndDate(e.target.value)} />
          </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={() => {
            createEvent({ title, description, startDate, endDate });
            clearEvent();
            onClose();
          }}
          >イベント追加</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};