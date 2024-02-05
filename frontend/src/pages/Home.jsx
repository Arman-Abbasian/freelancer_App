import Stats from "../features/admin/Stats";
import useProjects, { useGetAllProjects } from "../hooks/useProjects";

import Loading from "../ui/Loading";
import toLocalDateShort from "../utils/toLocalDateShort";

function Home() {
  const {isLoading,projects=[]}=useGetAllProjects();
  console.log(projects)
  return (
    <div className="h-screen p-2 bg-secondary-0 text-secondary-900 flex flex-col">
      <h1 className="flex-none text-center pt-10 mb-10 text-2xl font-bold">پروژه‌های دلخواه خود را ببین, انتخاب کن و انجامش بده  </h1>
      <div className="flex-none container xl:max-w-screen-xl">
    <Stats
      proposals={14000}
      users={280000}
      projects={50000}
    />
      </div>
      <div className="flex-grow container max-h-screen  xl:max-w-xl border border-primary-800 shadow-md backdrop-blur-lg overflow-y-auto">
       {isLoading ? <Loading />:
        projects.map(item=>{
          return <div>
            <p><strong>دسته بندی: </strong>{item.category.title}</p>
            <p><strong>عنوان :</strong>{item.title}</p>
            <p><strong>تاریخ ایجاد: </strong>{toLocalDateShort(item.createdAt)}</p>
            <p><strong>توضیحات: </strong>{item.description}</p>
            <p><strong>تاریخ تحویل: </strong>{toLocalDateShort(item.deadline)}</p>
            </div>
        })
       }

      </div>
    </div>
  );
}
export default Home;

