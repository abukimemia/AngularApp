export interface User {
  firstName: string;
  lastName: string;
  // question mark(?) makes the properties optional
  email: string;
  isActive?: boolean;
  balance?: number;
  registered?: any;
  hide?: boolean;
}
