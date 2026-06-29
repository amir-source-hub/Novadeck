declare module '@/components/ui/button' {
  const Button: any;
  export { Button };
}

declare module '@/components/ui/input' {
  const Input: any;
  export { Input };
}

declare module '@/components/ui/label' {
  const Label: any;
  export { Label };
}

declare module '@/components/ui/input-otp' {
  const InputOTP: any;
  const InputOTPGroup: any;
  const InputOTPSlot: any;
  const InputOTPSeparator: any;
  export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
}

declare module 'three' {
  const THREE: any;
  export = THREE;
}

declare module '@base44/sdk' {
  const createClient: any;
  export { createClient };
}
