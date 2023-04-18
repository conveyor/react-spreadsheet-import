import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { UploadFlow } from './UploadFlow.js';
import { ModalHeader } from '@chakra-ui/react';
import { useSteps, Steps as Steps$1, Step } from 'chakra-ui-steps';
import { CgCheck } from 'react-icons/cg';
import { useRsi } from '../hooks/useRsi.js';

const CheckIcon = ({ color }) => jsx(CgCheck, { size: "2.25rem", color: color });
const steps = ["uploadStep", "selectHeaderStep", "matchColumnsStep", "validationStep"];
const Steps = () => {
    const { translations } = useRsi();
    const { nextStep, activeStep } = useSteps({
        initialStep: 0,
    });
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { display: ["none", "none", "block"], children: jsx(Steps$1, { activeStep: activeStep, checkIcon: CheckIcon, children: steps.map((key) => (jsx(Step, { label: translations[key].title }, key))) }) }), jsx(UploadFlow, { nextStep: nextStep })] }));
};

export { Steps };
