import { User } from "./User";
import { Book } from "./Book";

export interface Loan {
    id: string;
    user: User;
    book: Book;
    loanDate: Date;
    dueDate: Date;
    returnedDate: Date;
}