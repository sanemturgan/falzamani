import {
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
export default function GigEditable({ value, onClick }) {
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          backgroundColor="inherit"
          icon={<FaCheck color="green" size="16px" />}
          {...getSubmitButtonProps()}
          onClick={onClick}
        />

        <IconButton
          backgroundColor="inherit"
          icon={<FaTimes color="red" size="16px" />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="flex-end">
        <IconButton
          backgroundColor="inherit"
          size="sm"
          icon={<FaEdit color="#281c3b" size="16px" />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="left"
      defaultValue={value}
      fontSize="1xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  );
}
