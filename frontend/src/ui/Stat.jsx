import { toPersianNumbers } from "../utils/toPersianNumbers";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

function Stat({ icon, value, title, color }) {
  // const bgColor = `bg-${color}-100`;
  // const textColor = `text-${color}-700`;

  return (
    <div className="col-span-1 flex flex-col items-center gap-y-4 lg:gap-y-0 lg:grid lg:grid-rows-2 lg:grid-cols-[6.4rem_1fr] bg-secondary-200 p-4 rounded-lg lg:gap-x-4">
      <div
        className={`lg:row-span-2 flex items-center justify-center
       p-2 aspect-square rounded-full bg-gray-200
       ${colors[color]}
  `}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-sm whitespace-nowrap lg:text-lg self-center">
        {title}
      </h5>
      <p className="text-lg lg:text-3xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
