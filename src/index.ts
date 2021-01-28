import { UserForm } from "./views/UserForm";
import { User } from './models/User';

const user = User.buildUser({ name: "NAME", age: 20 });
const root = document.getElementById('root');
if (root) {
    const form = new UserForm(root, user);   
    form.render();
} else {
    throw new Error("Root element not found.");
}