import React, { useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { useNavigate } from 'react-router-dom';

import { AppBar } from 'components/appbar';
import { SideBar } from 'components/sidebar';
import { DashBoardStyles } from './styles'


function DashBoardPage(props) {

    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate()

    onAuthStateChanged(auth, user=>{
        if(user){
            setIsUser(true)
        }
        else{
            setIsUser(false)
            //login page
            navigator('/')
        }
    })

    if(isUser){
        return (
            <>
                <AppBar/>
                <DashBoardStyles>
                    <SideBar/>
                </DashBoardStyles>
            </>
        )
    }
    else{
        return null
    }

}

export default DashBoardPage;