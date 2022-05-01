import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Agenda from './Agenda'

class Content extends React.Component {
    render() {
        return (
    <main>
        Conteúdo
        <hr></hr>
        <Switch>
        <Route path="/agenda">
            <Agenda />
        </Route>
        <Route path="/agenda" render={ (props) => <Agenda {...props} />} />
        </Switch>
        <hr></hr>
        Final do conteúdo
    </main>
        )
    }
}

export default Content;