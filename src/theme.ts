import { StepsStyleConfig } from "chakra-ui-steps"
import { darken } from "@chakra-ui/theme-tools"
import type { CSSObject } from "@chakra-ui/react"
import type { DeepPartial } from "ts-essentials"
import type { ChakraStylesConfig } from "chakra-react-select"
import type { SelectOption } from "./types"
import { tokens } from "@conveyorhq/design-tokens"

type CSSObjectWithActiveStep = CSSObject & { _activeStep: CSSObject }

const StepsTheme: typeof StepsStyleConfig = {
  ...StepsStyleConfig,
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      connector: {
        ...StepsStyleConfig.baseStyle(props).connector,
        borderColor: "background",
      },
      label: {
        ...StepsStyleConfig.baseStyle(props).label,
        color: "textColor",
      },
      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props).stepIconContainer,
        bg: "background",
        borderColor: "background",
        _activeStep: {
          ...(StepsStyleConfig.baseStyle(props).stepIconContainer! as CSSObjectWithActiveStep)._activeStep,
          bg: darken("background", 0.5),
        },
      },
    }
  },
}

const MatchIconTheme: any = {
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props).stepIconContainer,
      borderWidth: "2px",
      bg: "background",
      borderColor: "yellow.500",
      color: "background",
      transitionDuration: "ultra-fast",
    }
  },
  defaultProps: {
    size: "md",
    colorScheme: "green",
  },
}

export const themeOverrides = {
  fonts: {
    body: tokens.type.sans,
    mono: tokens.type.mono,
  },
  colors: {
    textColor: tokens.color.gray[800],
    subtitleColor: tokens.color.gray[700],
    inactiveColor: tokens.color.gray[500],
    border: tokens.color.border,
    background: tokens.color.white,
    backgroundAlpha: "rgba(255,255,255,0)",
    secondaryBackground: tokens.color.gray[100],
    highlight: tokens.color.gray[200],
    // rsi: {
    //   50: "#E6E6FF",
    //   100: "#C4C6FF",
    //   200: "#A2A5FC",
    //   300: "#8888FC",
    //   400: "#7069FA",
    //   500: "#5D55FA",
    //   600: "#4D3DF7",
    //   700: "#3525E6",
    //   800: "#1D0EBE",
    //   900: "#0C008C",
    // },
    rsi: {
      50: "rgba(51, 198, 159, 0.15)", // brandGreen[400]
      100: "rgba(51, 198, 159, 0.30)", // brandGreen[400]
      200: "rgba(51, 198, 159, 0.45)", // brandGreen[400]
      300: tokens.color.brandGreen[200],
      400: tokens.color.brandGreen[300],
      500: tokens.color.brandGreen[400],
      600: tokens.color.brandGreen[500],
      700: tokens.color.brandGreen[600],
      800: tokens.color.brandGreen[600],
      900: tokens.color.brandGreen[600],
    },
  },
  shadows: {
    outline: 0,
  },
  components: {
    UploadStep: {
      baseStyle: {
        heading: {
          fontSize: "3xl",
          color: "textColor",
          mb: "2rem",
        },
        title: {
          fontSize: "2xl",
          lineHeight: 8,
          color: "textColor",
        },
        subtitle: {
          fontSize: "md",
          lineHeight: 6,
          color: "subtitleColor",
          mb: "1rem",
        },
        tableWrapper: {
          mb: "0.5rem",
          position: "relative",
          h: "72px",
        },
        dropzoneText: {
          size: "lg",
          lineHeight: 7,
          color: "textColor",
        },
        dropZoneBorder: tokens.color.border,
        dropzoneButton: {
          mt: "1rem",
        },
      },
    },
    SelectSheetStep: {
      baseStyle: {
        heading: {
          color: "textColor",
          mb: 8,
          fontSize: "3xl",
        },
        radio: {},
        radioLabel: {
          color: "textColor",
        },
      },
    },
    SelectHeaderStep: {
      baseStyle: {
        heading: {
          color: "textColor",
          mb: 8,
          fontSize: "3xl",
        },
      },
    },
    MatchColumnsStep: {
      baseStyle: {
        heading: {
          color: "textColor",
          mb: 8,
          fontSize: "3xl",
        },
        title: {
          color: "textColor",
          fontSize: "2xl",
          lineHeight: 8,
          mb: 4,
        },
        userTable: {
          header: {
            fontSize: "xs",
            lineHeight: 4,
            fontWeight: tokens.fontWeight.medium,
            letterSpacing: "wider",
            color: "textColor",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            ["&[data-ignored]"]: {
              color: "inactiveColor",
            },
          },
          cell: {
            fontSize: "sm",
            lineHeight: 5,
            color: "textColor",
            px: 6,
            py: 4,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            ["&[data-ignored]"]: {
              color: "inactiveColor",
            },
          },
          ignoreButton: {
            size: "xs",
            colorScheme: "gray",
            color: "textColor",
          },
        },
        selectColumn: {
          text: {
            fontSize: "sm",
            lineHeight: 5,
            fontWeight: tokens.fontWeight.regular,
            color: "inactiveColor",
            px: 4,
          },
          accordionLabel: {
            color: tokens.color.link,
            fontSize: "sm",
            lineHeight: 5,
            pl: 1,
          },
          selectLabel: {
            pt: "0.375rem",
            pb: 2,
            fontSize: "md",
            lineHeight: 6,
            color: "textColor",
          },
        },
        select: {
          dropdownIndicator: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            w: "40px",
            color: "textColor",
          }),
          control: (provided) => ({
            ...provided,
            background: "none",
            borderRadius: "6px",
            p: 0,
            // _focus, _hover, _invalid, _readonly pseudoselectors can be used here for alternate border colors
            _focus: undefined,
          }),
          input: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            opacity: 0,
          }),
          singleValue: (provided) => ({
            ...provided,
            ml: 0,
            mr: 0,
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "inactiveColor",
          }),
          valueContainer: (provided) => ({
            ...provided,
            color: "textColor",
          }),
          menu: (provided) => ({
            ...provided,
            p: 0,
            mt: 0,
          }),
          menuList: (provided) => ({
            ...provided,
            bg: "background",
            minW: "initial",
          }),
          option: (provided, state) => ({
            ...provided,
            color: "textColor",
            bg: state.isSelected || state.isFocused ? "highlight" : provided.bg,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "nowrap",
            _hover: {
              bg: "highlight",
            },
          }),
        } as ChakraStylesConfig<SelectOption>,
      },
    },
    ValidationStep: {
      baseStyle: {
        heading: {
          color: "textColor",
          fontSize: "3xl",
        },
        select: {
          dropdownIndicator: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            w: "40px",
          }),
          control: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
            _focus: undefined,
          }),
          input: (provided) => ({
            ...provided,
            background: "none",
            border: "none",
            p: 0,
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            opacity: 0,
          }),
          singleValue: (provided) => ({
            ...provided,
            marginInlineStart: 0,
          }),
          valueContainer: (provided) => ({
            ...provided,
            p: 0,
            paddingInlineStart: 2,
            color: "gray.400",
          }),
          menu: (provided) => ({
            ...provided,
            p: 0,
            mt: 0,
          }),
          menuList: (provided) => ({
            ...provided,
            minW: "initial",
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "gray.900" : provided.color,
            bg: state.isSelected || state.isFocused ? "secondaryBackground" : provided.bg,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
            whiteSpace: "nowrap",
          }),
        } as ChakraStylesConfig<SelectOption>,
      },
    },
    MatchIcon: MatchIconTheme,
    Steps: StepsTheme,
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: tokens.borderRadius.DEFAULT,
          bg: "background",
          fontSize: "lg",
          color: "textColor",
        },
      },
      variants: {
        rsi: {
          header: {
            bg: "secondaryBackground",
            px: "2rem",
            py: "1.5rem",
          },
          body: {
            bg: "background",
            display: "flex",
            paddingX: "2rem",
            paddingY: "2rem",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
            height: "100%",
          },
          footer: {
            bg: "secondaryBackground",
            py: "1.5rem",
            justifyContent: "center",
          },
          dialog: {
            outline: "unset",
            minH: "calc(100vh - 4rem)",
            maxW: "calc(100vw - 4rem)",
            my: "2rem",
            borderRadius: "3xl",
            overflow: "hidden",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: tokens.fontWeight.regular,
        borderRadius: tokens.borderRadius.md,
      },
      defaultProps: {
        colorScheme: "rsi",
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: "rsi",
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "rsi",
      },
    },
    Switch: {
      defaultProps: {
        colorScheme: "rsi",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: tokens.fontWeight.medium,
      },
    },
  },
  styles: {
    global: {
      html: {
        "-webkit-font-smoothing": "initial",
        textRendering: "initial",
      },
      body: {
        bg: tokens.color.gray[100],
        color: tokens.color.gray[800],
        fontFamily: tokens.type.sans,
        fontSize: tokens.fontSize.body,
        lineHeight: 1.15,
        transitionProperty: "none",
        transitionDuration: "unset",
        fontFeatureSettings: "unset",
        position: "initial",
      },
      ".rdg": {
        contain: "size layout style paint",
        borderRadius: "lg",
        border: "none",
        borderTop: "1px solid var(--rdg-border-color)",
        blockSize: "100%",

        // we have to use vars here because chakra does not autotransform unknown props
        "--rdg-row-height": "35px",
        "--rdg-color": "var(--chakra-colors-textColor)",
        "--rdg-background-color": "var(--chakra-colors-background)",
        "--rdg-header-background-color": "var(--chakra-colors-background)",
        "--rdg-row-hover-background-color": "var(--chakra-colors-background)",
        "--rdg-selection-color": `${tokens.color.blue[400]}`,
        "--rdg-row-selected-background-color": `${tokens.color.blue[0]}`,
        "--row-selected-hover-background-color": `${tokens.color.blue[100]}`,
        "--rdg-error-cell-background-color": `${tokens.color.red[100]}`,
        "--rdg-warning-cell-background-color": `${tokens.color.gold[100]}`,
        "--rdg-info-cell-background-color": `${tokens.color.blue[100]}`,
        "--rdg-border-color": "var(--chakra-colors-border)",
        "--rdg-frozen-cell-box-shadow": "none",
        "--rdg-font-size": "var(--chakra-fontSizes-sm)",
      },
      ".rdg-header-row .rdg-cell": {
        color: "textColor",
        fontSize: "xs",
        lineHeight: 10,
        fontWeight: tokens.fontWeight.medium,
        letterSpacing: "wider",
        textTransform: "uppercase",
        "&:first-of-type": {
          borderTopLeftRadius: "lg",
        },
        "&:last-child": {
          borderTopRightRadius: "lg",
        },
      },
      ".rdg-row:last-child .rdg-cell:first-of-type": {
        borderBottomLeftRadius: "lg",
      },
      ".rdg-row:last-child .rdg-cell:last-child": {
        borderBottomRightRadius: "lg",
      },
      ".rdg[dir='rtl']": {
        ".rdg-row:last-child .rdg-cell:first-of-type": {
          borderBottomRightRadius: "lg",
          borderBottomLeftRadius: "none",
        },
        ".rdg-row:last-child .rdg-cell:last-child": {
          borderBottomLeftRadius: "lg",
          borderBottomRightRadius: "none",
        },
      },
      ".rdg-cell": {
        contain: "size layout style paint",
        borderRight: "none",
        borderInlineEnd: "none",
        borderBottom: "1px solid var(--rdg-border-color)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "&[aria-selected='true']": {
          boxShadow: "inset 0 0 0 1px var(--rdg-selection-color)",
        },
        "&:first-of-type": {
          borderInlineStart: "1px solid var(--rdg-border-color)",
        },
        "&:last-child": {
          borderInlineEnd: "1px solid var(--rdg-border-color)",
        },
      },
      ".rdg-cell-error": {
        backgroundColor: "var(--rdg-error-cell-background-color)",
      },
      ".rdg-cell-warning": {
        backgroundColor: "var(--rdg-warning-cell-background-color)",
      },
      ".rdg-cell-info": {
        backgroundColor: "var(--rdg-info-cell-background-color)",
      },
      ".rdg-static": {
        cursor: "pointer",
      },
      ".rdg-static .rdg-header-row": {
        display: "none",
      },
      ".rdg-static .rdg-cell": {
        "--rdg-selection-color": "none",
      },
      ".rdg-example .rdg-cell": {
        "--rdg-selection-color": "none",
        borderBottom: "none",
      },

      ".rdg-radio": {
        display: "flex",
        alignItems: "center",
      },
      ".rdg-checkbox": {
        "--rdg-selection-color": "none",
        display: "flex",
        alignItems: "center",
      },
    },
  },
} as const

export const rtlThemeSupport = {
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          direction: "rtl",
        },
      },
    },
  },
} as const

export type CustomTheme = DeepPartial<typeof themeOverrides>
