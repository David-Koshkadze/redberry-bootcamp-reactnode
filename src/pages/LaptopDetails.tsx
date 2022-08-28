import lari_icon from "../assets/icons/lari_icon.svg";

const LaptopDetails = () => {
  return (
    <>
      <div className="form__card">
        <div className="upload__photo" style={{marginBottom: '3.125rem'}}>
          <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <button className="btn btn-blue">ატვირთე</button>
        </div>

        <div className="flex j-b w-1">
          <div className="input-flex">
            <label htmlFor="laptop_name" className="text-label">
              ლეპტოპის სახელი
            </label>
            <input
              type="text"
              name="laptop_name"
              id="laptop_name"
              placeholder="HP"
            />
            <span className="text-hint">{`ლათინური ასოები, ციფრები, !@#$%^&*()_+=`}</span>
          </div>

          <select className="form__card-select">
            <option>ლეპტოპის ბრენდი</option>
          </select>
        </div>

        <div className="horiz_line"></div>

        <div className="flex w-1">
          <select className="form__card-select">
            <option>CPU</option>
          </select>

          <div className="input-flex">
            <label htmlFor="cpu_cores" className="text-label">
              CPU-ს ბირთვი
            </label>
            <input
              type="text"
              name="cpu_cores"
              id="cpu_cores"
              placeholder="14"
            />
            <span className="text-hint">მხოლოდ ციფრები</span>
          </div>

          <div className="input-flex">
            <label htmlFor="cpu_current" className="text-label">
              CPU-ს ნაკადი
            </label>
            <input
              type="text"
              name="cpu_current"
              id="cpu_current"
              placeholder="365"
            />
            <span className="text-hint">მხოლოდ ციფრები</span>
          </div>
        </div>

        <div
          className="flex w-1"
          style={{ gap: "4rem", alignItems: "flex-start" }}
        >
          <div className="input-flex">
            <label htmlFor="laptop_ram" className="text-label">
              ლეპტოპის RAM (GB)
            </label>
            <input
              type="text"
              name="laptop_ram"
              id="laptop_ram"
              placeholder="16"
            />
            <span>მხოლოდ ციფრები</span>
          </div>

          <div className="w-1">
            <p className="text-label">მეხსიერების ტიპი</p>
            <div
              className="flex"
              style={{ justifyContent: "flex-start", marginTop: "2rem" }}
            >
              <div>
                <input type="radio" name="laptop_hard_drive_type" id="ssd" />
                <label htmlFor="ssd">SSD</label>
              </div>

              <div>
                <input type="radio" name="laptop_hard_drive_type" id="hdd" />
                <label htmlFor="hdd">HDD</label>
              </div>
            </div>
          </div>
        </div>

        <div className="horiz_line"></div>

        <div
          className="flex w-1"
          style={{ gap: "4rem", alignItems: "flex-start" }}
        >
          <div className="input-flex">
            <label htmlFor="purchase_date" className="text-label">
              შეძენის რიცხვი (არჩევითი)
            </label>
            <input
              type="text"
              name="laptop_purchase_date"
              id="purchase_date"
              placeholder="დდ/თთ/წწწწ"
            />
          </div>

          <div className="input-flex">
            <label htmlFor="laptop_price" className="text-label">
              ლეპტოპის ფასი
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                name="laptop_price"
                id="laptop_price"
                placeholder="0000"
              />
              <img src={lari_icon} className="lari_icon" alt="lari_icon" />
            </div>
            <span className="text-hint">მხოლოდ ციფრები</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
          }}
        >
          <p className="text-label">ლეპტოპის მდგომარეობა</p>
          <div
            className="flex"
            style={{ justifyContent: "flex-start", marginTop: "2rem" }}
          >
            <div>
              <input type="radio" name="laptop_state" id="new" />
              <label htmlFor="new">ახალი</label>
            </div>
            <div>
              <input type="radio" name="laptop_state" id="used" />
              <label htmlFor="used">მეორადი</label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '4rem'}}>
          <a href="/back" className="back_link">უკან</a>
          <button className="btn btn-blue">დამახსოვრება</button>
        </div>
          
        

      </div>
    </>
  );
};

export default LaptopDetails;
