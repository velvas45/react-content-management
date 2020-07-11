/**
 * Pada component editcontact sama seperti addcontact terdapat form untuk mengisikan data contact tetapi bedanya jika disini data yg dikirim akan terupdate dengan menggunakan id yang didapatkan.
 * tidak terpakai jika tidak menggunakan api.
 *
 *
 *
 */

import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   const res = await axios.get(
  //     `http://jsonplaceholder.typicode.com/users/${id}`
  //   );

  //   const contact = res.data;

  //   this.setState({
  //     name: contact.name,
  //     email: contact.email,
  //     phone: contact.phone,
  //   });
  // }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // onSubmit = async (dispatch, e) => {
  //   e.preventDefault();

  //   const { name, email, phone } = this.state;

  //   //   Check apakah ada error
  //   if (name === "") {
  //     this.setState({ errors: { name: "Name is required" } });
  //     return;
  //   }

  //   if (email === "") {
  //     this.setState({ errors: { email: "Email is required" } });
  //     return;
  //   }

  //   if (phone === "") {
  //     this.setState({ errors: { phone: "Phone is required" } });
  //     return;
  //   }

  //   const { id } = this.props.match.params;

  //   const updateContact = {
  //     name,
  //     email,
  //     phone,
  //   };

  //   const res = await axios.put(
  //     `http://jsonplaceholder.typicode.com/users/${id}`,
  //     updateContact
  //   );

  //   dispatch({ type: "UPDATE_CONTACT", payload: res.data });

  //   //   membersihkan form sehabis submit
  //   this.setState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     errors: {},
  //   });

  //   this.props.history.push("/");
  // };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header'>Edit Contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label='Name'
                    name='name'
                    type='text'
                    value={name}
                    placeholder='Enter Name..'
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label='Email'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Enter Email..'
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label='Phone'
                    name='phone'
                    type='text'
                    value={phone}
                    placeholder='Enter Phone..'
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type='submit'
                    value='Update Contact'
                    className='btn btn-light btn-block'
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
