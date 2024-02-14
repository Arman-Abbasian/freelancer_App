import { HiOutlineViewGrid, HiUser, HiCollection } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-5 h-5 lg:h-20 lg:w-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiOutlineViewGrid className="w-5 h-5 lg:h-20 lg:w-20" />}
      />
      <Stat
        color="green"
        title="پروژه ها"
        value={projects}
        icon={<HiCollection className="w-5 h-5 lg:h-20 lg:w-20" />}
      />
    </div>
  );
}

export default Stats;
