const LaptopDetails = () => {
  return (
    <>
      <div className="form__card">
        <div className="upload__photo">
          <p>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <button className="btn btn-blue">ატვირთე</button>
        </div>

        <div className="flex j-b w-1">
          <div className="input-flex">
            <label htmlFor="laptop_name">ლეპტოპის სახელი</label>
            <input type="text" name="laptop_name" id="laptop_name" />
            <span className="text-hint">{`ლათინური ასოები, ციფრები, !@#$%^&*()_+=`}</span>
          </div>

          <select className="form__card-select">
            <option>ლეპტოპის ბრენდი</option>
          </select>
        </div>

        <hr />

        <div className="flex j-b w-1">

          <select className="form__card-select">
            <option>CPU</option>
          </select>

          <div className="input-flex">
            <label htmlFor="cpu_cores">CPU-ს ბირთვი</label>
            <input type="text" name="cpu_cores" id="cpu_cores" />
            <span className="text-hint">მხოლოდ ციფრები</span>
          </div>

          <div className="input-flex">
            <label htmlFor="cpu_current">CPU-ს ნაკადი</label>
            <input type="text" name="cpu_current" id="cpu_current" />
            <span className="text-hint">მხოლოდ ციფრები</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default LaptopDetails;
