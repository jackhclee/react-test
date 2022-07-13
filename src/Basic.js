import React, { useRef } from 'react';
import { Formik } from 'formik';
import { upload } from '@testing-library/user-event/dist/upload';

const Basic = () => {

    const fileUpload = useRef(null);
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    setTimeout(() => {
                        try {
                            let file2Upload = fileUpload.current.files[0]
                            console.log(file2Upload);
                            let fileReader = new FileReader();
                            fileReader.readAsBinaryString(file2Upload);

                            fileReader.onload = (event) => {
                                let binaryStr = fileReader.result;
                                console.log(`binaryStr ${binaryStr}`)
                                //    while (binaryStr.result.length < fileSize) {

                                //    }
                                let headers = new Headers();
                                headers.append('Content-Type', "application/json");
                                let jsonBdy = {
                                    name: file2Upload.name,
                                    mime: file2Upload.type,
                                    content: btoa(binaryStr)
                                }
                                console.log(`binaryStr ${binaryStr}`)

                                fetch("https://orientalpearl.herokuapp.com/files", {
                                    headers: headers,
                                    cors: 'no-cors',
                                    method: "POST",
                                    body: JSON.stringify(jsonBdy)
                                })
                            }
                        } catch (e) {
                            console.log(e)
                        }
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <div>
                    <form onSubmit={handleSubmit}>
                        <input type="file"
                            name="upload"
                            ref={fileUpload}
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <br />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <br />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                    </div>
                )}
            </Formik>
        </div>
    )
};

export default Basic;