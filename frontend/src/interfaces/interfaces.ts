export interface Job {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

export interface CardJobProps {
  job: Job;
}

export interface Payload {
  id?: number;
  title: string;
  description: string;
  image?: string;
}
