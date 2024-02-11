import { Link } from "react-router-dom";
import Stats from "../features/admin/Stats";
import useUser from "../features/authentication/useUser";
import ProjectListHome from "../features/projects/ProjectListHome";
import { useGetAllProjects } from "../hooks/useProjects";
import DarkModeToggle from "../ui/DarkModeToggle";
import Loading from "../ui/Loading";

function Home() {
  const { isLoading, projects = [] } = useGetAllProjects();
  const { user, isLoading: isGettingUser } = useUser();
  console.log(user);
  console.log(projects);
  return (
    <div className="h-screen p-2 bg-secondary-0 text-secondary-900 flex flex-col">
      <div className="flex-none container xl:max-w-xl flex items-center justify-between">
        {isGettingUser ? (
          <Loading width={40} height={40} />
        ) : (
          <div>
            {user ? (
              <p className="text-primary-900">{user.name}</p>
            ) : (
              <Link to={"auth"} className="text-primary-900">
                وارد شوید
              </Link>
            )}
          </div>
        )}
        <DarkModeToggle />
      </div>
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
