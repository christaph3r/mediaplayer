import { Link } from "react-router-dom";
import Add from "../components/Add";
import Vieww from "../components/Vieww";
import Category from "../components/Category";
function Home() {
  return (
    <>
      <div className="container d-flex align-item-center justify-content-between mt-5 mb-5">
        <div className="add_video">
          <Add />
          {/* add uplode new video component */}
        </div>
        <div>
          <Link
            to={"/watch"}
            style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
          >
            Watch History
          </Link>
        </div>
        
      </div>
      <div className="container d-flex align-item-center justify-content-between mt-5 mb-5">
        <div className="all-videos col-md-6 mt-5">
          <h4>All Videos</h4>
          <Vieww/>
        </div>
        <div>
          <Category/>
        </div>
       
      </div>
    </>
  );
}
export default Home;
