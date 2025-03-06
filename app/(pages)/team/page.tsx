import AnalyticsCard from "@/components/dashboard/analytics-card";
 
import TeamsList from "@/components/teams/teamsList";
 

export interface Team{

    isAdmin:boolean;
    name:string;
    image:string;
    isApproved:boolean;
    email:string;
    role:boolean
}


async function getTeams(): Promise<Team[]> {
    const res = await fetch(
      "https://67c7a173c19eb8753e7a3813.mockapi.io/TEAM",
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  }
  
   
  
  async function page() {
      const data =await getTeams()
  
    return (
      <div className="p-6  ">
          <AnalyticsCard title= "Customers" 
          subTitle="Showing all Cusomers With Orders"
          >
           <TeamsList data={data} role={true} />
          </AnalyticsCard>
      </div>
    )
  }
  
  export default page