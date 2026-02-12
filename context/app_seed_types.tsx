import { User, Repository } from "@prisma/client";

export interface SeedData {
  user?: User;
  repos?: Repository[];
  latest_commit?: {
    repo_name: string;
    repo_url: string;
    commit_message: string;
    commit_url: string;
    commit_date: string;
    author_name: string;
    author_avatar_url: string;
  }
}
