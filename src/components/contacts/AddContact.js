/**
 * Pada addcontact berisi component yang berfungsi untuk menambahkan sebuah contact ke list dimana terdapat form yang berguna untuk mengisikan identitas contact tersebut.
 */

import React, { useState } from "react";
import { Consumer } from "../../context";
import TextInputAddContact from "../layout/TextInputAddContact";
import axios from "axios";

function AddContact(props) {
  // state = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   errors: {},
  // };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const newContact = { name, email, phone };

    const res = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //   membersihkan form sehabis submit
    setName("");
    setEmail("");
    setPhone("");

    props.history.push("/");
  };

  return (
    <Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>
            <div className='card-body'>
              <form onSubmit={onSubmit.bind(this, dispatch)}>
                <TextInputAddContact
                  label='Name'
                  name='name'
                  type='text'
                  value={name}
                  placeholder='Enter Name..'
                  onChange={onChangeName}
                />
                <TextInputAddContact
                  label='Email'
                  name='email'
                  type='email'
                  value={email}
                  placeholder='Enter Email..'
                  onChange={onChangeEmail}
                />
                <TextInputAddContact
                  label='Phone'
                  name='phone'
                  type='text'
                  value={phone}
                  placeholder='Enter Phone..'
                  onChange={onChangePhone}
                />

                <input
                  type='submit'
                  value='Add Contact'
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

export default AddContact;
