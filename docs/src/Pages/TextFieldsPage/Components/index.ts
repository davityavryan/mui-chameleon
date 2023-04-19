import { lazy } from 'react';

const IconsTextFields = lazy(() => import('./IconsTextFields/IconsTextFields'));
const InputAdornmentsTextFields = lazy(() => import('./InputAdornmentsTextFields/InputAdornmentsTextFields'));
const MultilineTextFields = lazy(() => import('./MultilineTextFields/MultilineTextFields'));
const VariantsTextFields = lazy(() => import('./VariantsTextFields/VariantsTextFields'));

export { IconsTextFields, InputAdornmentsTextFields, MultilineTextFields, VariantsTextFields };
