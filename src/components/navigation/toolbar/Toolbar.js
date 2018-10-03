import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationitems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;