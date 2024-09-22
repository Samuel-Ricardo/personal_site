import { IProjectSyncDTO } from '@/modules/@core/project/DTO/sync.dto';

interface props {
  search?: string;
  projects: IProjectSyncDTO[];
}

export const filterPortfolio = async ({ projects, search }: props) =>
  !search || search.trim() === ''
    ? projects
    : projects.filter(
        project =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase()) ||
          project.techs.filter(t =>
            t.name.toLowerCase().includes(search.toLowerCase()),
          ).length > 0,
      );
