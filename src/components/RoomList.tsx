import React, { Component } from "react";
import { List, Typography } from 'antd';
import { RoomProps } from '../types/Room.type'

import style from './css/RoomList.module.css'

interface Roomlist {
    state: {
        rooms:RoomProps[],
    }
}
class Roomlist extends Component {
    constructor ( props:any ) {
        super( props )
        this.state = {
            rooms: [
                {
                    id: '8seh1rs51n6xnre19',
                    name: 'Bananinha kkkk',
                    config: {
                        hand_count: 8,
                        max_players: 10
                    },
                    state: {
                        player_count: 2,
                        players: ['e5b15be5beb151', '9b4eb51seb+5e1b'],
                        black_stack: [],
                        white_used: []
                    }
                },
                {
                    id: '8seh1rs51n6xnre19',
                    name: 'Bananinha kkkk',
                    config: {
                        hand_count: 8,
                        max_players: 10
                    },
                    state: {
                        player_count: 2,
                        players: ['e5b15be5beb151', '9b4eb51seb+5e1b'],
                        black_stack: [],
                        white_used: []
                    }
                },{
                    id: '8seh1rs51n6xnre19',
                    name: 'Bananinha kkkk',
                    config: {
                        hand_count: 8,
                        max_players: 10
                    },
                    state: {
                        player_count: 2,
                        players: ['e5b15be5beb151', '9b4eb51seb+5e1b'],
                        black_stack: [],
                        white_used: []
                    }
                },{
                    id: '8seh1rs51n6xnre19',
                    name: 'Bananinha kkkk',
                    config: {
                        hand_count: 8,
                        max_players: 10
                    },
                    state: {
                        player_count: 2,
                        players: ['e5b15be5beb151', '9b4eb51seb+5e1b'],
                        black_stack: [],
                        white_used: []
                    }
                },
            ]
        }
        return this;
    }
    render ( ) {
        return (
            <List
                dataSource = {this.state.rooms}
                bordered
                size = {"default"}
                renderItem = { (room:RoomProps) => (
                    <List.Item
                    className={style.ListItem}>
                        <Typography.Text 
                        disabled
                        className={style.ListItemPlayers}> {room.state.player_count}/{room.config.max_players} </Typography.Text>
                        <Typography.Text className={style.ListItemText}> {room.name} </Typography.Text>
                    </List.Item>
                ) }
            />
        )
    }
}

export default Roomlist;