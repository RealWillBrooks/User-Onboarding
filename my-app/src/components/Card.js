import React from 'react'
import { Card, Segment, Grid } from 'semantic-ui-react'

const CardContent = props => {


    return (


        <Segment stacked>
            <Card>
                <Card.Content>
                    <Card.Header>
                        Name: {props.data.name}
                    </Card.Header>
                    <Card.Meta>
                        Email: {props.data.email}
                    </Card.Meta>
                    <Card.Meta>
                        Agreed to Terms & Conditions: True
                    </Card.Meta>
                    <Card.Meta>
                        ID: {props.data.id}
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Segment>
    )
    
}

export default CardContent