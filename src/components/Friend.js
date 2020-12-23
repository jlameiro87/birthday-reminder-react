import React from 'react';
import { Icon, Image, Card } from 'semantic-ui-react';

function Friend(props) {
    // Method to format the birthdate
    function formatBirthDate(birthdate) {
        const birthFormatted = new Date(birthdate);

        let month = `${birthFormatted.getMonth() + 1}`;
        let day = `${birthFormatted.getDate()}`;
        let year = `${birthFormatted.getFullYear()}`;

        month = month.length < 2 ? '0' + month : month;
        day = day.length < 2 ? '0' + day : day;

        return [year, month, day].join('-');
    }

    return (
        <Card centered>
            <Image src={props.user.picture.large} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.user.name.first + ' ' + props.user.name.last}</Card.Header>
                <Card.Description>
                    <div><Icon name='phone' />{props.user.phone}</div>
                    <div><Icon name='mail' />{props.user.email}</div>
                    <div><Icon name='birthday cake' />{formatBirthDate(props.user.dob.date)}</div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra><a href="friends"><Icon name='user' />22 Friends</a>
            </Card.Content>
        </Card>
    );
}

export default Friend;