import { useState } from "react";

const SMSButton = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (event) => {
    setPhoneNumber(() => event.target.value);
  };
  const send_sms = async (phoneNumber) => {
    const res = await fetch("/api/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneNumber),
    });

    const data = await res.json();

    if (data.success) {
      await setPhoneNumber("");
    } else {
      await setPhoneNumber("An Error has occurred.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    send_sms(phoneNumber);
  };
  return (
    <div className="sms">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Your phone number
            <input
              type="text"
              data-fieldname="phoneNumber"
              placeholder="1areacodephonenumber"
              required
              value={phoneNumber}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">We Got You!</button>
      </form>
      {/* send over inputed numbers
       */}
      {/* make a form to send over  */}
    </div>
  );
};

export default SMSButton;
