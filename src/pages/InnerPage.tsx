const InnerPage = () => {
  return (
    <div className="info__container">
      <h1 className="text-title" style={{ alignSelf: "center" }}>
        ლეპტოპის ინფო
      </h1>
      <div className="flex">
        {/* img */}
        <div
          style={{
            background: "aqua",
            width: "577px",
            height: "342px",
          }}
        ></div>

        {/* User Information */}
        <div
          className="flex text__labels"
          style={{ gap: "5rem", marginLeft: "2rem" }}
        >
          <div>
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ. ნომერი:</p>
          </div>

          <div className="text__labels-info">
            <p>აკაკი წერეთელი</p>
            <p>დიზაინერები</p>
            <p>ილუსტრატორი</p>
            <p>ako@redberry.ge</p>
            <p>+995 583 45 28 33</p>
          </div>
        </div>
      </div>

      <div className="horiz_line" style={{ margin: "4rem 0 3rem" }}></div>

      <div className="flex text__labels" style={{ alignItems: "flex-start" }}>
        <div style={{ marginRight: "5rem" }}>
          <p>ლეპტოპის სახელი:</p>
          <p>ლეპტოპის ბრენდი:</p>
          <p>RAM:</p>
          <p>მეხსიერების ტიპი:</p>
        </div>

        <div className="text__labels-info">
          <p>Razor Bla Bla</p>
          <p>HP</p>
          <p>16</p>
          <p>SSD</p>
        </div>

        <div style={{ marginLeft: "15.75rem", marginRight: "5rem" }}>
          <p>CPU</p>
          <p>CPU-ს ბირთვი</p>
          <p>CPU-ს ნაკადი</p>
        </div>

        <div className="text__labels-info">
          <p>Intel 5</p>
          <p>13</p>
          <p>67</p>
        </div>
      </div>

      <div className="horiz_line" style={{ margin: "4rem 0 3rem" }}></div>

      <div className="flex text__labels" style={{alignItems: "flex-start"}}>
        <div style={{marginRight: '5rem'}}>
          <p>ლეპტოპის მდგომარეობა: </p>
          <p>ლეპტოპის ფასი:</p>
        </div>

        <div className="text__labels-info">
          <p>მეორადი</p>
          <p>1500 ₾</p>
        </div>

        <div style={{ marginLeft: "15.75rem", marginRight: "5rem" }}>
          <p>შევსების რიცხვი:</p>
        </div>

        <div className="text__labels-info">
          <p>12 / 06 / 2130</p>
        </div>

      </div>
    </div>
  );
};

export default InnerPage;
