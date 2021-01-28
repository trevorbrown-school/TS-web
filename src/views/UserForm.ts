import {User, UserProps} from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {

   
    
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:#setage': this.randomizeAge,
            'click:#setname': this.setName,
            'click:#saveuser': this.saveUser,
        }
    }


    randomizeAge = (): void => {
        this.model.randomizeAge();
    }
    setName = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            this.model.set({ name: input.value });
        }
    }

    saveUser = (): void => {
        this.model.save();
    }

    template(): string {
        return `
        <div>
            <input placeholder="${this.model.get('name')}"/>
            <button id="setname">Change Name</button>
            <button id="setage">Set Random Age</button>
            <button id="saveuser">Save User</button>
        </div>
        `;
    }

    
}