import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
    
    template(): string {
        return (`
        <div>
            <h1>User Detail</h1>
            <h4>User Name: ${this.model.get('name')}</h4>
            <h4>User Age: ${this.model.get('age')}</h4>
        </div>
        `);
    }
    
}