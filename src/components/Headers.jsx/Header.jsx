import avatar from "../../assets/sadek.jpg"
const Header = () => {
  return (
    <header className="container mx-auto my-2 flex justify-between items-center border-b-2 py-3">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={avatar} className="rounded-full w-16" alt="Knowledge Cafe" />
    </header>
  );
};

export default Header;
