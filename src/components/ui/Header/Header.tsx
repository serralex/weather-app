interface IProps {
  title: string;
  rightComp: React.ReactNode;
}
const Header = ({ title, rightComp }: IProps) => {
  return (
    <header>
      <nav
        className="flex-col md:flex-row mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/#" className="-m-1.5 p-1.5 font-bold pb-8 md:pb-0">
            <span>{title}</span>
          </a>
        </div>
        <div className="flex">{rightComp}</div>
      </nav>
    </header>
  );
};
export default Header;