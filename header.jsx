import profile from "./src/assets/img/au1.png";
// import "./src/index.css";
const Header = () => {
  return (
    <div className="flex flex-row bg-white items-center justify-around mt-4">
      <h1 className="text-10xl font-bold">Knowledge Cafe</h1>
      <img src={profile} className="w-10 h-10"></img>
    </div>
  );
};

export default Header;
