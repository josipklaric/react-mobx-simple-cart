import { observable, action, runInAction, toJS } from "mobx";
import axios from "axios";

export default class CartStore {

    @observable cartItems = [];

    constructor(){
        this.cartItems.intercept((change) => {

            if(change.removedCount > 0){
                console.log('>> CartStore > intercept > removing items ... return original change');
                return change;
            }

            var idSet = new Set(toJS(this.cartItems).map(c => c.id));

            if(idSet.has(change.added[0].id))
            {
                // prevent adding same item multiple times
                console.log('>> CartStore > intercept > return NULL');
                return null;
            }
            console.log('>> CartStore > intercept > return original change');
            return change
        });
    }

    @action
    addToCart = (course) => {
        console.log('>> CartStore > addToCart > course: ', course);
        this.cartItems.push(course);
    }

    @action
    removeFromCart = (course) => {
        //console.log('>> CartStore > removeFromCart > course: ', course);
        var tempList = this.cartItems.filter(function(item) {
            return item.id !== course.id;
        });
        this.cartItems.replace(tempList);
    }
    
    @action
    clearCart = () => {
        console.log('>> CartStore > clearCart ..');
        this.cartItems.replace([]);
    }
}