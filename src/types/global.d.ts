export {};

declare global {
  interface Window {
    recaptchaVerifier: any;
    recaptchaWidgetId: any;
    confirmationResult: any;
  }
}
