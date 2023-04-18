import type { DeepPartial } from "ts-essentials";
import type { ChakraStylesConfig } from "chakra-react-select";
import type { SelectOption } from "./types";
export declare const themeOverrides: {
    readonly fonts: {
        readonly body: string;
        readonly mono: string;
    };
    readonly colors: {
        readonly textColor: string;
        readonly subtitleColor: string;
        readonly inactiveColor: string;
        readonly border: string;
        readonly background: string;
        readonly backgroundAlpha: "rgba(255,255,255,0)";
        readonly secondaryBackground: string;
        readonly highlight: string;
        readonly rsi: {
            readonly 50: "rgba(51, 198, 159, 0.15)";
            readonly 100: "rgba(51, 198, 159, 0.30)";
            readonly 200: "rgba(51, 198, 159, 0.45)";
            readonly 300: string;
            readonly 400: string;
            readonly 500: string;
            readonly 600: string;
            readonly 700: string;
            readonly 800: string;
            readonly 900: string;
        };
    };
    readonly shadows: {
        readonly outline: 0;
    };
    readonly components: {
        readonly UploadStep: {
            readonly baseStyle: {
                readonly heading: {
                    readonly fontSize: "3xl";
                    readonly color: "textColor";
                    readonly mb: "2rem";
                };
                readonly title: {
                    readonly fontSize: "2xl";
                    readonly lineHeight: 8;
                    readonly color: "textColor";
                };
                readonly subtitle: {
                    readonly fontSize: "md";
                    readonly lineHeight: 6;
                    readonly color: "subtitleColor";
                    readonly mb: "1rem";
                };
                readonly tableWrapper: {
                    readonly mb: "0.5rem";
                    readonly position: "relative";
                    readonly h: "72px";
                };
                readonly dropzoneText: {
                    readonly size: "lg";
                    readonly lineHeight: 7;
                    readonly color: "textColor";
                };
                readonly dropZoneBorder: string;
                readonly dropzoneButton: {
                    readonly mt: "1rem";
                };
            };
        };
        readonly SelectSheetStep: {
            readonly baseStyle: {
                readonly heading: {
                    readonly color: "textColor";
                    readonly mb: 8;
                    readonly fontSize: "3xl";
                };
                readonly radio: {};
                readonly radioLabel: {
                    readonly color: "textColor";
                };
            };
        };
        readonly SelectHeaderStep: {
            readonly baseStyle: {
                readonly heading: {
                    readonly color: "textColor";
                    readonly mb: 8;
                    readonly fontSize: "3xl";
                };
            };
        };
        readonly MatchColumnsStep: {
            readonly baseStyle: {
                readonly heading: {
                    readonly color: "textColor";
                    readonly mb: 8;
                    readonly fontSize: "3xl";
                };
                readonly title: {
                    readonly color: "textColor";
                    readonly fontSize: "2xl";
                    readonly lineHeight: 8;
                    readonly mb: 4;
                };
                readonly userTable: {
                    readonly header: {
                        readonly fontSize: "xs";
                        readonly lineHeight: 4;
                        readonly fontWeight: number;
                        readonly letterSpacing: "wider";
                        readonly color: "textColor";
                        readonly overflow: "hidden";
                        readonly whiteSpace: "nowrap";
                        readonly textOverflow: "ellipsis";
                        readonly "&[data-ignored]": {
                            readonly color: "inactiveColor";
                        };
                    };
                    readonly cell: {
                        readonly fontSize: "sm";
                        readonly lineHeight: 5;
                        readonly color: "textColor";
                        readonly px: 6;
                        readonly py: 4;
                        readonly overflow: "hidden";
                        readonly whiteSpace: "nowrap";
                        readonly textOverflow: "ellipsis";
                        readonly "&[data-ignored]": {
                            readonly color: "inactiveColor";
                        };
                    };
                    readonly ignoreButton: {
                        readonly size: "xs";
                        readonly colorScheme: "gray";
                        readonly color: "textColor";
                    };
                };
                readonly selectColumn: {
                    readonly text: {
                        readonly fontSize: "sm";
                        readonly lineHeight: 5;
                        readonly fontWeight: number;
                        readonly color: "inactiveColor";
                        readonly px: 4;
                    };
                    readonly accordionLabel: {
                        readonly color: string;
                        readonly fontSize: "sm";
                        readonly lineHeight: 5;
                        readonly pl: 1;
                    };
                    readonly selectLabel: {
                        readonly pt: "0.375rem";
                        readonly pb: 2;
                        readonly fontSize: "md";
                        readonly lineHeight: 6;
                        readonly color: "textColor";
                    };
                };
                readonly select: ChakraStylesConfig<SelectOption, boolean, import("chakra-react-select").GroupBase<SelectOption>>;
            };
        };
        readonly ValidationStep: {
            readonly baseStyle: {
                readonly heading: {
                    readonly color: "textColor";
                    readonly fontSize: "3xl";
                };
                readonly select: ChakraStylesConfig<SelectOption, boolean, import("chakra-react-select").GroupBase<SelectOption>>;
            };
        };
        readonly MatchIcon: any;
        readonly Steps: {
            parts: ("icon" | "label" | "step" | "description" | "iconLabel" | "steps" | "connector" | "stepIconContainer" | "labelContainer" | "stepContainer")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Omit<import("@chakra-ui/theme-tools").Anatomy<"icon" | "label" | "step" | "description" | "iconLabel" | "steps" | "connector" | "stepIconContainer" | "labelContainer" | "stepContainer">, "parts">>;
            sizes: {
                sm: {
                    stepIconContainer: {
                        width: string;
                        height: string;
                        borderWidth: string;
                    };
                    icon: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                    description: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                };
                md: {
                    stepIconContainer: {
                        width: string;
                        height: string;
                        borderWidth: string;
                    };
                    icon: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                    description: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                };
                lg: {
                    stepIconContainer: {
                        width: string;
                        height: string;
                        borderWidth: string;
                    };
                    icon: {
                        width: string;
                        height: string;
                    };
                    label: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                    description: {
                        fontWeight: string;
                        textAlign: string;
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        readonly Modal: {
            readonly baseStyle: {
                readonly dialog: {
                    readonly borderRadius: string;
                    readonly bg: "background";
                    readonly fontSize: "lg";
                    readonly color: "textColor";
                };
            };
            readonly variants: {
                readonly rsi: {
                    readonly header: {
                        readonly bg: "secondaryBackground";
                        readonly px: "2rem";
                        readonly py: "1.5rem";
                    };
                    readonly body: {
                        readonly bg: "background";
                        readonly display: "flex";
                        readonly paddingX: "2rem";
                        readonly paddingY: "2rem";
                        readonly flexDirection: "column";
                        readonly flex: 1;
                        readonly overflow: "auto";
                        readonly height: "100%";
                    };
                    readonly footer: {
                        readonly bg: "secondaryBackground";
                        readonly py: "1.5rem";
                        readonly justifyContent: "center";
                    };
                    readonly dialog: {
                        readonly outline: "unset";
                        readonly minH: "calc(100vh - 4rem)";
                        readonly maxW: "calc(100vw - 4rem)";
                        readonly my: "2rem";
                        readonly borderRadius: "3xl";
                        readonly overflow: "hidden";
                    };
                };
            };
        };
        readonly Button: {
            readonly baseStyle: {
                readonly fontWeight: number;
                readonly borderRadius: string;
            };
            readonly defaultProps: {
                readonly colorScheme: "rsi";
            };
        };
        readonly Radio: {
            readonly defaultProps: {
                readonly colorScheme: "rsi";
            };
        };
        readonly Checkbox: {
            readonly defaultProps: {
                readonly colorScheme: "rsi";
            };
        };
        readonly Switch: {
            readonly defaultProps: {
                readonly colorScheme: "rsi";
            };
        };
        readonly Heading: {
            readonly baseStyle: {
                readonly fontWeight: number;
            };
        };
    };
    readonly styles: {
        readonly global: {
            readonly html: {
                readonly "-webkit-font-smoothing": "initial";
                readonly textRendering: "initial";
            };
            readonly body: {
                readonly bg: string;
                readonly color: string;
                readonly fontFamily: string;
                readonly fontSize: string;
                readonly lineHeight: 1.15;
                readonly transitionProperty: "none";
                readonly transitionDuration: "unset";
                readonly fontFeatureSettings: "unset";
                readonly position: "initial";
            };
            readonly ".rdg": {
                readonly contain: "size layout style paint";
                readonly borderRadius: "lg";
                readonly border: "none";
                readonly borderTop: "1px solid var(--rdg-border-color)";
                readonly blockSize: "100%";
                readonly "--rdg-row-height": "35px";
                readonly "--rdg-color": "var(--chakra-colors-textColor)";
                readonly "--rdg-background-color": "var(--chakra-colors-background)";
                readonly "--rdg-header-background-color": "var(--chakra-colors-background)";
                readonly "--rdg-row-hover-background-color": "var(--chakra-colors-background)";
                readonly "--rdg-selection-color": string;
                readonly "--rdg-row-selected-background-color": string;
                readonly "--row-selected-hover-background-color": string;
                readonly "--rdg-error-cell-background-color": string;
                readonly "--rdg-warning-cell-background-color": string;
                readonly "--rdg-info-cell-background-color": string;
                readonly "--rdg-border-color": "var(--chakra-colors-border)";
                readonly "--rdg-frozen-cell-box-shadow": "none";
                readonly "--rdg-font-size": "var(--chakra-fontSizes-sm)";
            };
            readonly ".rdg-header-row .rdg-cell": {
                readonly color: "textColor";
                readonly fontSize: "xs";
                readonly lineHeight: 10;
                readonly fontWeight: number;
                readonly letterSpacing: "wider";
                readonly textTransform: "uppercase";
                readonly "&:first-of-type": {
                    readonly borderTopLeftRadius: "lg";
                };
                readonly "&:last-child": {
                    readonly borderTopRightRadius: "lg";
                };
            };
            readonly ".rdg-row:last-child .rdg-cell:first-of-type": {
                readonly borderBottomLeftRadius: "lg";
            };
            readonly ".rdg-row:last-child .rdg-cell:last-child": {
                readonly borderBottomRightRadius: "lg";
            };
            readonly ".rdg[dir='rtl']": {
                readonly ".rdg-row:last-child .rdg-cell:first-of-type": {
                    readonly borderBottomRightRadius: "lg";
                    readonly borderBottomLeftRadius: "none";
                };
                readonly ".rdg-row:last-child .rdg-cell:last-child": {
                    readonly borderBottomLeftRadius: "lg";
                    readonly borderBottomRightRadius: "none";
                };
            };
            readonly ".rdg-cell": {
                readonly contain: "size layout style paint";
                readonly borderRight: "none";
                readonly borderInlineEnd: "none";
                readonly borderBottom: "1px solid var(--rdg-border-color)";
                readonly whiteSpace: "nowrap";
                readonly overflow: "hidden";
                readonly textOverflow: "ellipsis";
                readonly "&[aria-selected='true']": {
                    readonly boxShadow: "inset 0 0 0 1px var(--rdg-selection-color)";
                };
                readonly "&:first-of-type": {
                    readonly borderInlineStart: "1px solid var(--rdg-border-color)";
                };
                readonly "&:last-child": {
                    readonly borderInlineEnd: "1px solid var(--rdg-border-color)";
                };
            };
            readonly ".rdg-cell-error": {
                readonly backgroundColor: "var(--rdg-error-cell-background-color)";
            };
            readonly ".rdg-cell-warning": {
                readonly backgroundColor: "var(--rdg-warning-cell-background-color)";
            };
            readonly ".rdg-cell-info": {
                readonly backgroundColor: "var(--rdg-info-cell-background-color)";
            };
            readonly ".rdg-static": {
                readonly cursor: "pointer";
            };
            readonly ".rdg-static .rdg-header-row": {
                readonly display: "none";
            };
            readonly ".rdg-static .rdg-cell": {
                readonly "--rdg-selection-color": "none";
            };
            readonly ".rdg-example .rdg-cell": {
                readonly "--rdg-selection-color": "none";
                readonly borderBottom: "none";
            };
            readonly ".rdg-radio": {
                readonly display: "flex";
                readonly alignItems: "center";
            };
            readonly ".rdg-checkbox": {
                readonly "--rdg-selection-color": "none";
                readonly display: "flex";
                readonly alignItems: "center";
            };
        };
    };
};
export declare const rtlThemeSupport: {
    readonly components: {
        readonly Modal: {
            readonly baseStyle: {
                readonly dialog: {
                    readonly direction: "rtl";
                };
            };
        };
    };
};
export declare type CustomTheme = DeepPartial<typeof themeOverrides>;
