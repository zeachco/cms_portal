import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import { RouteChildrenProps } from "react-router";
import { app } from "./models/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { changeLanguage } from "./store/actions/i18n";
import { setCurrentRoute } from "./store/actions/router";
import { initialize } from "./store/actions/session";
import "./theme/style.scss";

(window as any).app = app;

const mount = () => {
    const App = require("./containers/App").default;

    interface IProps {
        match: object;
        isExact?: boolean;
    }

    const RouterRegisterer = ({ match }: RouteChildrenProps): React.FC<IProps> => {
        if (match === null) {
            return <div />;
        }
        if (match.isExact) {
            setCurrentRoute(match.params);
        }
        return <div />;
    };

    render(
        // <Provider store={store}>
        //     <Router>
        //         <div id="tclApp">
        //             <Route exact path={"/"} component={RouterRegisterer} />
        //             <Route exact path={"/:page"} component={RouterRegisterer} />
        //             <Route exact path={"/:page/edit/:id"} component={RouterRegisterer} />
        //             <Route exact path={"/:page/search/:field/:value"} component={RouterRegisterer} />
        //             <App />
        //         </div>
        //     </Router>
        // </Provider>,
        <App />,
        document.getElementById("root"),
    );
};

mount();
initialize();

if (navigator && navigator.languages) {
    changeLanguage(navigator.languages[0].split("-")[0]);
}

if (module.hot) {
    module.hot.accept("./containers/App", mount);
}

registerServiceWorker();
