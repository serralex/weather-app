interface IProps {
  headerComp: React.ReactNode;
  contentComp: React.ReactNode;
}
const Layout = ({ headerComp, contentComp }: IProps) => {
  return (
    <div className="bg-gradient-to-t to-[#111] from-[#503a9a] text-white min-h-full">
      {headerComp}
      <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        {contentComp}
      </div>
    </div>
  );
};
export default Layout;
