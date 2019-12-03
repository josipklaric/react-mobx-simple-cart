import React from "react";
import Cart from "./Cart";
import { inject, observer } from "mobx-react";

@inject('coursesStore')
@observer
class App extends React.Component {

    render() {
        return <div>App</div>
    }
}

export default App;