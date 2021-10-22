import { Formik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../config';
import './signup.css';
const Signup = () => {

    const url = app_config.api_url;
    const signupform = {
        name: '',
        email: '',
        password: ''
    }

    const signupSubmit = (values) => {
        console.log(values);

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(url + '/user/add', reqOptions)
            .then((res) => {
                console.log(res.status);

                if (res.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Signed Up!',
                        text: 'You have successfully Registered'
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Something went wrong'
                    });
                }

                return res.json();
            })
            .then((data) => {
                console.log(data);
            })

    }

    return (
        <div className="row">
            <div className="col-md-7">

            </div>
            <div className="col-md-5 form-container">
                <div className="card h-100">
                    <div className="card-body my-card-body" >

                        <h3 className="text-center">SIGN UP HERE </h3>
                        <hr />

                        <Formik initialValues={signupform} onSubmit={signupSubmit} >
                            {({
                                values,
                                handleChange,
                                handleSubmit
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <label>Name</label>
                                    <input className="form-control" type="text"
                                        placeholder="name" id="name" value={values.name} onChange={handleChange} />

                                    <label>Email</label>
                                    <input className="form-control" type="email"
                                        placeholder="email" id="email" value={values.email} onChange={handleChange} />

                                    <label>Password</label>
                                    <input className="form-control" type="password"
                                        placeholder="password" id="password" value={values.password} onChange={handleChange} />

                                    <button type="submit" className="btn btn-primary mt-5">SIGN UP</button>

                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;