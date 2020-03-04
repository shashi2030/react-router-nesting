import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Link1 from './Pages/Link1';
import Link2 from './Pages/Link2';
import Link3 from './Pages/Link3';
const Nav = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/link1`}>Link 1</Link>
                </li>
                <li>
                    <Link to={`${url}/link2`}>Link 2</Link>
                </li>
                <li>
                    <Link to={`${url}/link3`}>Link 3</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/link1`}>
                    <Link1 />
                </Route>
                <Route path={`${path}/link2`}>
                    <Link2 />
                </Route>
                <Route path={`${path}/link3`}>
                    <Link3 />
                </Route>
            </Switch>

        </div>
    )
}

export default Nav;