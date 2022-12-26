import { v4 as uuidv4 } from "uuid";

export const Form = ({
  sectors,
  handleData,
  setFormData,
  formData,
  error,
  setError,
}) => {
  //set form data from dom element
  const handleChange = (e) => {
    setFormData({
      id: formData.id ? formData.id : uuidv4(),
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //submit data for edit or update
  //I did very basic form validation, I can do better than that. It's depend on project. For larger project i used react-hooks-form with yup validator, for this project i think it's overkill that's why i'm did this way
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name !== "" && formData.sector !== "") {
      handleData(formData);
    } else {
      setError({
        data: "Please fill the form",
      });
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Add Your Information
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-6 mb-0 space-y-3 rounded-lg p-8 shadow-2xl"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <div className="relative mt-1">
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={formData.name}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                name="name"
                placeholder="Enter Name"
              />
              <p className="text-red-500 text-sm">
                {formData.name.length > 3 ? "" : error?.data}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="Sectors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sectors
            </label>
            <select
              id="Sectors"
              onChange={handleChange}
              value={formData.sector || "def"}
              name="sector"
              className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500"
            >
              <option value="def" disabled>
                Choose a Sector
              </option>
              {sectors.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <p className="text-red-500 text-sm">
              {formData.sector !== "" ? "" : error?.data}
            </p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                onChange={handleChange}
                name="isAgree"
                checked={formData.isAgree || false}
                className="w-4 h-4 text-blue-600 rounded border-blue-300 "
              />
              <label
                htmlFor="Agree to terms"
                className="ml-2 text-sm font-medium"
              >
                Agree to terms
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
