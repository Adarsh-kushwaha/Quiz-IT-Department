import React  from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import { Divider } from '@material-ui/core';
import { Redirect } from 'react-router';


 export const mainListItems = (

    <div>
        <ListItem button >
            <ListItemIcon>
                <DonutSmallRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Performance" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <EmojiObjectsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Guide" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Updates" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
     
    

    <div style={{marginTop:"240px"}}>
        <Divider />
        <ListSubheader inset>Some More Info :</ListSubheader>
        <ListItem button onClick = {()=>{
            
                
                localStorage.clear();
                return <Redirect to="/login" />
        
        }}>
            <ListItemIcon>
                <LockRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <GroupAddRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Developers" />
        </ListItem>
        
    </div>
);

