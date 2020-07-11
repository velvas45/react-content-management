/**
 * Contacts js ini berfungsi sebagai component yang menampung bentuk plural dari contact
 * dimana fitur yg terdapat pada code ini untuk menghubungkan contact js dan digunakan juga
 * untuk mendapatkan state yang berada pada context js menggunakan Context API
 */

import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className='display-4 mb-2'>
                <span className='text-primary'>Contact</span> List
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
