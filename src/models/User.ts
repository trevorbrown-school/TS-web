import axios, {AxiosResponse} from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { APISync } from './APISync';
import { Collection } from "./Collection";

export interface UserProps {   
    id?: number;
    name?: string; 
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {


    static buildUser(attrs: UserProps) {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new APISync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
    }

    randomizeAge(): void {
        this.set({ age: Math.round(Math.random() * 100) });
        
    }
}
