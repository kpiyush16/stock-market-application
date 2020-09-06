import { Contact } from './contact';

export class User {
    id:number;
    username:string;
    password:string;
    userType:string;
    confirmed:number;
    contact:Contact;
    token:string;
}
