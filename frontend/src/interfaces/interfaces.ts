export interface Job {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

export interface Payload {
  id?: number;
  title: string;
  description: string;
  image?: string;
}

export interface CardJobProps {
  job: Job;
  onDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

export interface CreateUpdateModalProps {
  updateJobs: (updateJobs: Job) => void;
  addJob: (newJob: Job) => void;
  idJob: number | undefined;
}
