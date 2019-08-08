import React, { useState, useEffect } from 'react'
import { Form as Formik, Field, withFormik } from 'formik'
import { Segment, Form, Button, Checkbox } from 'semantic-ui-react'
import CardContent from './Card'
import 'semantic-ui-css/semantic.min.css'
import Axios from 'axios';



const FormComp = ({ status }) => {

    const [user, setUser] = useState([])
    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    user.map(e => <CardContent data={e} />)
    return (
        
        <Segment raised compact>

            <Form size= 'large'>

                <h1>Sign Up</h1>

                <Formik>
                    <Form.Field>
                        <Field type="text" name="name" placeholder="Name" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="email" name="email" placeholder="Email" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="password" name="password" placeholder="Password" />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox toggle name="checkbox" /> 
                    <label> Agree to our Terms & Conditions to register. </label>
                    </Form.Field>

                    <Button color='red' fluid size='large'>
                             Submit
                     </Button>
                    {user.map(e => <CardContent data={e} />)}
                </Formik>

            </Form>

        </Segment>
        
    )
    
}

const FormikForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            checkbox: values.checkbox
        }
    },

    handleSubmit(values, { setStatus }) {

        Axios.post('https://reqres.in/api/users/', values)
            .then(res => setStatus(res.data))}
})(FormComp);

export default FormikForm; 