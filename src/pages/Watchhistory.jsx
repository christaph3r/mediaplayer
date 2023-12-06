import { Link } from "react-router-dom";
function Watchhistory() {
  return (
    <>
      <div className="container mt-5 d-flex align-item-center justify-content-between mb-5">
        <h3>Watch History</h3>
        <Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>
          <i class="fa-solid fa-arrow-left px-2"></i>Back To Home
        </Link>
      </div>
      <table className="table mt-5 mb-5 container">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Breaking Bad</td>
                <td>http://www.youtube.com/BreakingBad</td>
                <td>06/12/2023</td>
            </tr>
        </tbody>
      </table>
    </>
  );
}
export default Watchhistory;
