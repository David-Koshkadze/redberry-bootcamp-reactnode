import React from "react";

const List = () => {
  return (
    <div className="list__container">
      <h1 className="text-title">ჩანაწერების სია</h1>

      <div className="list__cards-wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <div className="list__card">
            {/* Image */}
            <div className="list__rect-Img"></div>

            <div
              className="list__card-details"
              style={{ marginLeft: "1.75rem" }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                ირინე ჩანქსელიანი
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  marginBottom: "2rem",
                }}
              >
                Pentium II
              </p>
              <a href="#" className="list__card-more">
                მეტის ნახვა
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
