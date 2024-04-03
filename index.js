

// using the actions and the reducers in our APP

import store from "./redux/app/store.js";
import { increase,decrease,reset } from "./redux/features/counter/counterSlice.js";



console.log("initial State",store.getState());
 
store.dispatch(increase());

console.log("Store after increase",store.getState().counter);



