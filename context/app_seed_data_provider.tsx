import { ReactNode, useEffect, useState, createContext, useContext } from "react";
import { SeedData } from "./app_seed_types";
import path from 'path';

interface AppSeedState {
  seedData: SeedData | undefined;
  initSeedData: (user_name: string) => void;
}

// Create App Seed Context
export const AppSeedDataContext = createContext<AppSeedState>( { seedData: {}, initSeedData: () => {} } );

// Use App Seed Context
export const useAppSeedData = () => useContext(AppSeedDataContext);

// Create Context Provider that will fetch data from server and pass it to all components
export const AppSeedDataProvider: React.FC<{ children: ReactNode, base_url: string }> = ({ children, base_url }) => {
  const [seedData, setSeedData] = useState<SeedData>();

  const initSeedData = async (user_name: string) => {
    const data = await fetch(`${base_url}/api/${user_name}/app-seed`);
    const dataJson = await data.json();
    const commits_data = await fetch(`https://api.github.com/users/${user_name}/events/public?per_page=100&page=1`,{
      headers: {
        'accept': 'application/vnd.github.v3+json'
      }
    });
    const commits_data_json = await commits_data.json();
    const pushEvent = commits_data_json.find((event: { type: string; }) => event.type === 'PushEvent');
    if (pushEvent) {
      const latestCommit = pushEvent.payload.commits[0];
      const latestCommitData = await fetch(latestCommit.url);
      const latestCommitDataJson = await latestCommitData.json();
      let repo_url = pushEvent.repo.url.replace('api.', '');
      repo_url = repo_url.replace('repos/', '');
      setSeedData({
        repos: dataJson.repos,
        user: dataJson.user,
        latest_commit: {
          repo_name: pushEvent.repo.name,
          repo_url: repo_url,
          commit_message: latestCommitDataJson.commit.message,
          commit_url: latestCommitDataJson.html_url,
          commit_date: latestCommitDataJson.commit.author.date,
          author_name: latestCommitDataJson.commit.author.name,
          author_avatar_url: latestCommitDataJson.author.avatar_url
        }
      });
    }
  }

  useEffect(()=> console.log(seedData),[seedData])

  return (
    <AppSeedDataContext.Provider value={{seedData, initSeedData}}>
      {children}
    </AppSeedDataContext.Provider>
  );
}
