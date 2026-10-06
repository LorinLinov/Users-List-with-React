import React from 'react';

export default function CreateAndEdit({ onClose, action }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Build payload matching Supabase column conventions (snake_case)
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      imageUrl: formData.get('imageUrl'),
      address: {
        country: formData.get('country'),
        city: formData.get('city'),
        street: formData.get('street'),
        street_number: formData.get('streetNumber')
      }
    };

    try {
      const response = await fetch('https://pqtfnfqiyxqlloczwuvl.supabase.co/rest/v1/users', {
        method: action === 'edit' ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_3ohLtThqgHT3Fec-TcRp9g_qIZXtG56',
          'Authorization': 'Bearer sb_publishable_3ohLtThqgHT3Fec-TcRp9g_qIZXtG56',
          'Prefer': 'return=representation' // Returns created/updated record in response
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Supabase Error:', errorData);
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      onClose(); // Close modal upon successful submit
    } catch (err) {
      console.error('Network Error:', err);
    }
  };

  return (
    <div className="overlay">
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>{action === 'edit' ? 'Edit User' : 'Add User'}</h2>
            <button className="btn close" type="button" onClick={onClose}>
              <svg
                aria-hidden="true"
                focusable="false"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25c-12.5 12.5-32.75 12.5-45.25 0L160 256 54.6 361.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L114.8 256 9.4 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 256l105.3 105.4z"
                />
              </svg>
            </button>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="firstName" name="firstName" type="text" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input id="lastName" name="lastName" type="text" required />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <input id="phoneNumber" name="phoneNumber" type="text" />
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span><i className="fa-solid fa-image"></i></span>
                <input id="imageUrl" name="imageUrl" type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="country" name="country" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-city"></i></span>
                  <input id="city" name="city" type="text" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input id="street" name="street" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-house-chimney"></i></span>
                  <input id="streetNumber" name="streetNumber" type="text" />
                </div>
              </div>
            </div>

            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}