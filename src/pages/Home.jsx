import { Navbar } from "../components";

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="w-50 m-auto mt-5">
        <div>
          <label htmlFor="formFileLg" className="form-label">
            Sellect file
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
