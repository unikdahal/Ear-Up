const Contact = () => {
  return (
    <div className=" max-w-[1496px] mx-auto">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>

      <form>
        {/* Form asking for basic user detail and a message*/}

        <div className="flex flex-col p-4 m-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="border-2 border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col p-4 m-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border-2 border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col p-4 m-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="border-2 border-gray-400 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col p-4 m-4 \">
          <button
            type="submit"
            className=" w-[200px] bg-gray-700 hover:bg-blue-500 text-white p-2 rounded-md mb-4"
          >
            Submit
          </button>

          <button className=" bg-gray-400 hover:bg-red-500 text-white p-2 rounded-md w-[200px]">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
