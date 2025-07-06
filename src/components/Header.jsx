const Header = () => {
  return (
    <div className="header h-[70px] w-[full] bg-black">
      <div className="logo-cont h-[70px] ">
        <img className="h-[97%] text-white"
          src="https://www.shutterstock.com/image-vector/white-dragon-over-black-background-600w-192436064.jpg"
          alt="dragon-logo"
        />
      </div>
      <div className="h-[50px] py-2  m-2 w-[250px] border border-black ">
        <input className="h-[40px] w-[90%]" type="text" placeholder="Search something!" /> 
        <button className=""> Search</button>
        </div>
    </div>
  );
};

export default Header;
