const InfoPage = () => {
  return (
    <>
      <div className="form__card">
        <div style={{ display: "flex", gap: '2rem', width: '100%' }}>
          <div className="input-flex">
            <label htmlFor="first_name">სახელი</label>
            <input type="text" id="first_name" name="first_name" placeholder="გრიშა"/>
            <span className="text-hint">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
          </div>

          <div className="input-flex">
            <label htmlFor="last_name">გვარი</label>
            <input type="text" id="last_name" name="last_name" placeholder="ბაგრატიონი"/>
            <span className="text-hint">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
          </div>
        </div>

        <select name="team" id="team" className="form__card-select">
          <option>თიმი</option>
        </select>

        <select name="position" id="position" className="form__card-select">
          <option>პოზიცია</option>
        </select>

        <div className="input-flex">
          <label htmlFor="email">მეილი</label>
          <input type="text" id="email" name="email" placeholder="grish666@redberry.ge"/>
          <span className="text-hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
        </div>

        <div className="input-flex">
          <label htmlFor="phone_number">ტელეფონის ნომერი</label>
          <input type="text" id="phone_number" name="phone_number" placeholder="+995 598 00 07 01"/>
          <span className="text-hint">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
        </div>

        <button className="btn btn-blue" style={{marginLeft: 'auto', marginTop: '5rem'}}>შემდეგი</button>
      </div>
    </>
  );
};

export default InfoPage;
