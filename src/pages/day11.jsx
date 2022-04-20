import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/day11.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const FormikYup = () => {
  const [userDetails, setUserDetails] = useState(null);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'please fill the details';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Required*'),
    lastName: Yup.string()
      .min(5, 'Should be 5 character long')
      .max(15, 'should not exceed 15 characters')
      .required('Required*'),
    email: Yup.string().email('invalid email address').required('Required*'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Your Password does not match'),
    gender: Yup.string().required('Please choose an option'),
    acceptTerms: Yup.bool().oneOf([true], ' Accept T&C are Mandatory'),
  });
  return (
    <div className="register-form">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          password: '',
          confirmPassword: '',
          email: '',
          gender: '',
          department: '',
          acceptTerms: false,
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          setUserDetails(values);
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form className="frm p-4 text-left">
              <h3 align="center">Signup Form</h3>
              <div className="main-cont">
                {/* firstname */}
                <div className="form-group">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="form-control pl-2"
                    placeholder="First Name"
                  />
                </div>
                {errors.firstName && touched.firstName && (
                  <div className="text-danger">{errors.firstName}</div>
                )}
                {/* lastname */}
                <div className="form-group">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="form-control pl-2"
                    placeholder="Last Name"
                  />
                </div>
                {errors.lastName && touched.lastName && (
                  <div className="text-danger">{errors.lastName}</div>
                )}
                {/* password */}
                <div className="form-group">
                  <label>Password</label>
                  <Field name="password" type="password" className="form-control pl-2" />
                </div>
                {errors.password && touched.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
                {/* confirm password */}
                <div className="form-group">
                  <label>Confirm Password</label>
                  <Field name="confirmPassword" type="password" className="form-control pl-2" />
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
                {/* Email */}
                <div className="form-group ">
                  <label> Email </label>
                  <Field
                    name="email"
                    type="email"
                    validate={validateEmail}
                    placeholder="john@example.com"
                    className="form-control pl-2"
                  />
                </div>
                {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                {/* Radio groups gender  */}
                <div className="form-group radioGroup">
                  <label> Gender </label>
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>
                {errors.gender && touched.gender && (
                  <div className="text-danger">{errors.gender}</div>
                )}
                {/* select option department */}
                <div className="form-group">
                  <label>Department </label>
                  <Field as="select" name="department" className="form-control pl-2">
                    <option value=".Net">.Net</option>
                    <option value="React native">ReactNative</option>
                    <option value="Flutter">Flutter</option>
                  </Field>
                </div>
                {/* checkbox accept T&c */}
                <div className="form-group form-check">
                  <Field name="acceptTerms" type="checkbox" className="form-check-input" />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms & Condition.
                  </label>
                  {errors.acceptTerms && touched.acceptTerms && (
                    <div className="text-danger">{errors.acceptTerms}</div>
                  )}
                </div>
                {/* button */}
                <Button className="btns" type="submit" size="sm" variant="success">
                  Submit
                </Button>
                <Button className="btns" type="reset" size="sm" variant="danger">
                  Reset
                </Button>
              </div>
            </Form>
            {userDetails && (
              <Card border="success" className="mb-5 mt-2 w-25 cards">
                <p> First Name : {userDetails.firstName}</p>
                <p> Last Name : {userDetails.lastName}</p>
                <p> Password : {userDetails.password}</p>
                <p> Confirm password : {userDetails.confirmPassword}</p>
                <p> Email : {userDetails.email}</p>
                <p> Gender : {userDetails.gender}</p>
                <p> Department : {userDetails.department}</p>
              </Card>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};
export default FormikYup;
