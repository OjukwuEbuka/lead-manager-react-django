import React, { Fragmaent } from 'react';
import Leads from './Leads';
import Form from './Form';


export default function Dashboard() {
    return (
        <div>
            <Form />
            <Leads />
        </div>
    )
}
