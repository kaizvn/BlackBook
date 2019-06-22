import React, { Fragment } from 'react';

import {
    Container,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Button,
    Divider
} from '@material-ui/core'


const listEvidents = [
    {
        id: 1,
        photo: "/static/images/1.jpg",
        date: '14/2/2019',
        by: 123456789,
        description: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.'
    }, {
        id: 2,
        photo: "/static/images/1.jpg",
        date: '15/2/2019',
        by: 123456789,
        description: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.'
    }, {
        id: 3,
        // photo: "/static/images/1.jpg",
        date: '16/2/2019',
        by: 123456789,
        description: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.'
    }, {
        id: 4,
        // photo: "/static/images/1.jpg",
        date: '17/2/2019',
        by: 123456789,
        description: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.'
    }, {
        id: 5,
        // photo: "/static/images/1.jpg",
        date: '18/2/2019',
        by: 123456789,
        description: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.'
    }
]


const CommentComponent = ({ }) => {
    return (
        <Container>
            <List>
                {
                    listEvidents.map((item, key) => {
                        return (
                            <Fragment key={key}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={"/static/images/2.png"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.phone || ""}
                                        secondary={
                                            <React.Fragment>
                                                <big>{item.by}</big>
                                                <br/>
                                                <i>{item.date || ""}</i>
                                                <br />
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {item.description || ""}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    {item.photo && (<img alt="" src={item.photo } />)} 
                                    <Button size="small" color="primary">
                                        View More
                                    </Button>
                                </ListItem>
                                <Divider/>
                            </Fragment>
                        )
                    })
                }
            </List>

        </Container>
    )
}

export default CommentComponent;