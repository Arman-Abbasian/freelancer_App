import Stats from "../features/admin/Stats";
import useUsers from "../features/admin/useUsers";
import useProposals from "../features/proposals/useProposals";
import useProjects from "../hooks/useProjects";
import DashboardHeader from "../ui/DashboardHeader";
import Loading from "../ui/Loading";

function Home() {
  const {projects}=useProjects();
  console.log(projects)
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
      <div>
    <Stats
      proposals={14000}
      users={280000}
      projects={50000}
    />
  </div>
      </div>
    </div>
  );
}
export default Home;

