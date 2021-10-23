import { baseService } from "./baseService";

export class JobsService extends baseService {
  constructor() {
    super();
  }

  fetchListJobs = () => {
    return this.get(`api/jobs`);
  };

  fetchTitleJobs = () => {
    return this.get(`api/type-jobs`);
  };

  fetchListTypeJobs = () => {
    return this.get(`/api/jobs/by-type?type`)
  }

  fetchSubTypeJobs = () => {
    return this.get(`/api/type-jobs`)
  }
}

export const jobsSerivce = new JobsService();
