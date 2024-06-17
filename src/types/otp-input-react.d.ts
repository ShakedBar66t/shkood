declare module 'otp-input-react' {
    import React from 'react';
  
    export interface OtpInputProps {
      value: string;
      onChange: (value: string) => void;
      OTPLength: number;
      otpType: 'number' | 'text';
      disabled: boolean;
      autofocus: boolean;
      className?: string;
    }
  
    const OtpInput: React.FC<OtpInputProps>;
  
    export default OtpInput;
  }
  