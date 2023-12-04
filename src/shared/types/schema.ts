export interface User {
  avatar: string | null;
  createdAt: String;
  email: string;
  fullName: string;
  id: string;
  type: UserType;
  updatedAt: String;
}

export enum UserType {
  ADMIN = "ADMIN",
  CANDIDATE = "CANDIDATE",
}

export enum PointEstimate {
  EIGHT = "EIGHT",
  FOUR = "FOUR",
  ONE = "ONE",
  TWO = "TWO",
  ZERO = "ZERO",
}

export enum Status {
  BACKLOG = "BACKLOG",
  CANCELLED = "CANCELLED",
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
  TODO = "TODO",
}

export enum TaskTag {
  ANDROID = "ANDROID",
  IOS = "IOS",
  NODE_JS = "NODE_JS",
  RAILS = "RAILS",
  REACT = "REACT",
}

export interface Task {
  assignee?: User | null;
  createdAt: String;
  creator: User;
  dueDate: String;
  id: string;
  name: string;
  pointEstimate: PointEstimate;
  position: number;
  status: Status;
  tags: TaskTag[];
}

export interface CreateTaskInput {
  assigneeId?: string;
  dueDate: String;
  name: string;
  pointEstimate: PointEstimate;
  status: Status;
  tags: TaskTag[];
}

export interface DeleteTaskInput {
  id: string;
}

export interface FilterTaskInput {
  assigneeId?: string;
  dueDate?: String;
  name?: string;
  ownerId?: string;
  pointEstimate?: PointEstimate;
  status?: Status;
  tags?: TaskTag[];
}

export interface UpdateTaskInput {
  assigneeId?: string;
  dueDate?: String;
  id: string;
  name?: string;
  pointEstimate?: PointEstimate;
  position?: number;
  status?: Status;
  tags?: TaskTag[];
}
