import intro_img from "../assets/images/intro_img.svg";

const HomePage = () => {
  return (
    <div className="flex" style={{ flexDirection: "column", width: '100%', height: '100vh' }}>
      <img src={intro_img} style={{marginBottom: '5rem'}}/>
      <button className="btn btn-blue" style={{width: '387px', marginBottom: '0.75rem'}}>ჩანაწერის დამატება</button>
      <button className="btn btn-blue" style={{width: '387px'}}>ჩანაწერების სია</button>
    </div>
  );
};

export default HomePage;
