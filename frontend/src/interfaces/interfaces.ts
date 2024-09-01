export interface Job {
  description: string;
  created_at: string;
  image: string;
  title: string;
  id: number;
}

export interface Payload {
  description: string;
  image?: string;
  title: string;
  id?: number;
}

export interface CardJobProps {
  handleEdit: (id: number) => void;
  onDelete: (id: number) => void;
  job: Job;
}

export interface CreateUpdateModalProps {
  updateJobs: (updateJobs: Job) => void;
  addJob: (newJob: Job) => void;
  idJob: number | undefined;
}

export interface JobDetailsModalProps {
  handleDetailsModal: () => void;
  description: string;
  created_at: string;
  image?: string;
  title: string;
}
