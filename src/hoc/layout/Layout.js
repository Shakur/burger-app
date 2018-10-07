import React, {Component} from 'react';
import Aux from '../aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/navigation/toolbar/Toolbar';

class Layout extends Component {

    render() {
        return (
            <Aux>
            <Toolbar />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }

}


export default Layout;