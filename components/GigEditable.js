import {
  Editable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";

export default function GigEditable({ value }) {
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<p>check</p>} {...getSubmitButtonProps()} />
        <IconButton icon={<p>closes</p>} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<p>edit</p>} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="center"
      defaultValue={value}
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  );
}
