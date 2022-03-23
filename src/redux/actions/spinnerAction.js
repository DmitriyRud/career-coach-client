import { DISABLE_SPINNER, ENABLE_SPINNER } from '../types/spinner';

export const enableSpinner = () => ({
  type: ENABLE_SPINNER,
});

export const disableSpinner = () => ({
  type: DISABLE_SPINNER,
});
