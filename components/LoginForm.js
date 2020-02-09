export default () => (
  <div className="w-full max-w-ws">
    <form className="rounded shadow m-4 bg-white p-4">
      <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="appearance-none border rounded shadow py-2 px-3 text-gray-700 w-full mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
          id="username"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button className="btn-blue">Sign In</button>
        <a href="#">Forgot password</a>
      </div>
    </form>
  </div>
);
