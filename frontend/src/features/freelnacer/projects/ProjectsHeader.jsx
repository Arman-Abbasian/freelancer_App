import { sortOptions, statusOptions } from "../../../constants/filterOptions";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-center text-secondary-700 mb-8">
      <div className="flex flex-col gap-y-4 lg:gap-x-8 items-center">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: "دسته بندی (همه)",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;
