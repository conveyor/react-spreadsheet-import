import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
  Box,
} from "@chakra-ui/react"
import { useRef } from "react"
import { useRsi } from "../../hooks/useRsi"

interface Props {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  fields: string[]
}

export const UnmatchedFieldsAlert = ({ isOpen, onClose, onConfirm, fields }: Props) => {
  const { allowInvalidSubmit, translations } = useRsi()
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef} isCentered id="rsi">
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight={500}>
            {translations.alerts.unmatchedRequiredFields.headerTitle}
          </AlertDialogHeader>
          <AlertDialogBody>
            {allowInvalidSubmit
              ? translations.alerts.unmatchedRequiredFields.bodyText
              : translations.alerts.unmatchedRequiredFields.bodyTextSubmitForbidden}
            <Box pt={3}>
              <Text display="inline">{translations.alerts.unmatchedRequiredFields.listTitle}</Text>
              <Text display="inline" fontWeight={500}>
                {" "}
                {fields.join(", ")}
              </Text>
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="secondary">
              {allowInvalidSubmit
                ? translations.alerts.unmatchedRequiredFields.cancelButtonTitle
                : translations.alerts.unmatchedRequiredFields.cancelButtonTitleSubmitForbidden}
            </Button>
            {allowInvalidSubmit && (
              <Button onClick={onConfirm} ml={3}>
                {translations.alerts.unmatchedRequiredFields.continueButtonTitle}
              </Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
