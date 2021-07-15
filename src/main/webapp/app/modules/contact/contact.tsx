import React from 'react';

export const Contact= props=>(
        
        <div className="container col-12 col-lg-6">           
            <h1 className="text-center text-info my-2">Contact form</h1>
            <p className="ml-5">This contact form is at your disposal to send us your comments or questions.</p>
            <form className="">
                <div className="form-group mb-3">
                  <label>First name :</label>
                  <input type="text" className="form-control" id="firstname" placeholder="First name" required />
                </div>
                <div className="form-group mb-3">
                  <label>Last name :</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Last name" required />
                </div>
                <div className="form-group mb-3">
                  <label>E-mail :</label>
                  <input type="text" className="form-control" id="email" placeholder="E-mail" required/>
                </div>
                <div className="form-group mb-3">
                  <label>Address :</label>
                  <input type="text" className="form-control" id="address" placeholder="Address" required />
                </div>
                <div className="form-group mb-3">
                  <label>City :</label>
                  <input type="text" className="form-control" id="city" placeholder="City" required />
                </div>
                <div className="form-group mb-3">
                  <label>Country :</label>
                  <input type="text" className="form-control" id="country" placeholder="Country" required />
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="cgu" id="cgu" required />
                  <label className="form-check-label">I accept the general conditions of use and sale Comments </label>                      
                </div>
                <div className=" form-group mb-3">
                  <label>Comments</label>
                  <textarea className="form-control h-5" rows={5}id="commentaire"> </textarea>
                </div>
                <div className="form-row d-flex justify-content-center">
                  <button className="btn btn-info" type="submit">Envoyer</button>
                </div>
             </form>
         </div>   
    );

export default Contact;