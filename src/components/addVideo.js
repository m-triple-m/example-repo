import { Button, Card, CardContent, Container, Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';
import app_config from '../config';

const AddVideo = () => {

    const url = app_config.api_url;

    const [thumbnail, setThumbnail] = useState("");
    const [videoFile, setVideoFile] = useState("");

    const videoForm = {
        title: '',
        description: '',
        category: '',
        thumbnail: '',
        file: '',
    }

    const videoSubmit = (values) => {

        values.thumbnail = thumbnail;
        values.file = videoFile;
        console.log(values);

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(url + '/video/add', reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Video Uploaded Successfully'
                })
            })

    }

    const uploadThumbnail = (e) => {

        const selFile = e.target.files[0];

        console.log(selFile);

        const tempForm = new FormData();
        tempForm.append('file', selFile);

        fetch(url + '/util/uploadfile', { method: 'POST', body: tempForm })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThumbnail(selFile.name);
            });

    }

    const uploadVideo = (e) => {
        const selFile = e.target.files[0];

        console.log(selFile);

        const tempForm = new FormData();
        tempForm.append('file', selFile);

        fetch(url + '/util/uploadfile', { method: 'POST', body: tempForm })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVideoFile(selFile.name);
            });
    }

    return (

        <Container>

            <Card>

                <CardContent>

                    <Grid container>
                        <Grid item md={5}>

                        </Grid>
                        <Grid item md={7}>

                            <h2>Signup Form</h2>

                            <Formik initialValues={videoForm} onSubmit={videoSubmit} >

                                {({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField label="Title" className="w-100 mt-5" variant="filled" id="title" onChange={handleChange} value={values.title} />
                                        <TextField multiline rows={4} label="Description" className="w-100 mt-4" variant="filled" id="description" onChange={handleChange} value={values.description} />
                                        <TextField label="Category" className="w-100 mt-4" variant="filled" id="category" onChange={handleChange} value={values.category} />

                                        <Grid container spacing={5}>
                                            <Grid item className="mt-4">
                                                <label >Upload Thumbnail</label>
                                                <input onChange={uploadThumbnail} className="form-control" type="file" />
                                            </Grid>
                                            <Grid item className="mt-4">
                                                <label >Upload File</label>
                                                <input onChange={uploadVideo} className="form-control" type="file" />
                                            </Grid>
                                        </Grid>

                                        <Button type="submit" variant="contained" className="w-25 mt-5">Submit Video</Button>

                                    </form>
                                )}

                            </Formik>
                        </Grid>
                    </Grid>



                </CardContent>
            </Card>

        </Container>

    )
}

export default AddVideo;