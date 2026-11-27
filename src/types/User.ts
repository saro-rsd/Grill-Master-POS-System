export type Role = 'admin' | 'cashier';

export interface User{
    id :  string;
    name : string;
    username : string;
    role : Role
}