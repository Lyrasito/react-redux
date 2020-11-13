import configureStore from "./configureStore";
import { loadUsers } from "./users";

const store = configureStore();

store.dispatch(loadUsers());
