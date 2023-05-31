import React from "react";
import { useState } from "react";

import Card from "../ui/Card";
import classes from "../component/NewForm.module.css";

export default function NewForm({ kaydol }) {
  const [nameSurname, setNameSurname] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    const meetupData = {
      nameSurname: nameSurname,
      job: job,
      email: email,
      address: address,
      description: description,
    };
    kaydol(meetupData);
  };

  return (
    <Card>
      <h1> {nameSurname}</h1>
      <div className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="nameSurname">İsim Soyisim</label>
          <input
            type="text"
            required
            id="nameSurname"
            onChange={(e) => {
              setNameSurname(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="job">Meslek</label>
          <input
            type="text"
            required
            id="job"
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Mail</label>
          <input
            type="mail"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adres</label>
          <input
            type="text"
            required
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Açıklama</label>

          <textarea
            id="description"
            required
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Add Meetup</button>
        </div>
      </div>
    </Card>
  );
}
