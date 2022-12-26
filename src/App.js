import { useState } from "react";

import { Form } from "./Form";
import { Card } from "./Card";
import { sectors } from "./db";
import { data } from "./db";

const dumm = {
  name: "",
  sector: "",
  isAgree: "",
};

function App() {
  const [userData, setUserData] = useState(data);
  const [formData, setFormData] = useState(dumm);
  const [error, setError] = useState();

  //Click Card and refill card data to form
  const handleClick = (id) => {
    const data = userData.info.find((item) => item.id === id);
    setFormData(data);
  };
  // From Reset Funcion
  const handleReset = () => {
    setFormData(dumm);
  };

  //create and update data in same function
  const handleData = (userdata) => {
    //find data that available in db
    const find = userData.info.some(({ id }) => id === userdata.id);

    //map and update data with new form value
    const upDate = userData.info.map((item) => {
      if (item.id === userdata.id) {
        return { ...userdata };
      } else {
        return item;
      }
    });

    //if data is updateable then update otherwise set as new data
    if (find) {
      setUserData({
        info: upDate,
      });
      handleReset();
      setError({});
    } else {
      setUserData({
        info: [...userData.info, userdata],
      });
      handleReset();
      setError({});
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <Form
            sectors={sectors}
            handleData={handleData}
            setFormData={setFormData}
            formData={formData}
            error={error}
            setError={setError}
          />
          <div>
            {userData.info.map((info) => {
              return (
                <Card handleClick={handleClick} key={info.id} info={info} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
