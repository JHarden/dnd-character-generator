import * as React from "react";

import { TEST } from '../config/constants';
import { Button } from "./Button";
import '../styles/sass/navigation.scss';

export interface NavigationProps { 
    
}

function handleNavClick(){
    console.log('clicked this button');
}

export class Navigation extends React.Component<NavigationProps, {}> {
    render() {
        return(         
            <nav className="navigation">   
                <div className='nav-item'>
                        <Button onClick={handleNavClick} name="About"/>
                </div>        
                    <div className='nav-item'>
                        <Button onClick={handleNavClick} name="Work"/>
                </div>    
                    <div className='nav-item'>
                        <Button onClick={handleNavClick} name="Life"/>
                </div>    
           </nav>
        );
    }
}