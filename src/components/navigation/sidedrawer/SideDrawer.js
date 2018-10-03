import React from 'react';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationitems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )};

export default sideDrawer;