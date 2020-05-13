import React, { useState } from 'react';
import userApi from '../services/userApi';

import '../css/business-frontpage.css'
import '../bootstrap/css/bootstrap.min.css'

export default function NewUser() {
    return (
        <>
            <div className="container">
                <div className="">
                    <form >
                        <div className="form-group">
                            <label htmlFor="userName"> User Name *</label>
                            <input type="text" id="userName" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail *</label>
                            <input type="email" id="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password"> Password *</label>
                            <input type="text" id="password" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password2"> Password Confirm *</label>
                            <input type="text" id="password2" placeholder="Please, confirm your password" required />
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
            </>
           
    )
    //userName
    // password
    //password2
    // email
}
