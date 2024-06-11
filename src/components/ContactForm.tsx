'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CSSTransition } from 'react-transition-group';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .required('Required'),
});

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col justify-center items-center p-8'>
          <CSSTransition in={true} timeout={500} classNames="fade" appear>
            <div className="mb-4">
              <Field type="text" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
            </div>
          </CSSTransition>
          <CSSTransition in={true} timeout={500} classNames="fade" appear>
            <div className="mb-4">
              <Field type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
            </div>
          </CSSTransition>
          <CSSTransition in={true} timeout={500} classNames="fade" appear>
            <div className="mb-4">
              <Field as="textarea" name="message" className="shadow appearance-none h-40 border rounded w-full py-2 px-3 text-gray-700 dark:bg-[#171717] leading-tight focus:outline-none focus:shadow-outline" />
              <ErrorMessage name="message" component="div" className="text-red-500 text-xs italic" />
            </div>
          </CSSTransition>
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;