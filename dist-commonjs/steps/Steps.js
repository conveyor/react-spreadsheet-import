'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var UploadFlow = require('./UploadFlow.js');
var react = require('@chakra-ui/react');
var chakraUiSteps = require('chakra-ui-steps');
var cg = require('react-icons/cg');
var useRsi = require('../hooks/useRsi.js');

const CheckIcon = ({ color }) => jsxRuntime.jsx(cg.CgCheck, { size: "2.25rem", color: color });
const steps = ["uploadStep", "selectHeaderStep", "matchColumnsStep", "validationStep"];
const Steps = () => {
    const { translations } = useRsi.useRsi();
    const { nextStep, activeStep } = chakraUiSteps.useSteps({
        initialStep: 0,
    });
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(react.ModalHeader, { display: ["none", "none", "block"], children: jsxRuntime.jsx(chakraUiSteps.Steps, { activeStep: activeStep, checkIcon: CheckIcon, children: steps.map((key) => (jsxRuntime.jsx(chakraUiSteps.Step, { label: translations[key].title }, key))) }) }), jsxRuntime.jsx(UploadFlow.UploadFlow, { nextStep: nextStep })] }));
};

exports.Steps = Steps;
