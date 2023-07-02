import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetails = () => {
  const initialValues = {
    name: '',
    address: '',
    country: '',
    gender: '',
    hobbies: [],
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.address) {
      errors.address = 'Address is required';
    }

    if (!values.country) {
      errors.country = 'Country is required';
    }

    if (!values.gender) {
      errors.gender = 'Gender is required';
    }

    if (values.hobbies.length === 0) {
      errors.hobbies = 'Please select at least one hobby';
    }

    return errors;
  };

  const onSubmit = (values) => {
    alert("Submitted")
    console.log(values)
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
 <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="mb-4">User Details</h3>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-danger">{formik.errors.name}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-danger">{formik.errors.address}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country:</label>
        <select
          id="country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-select"
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </select>
        {formik.touched.country && formik.errors.country && (
          <div className="text-danger">{formik.errors.country}</div>
        )}
      </div>

     <div className="mb-3">
  <label className="form-label">Gender:</label>
  <div className="form-check">
    <input
      type="radio"
      id="gender-male"
      name="gender"
      value="male"
      checked={formik.values.gender === 'male'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="form-check-input"
    />
    <label htmlFor="gender-male" className="form-check-label">Male</label>
  </div>
  <div className="form-check">
    <input
      type="radio"
      id="gender-female"
      name="gender"
      value="female"
      checked={formik.values.gender === 'female'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="form-check-input"
    />
    <label htmlFor="gender-female" className="form-check-label">Female</label>
  </div>
  <div className="form-check">
    <input
      type="radio"
      id="gender-other"
      name="gender"
      value="other"
      checked={formik.values.gender === 'other'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="form-check-input"
    />
    <label htmlFor="gender-other" className="form-check-label">Other</label>
  </div>
  {formik.touched.gender && formik.errors.gender && (
    <div className="text-danger">{formik.errors.gender}</div>
  )}
</div>

      <div className="mb-3">
        <label htmlFor="hobbies" className="form-label">Hobbies/Interests:</label>
        <select
          multiple
          id="hobbies"
          name="hobbies"
          value={formik.values.hobbies}
           onChange={(event) => {
                const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
                formik.setFieldValue('hobbies', selectedOptions);
              }}
          onBlur={formik.handleBlur}
          className="form-select"
        >
          <option value="reading">Reading</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="art">Art</option>
        </select>
        {formik.touched.hobbies && formik.errors.hobbies && (
          <div className="text-danger">{formik.errors.hobbies}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    </div>
  );
};

export default UserDetails;
