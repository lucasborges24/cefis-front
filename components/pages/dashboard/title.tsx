interface DashboardTitleProps {
  title: string;
}

const DashboardTitle: React.FC<DashboardTitleProps> = ({ title }) => {
  return (
    <div className="w-full text-left font-extrabold text-4xl lg:text-6xl ml-12 text-gray-800">
      <h2 className="text-shadow-md p-2">{title}</h2>
    </div>
  );
};

export default DashboardTitle;
