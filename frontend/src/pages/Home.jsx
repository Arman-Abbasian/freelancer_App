import Stats from "../features/admin/Stats";
import ProjectListHome from "../features/projects/ProjectListHome";
import { useGetAllProjects } from "../hooks/useProjects";
import Loading from "../ui/Loading";

function Home() {
  const { isLoading, projects = [] } = useGetAllProjects();
  console.log(projects);
  return (
    <div className="h-screen p-2 bg-secondary-0 text-secondary-900 flex flex-col">
      <h1 className="flex-none text-center pt-10 mb-10 text-2xl font-bold">
        پروژه‌های دلخواه خود را ببین, انتخاب کن و انجامش بده{" "}
      </h1>
      <div className="flex-none container xl:max-w-screen-xl mb-10">
        <Stats proposals={14000} users={280000} projects={50000} />
      </div>
      <div
        className="flex-grow p-4 rounded-md space-y-8 container scroll-container
       xl:max-w-xl shadow-md shadow-secondary-300 backdrop-blur-lg overflow-y-auto"
      >
        {isLoading ? (
          <Loading />
        ) : (
          projects.map((item) => {
            return (
              <ProjectListHome
                budget={item.budget}
                categoryTitle={item.category.title}
                createdAt={item.createdAt}
                deadline={item.deadline}
                description={item.description}
                title={item.title}
                key={item._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
export default Home;
