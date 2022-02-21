export enum TaskStatus {
  BACKLOG = 'BACKLOG',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

interface TaskInterface {
  id: string;
  title: string;
  status: TaskStatus;
  description: string;
}

export default TaskInterface;
