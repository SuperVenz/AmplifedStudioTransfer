import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { navigate } from "gatsby";
const Wrapper = styled.div``;
const FormWrapper = styled.form`
  /* flex */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  /* Boxing */
  margin-top: 32px;
  /* inputs */
  input,
  textarea {
    width: 85vw;
    height: 56px;
    margin-top: 16px;
    /* borders */
    border: black solid 3px;
    padding-left: 8px;
    font-size: 18px;
  }

  /* input Container */
  label {
    margin-bottom: 32px;
    span {
      font-size: 20px;
    }
  }
  /* text area */
  textarea {
    height: 256px;
    padding-top: 16px;
  }
  /* Button */
  button {
    /* Flex */
    display: flex;
    flex-flow: row nowrap;
    /* Alignment */
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;
    /* margin and padding */
    margin-top: 5%;
    margin-bottom: 16px;
    /* Size */
    width: 70%;
    height: 70px;
    /* Border */
    border: solid 1px #0c519a;
    border-radius: 3px;
    /* Theming */
    box-shadow: 5px 10px 5px black;
    text-decoration: none;
    color: white;
    background-color: #0c519a;
    font-size: 24px;
    cursor: pointer;
    @media screen and (min-width: 600px) {
      width: 33%;
      margin-bottom: 50px;
    }
    @media screen and (min-width: 900px) {
      width: 50%;
    }
  }
  @media screen and (min-width: 900px) {
    align-items: flex-start;
    padding-left: 16px;
    width: 50vw;
    input,
    textarea {
      width: 45vw;
    }
    label {
      margin-bottom: 16px;
    }
    textarea {
      height: 200px;
    }
  }
`;
const Gray = styled.span`
  color: gray;
`;
function Form({ title }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        firstName: firstName,
        lastName: lastName,
        email: email,
        telephone: telephone,
        description: description,
        instagram: instagram,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };

  return (
    <Wrapper>
      <h2>{title}</h2>
      <FormWrapper
        autoComplete="on"
        netlify-honeypot="bot-field"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Netlify Rocks" type="hidden" />
        <input type="hidden" name="bot-field" />

        <label htmlFor="firstName">
          <span>First Name</span>
          <br />
          <input
            required
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName">
          <span>Last Name</span>
          <br />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor="telephone">
          <span>Telephone</span>
          <br />
          <input
            required
            type="tel"
            name="telephone"
            placeholder="123-456-7890"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </label>
        <label htmlFor="description">
          <span>Message</span>
          <br />
          <textarea
            name="description"
            rows="4"
            required
            cols="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="How can we help you!"
          />
        </label>
        <label htmlFor="Email">
          <span>
            Email <Gray> (Optional)</Gray>
          </span>
          <br />
          <input
            required
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="Instagram">
          <span>Instagram</span>
          <Gray> (Optional)</Gray>
          <br />
          <input
            type="text"
            name="instagram"
            placeholder="@amplifiedsd"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>
        <button type="submit" onSubmit={handleSubmit} onClick={handleSubmit}>
          Submit
        </button>
      </FormWrapper>
    </Wrapper>
  );
}
export default Form;
