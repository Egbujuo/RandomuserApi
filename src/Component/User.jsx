import React from "react";

const User = ({ newdata, fetchData }) => {
  return (
    <div>
      {newdata.map((each) => {
        return (
          <div>
            <h1 style={{ color: "blue" }}>
              JavaScript Random User API Project{" "}
            </h1>
            <div className="container">
              <div>
                <img src={each.picture.large} alt="" />
              </div>
              <div className="text">
                <h4>
                  Name : <span>{each.name.first} </span>
                </h4>
                <h4>
                  Last Name : <span>{each.name.last}</span>
                </h4>
                <h4>
                  Location : <span>{each.location.country}</span>
                </h4>
                <h4>
                  Phone : <span>{each.phone}</span>
                </h4>
                <h4>
                  Email : <span>{each.email}</span>
                </h4>
              </div>
              <div className="btn">
                <button
                  onClick={() => {
                    fetchData();
                  }}
                >
                  Generate Person
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
