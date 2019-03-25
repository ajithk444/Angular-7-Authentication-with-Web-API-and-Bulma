
export class User {
    public firstName: string;
    public lastName: string;
    public userID: string;
    public emailID: string;
    public userRoles: string[];
    constructor() {
    }
}

export class Projects {
    public id: number;
    public projectName: string;
    public isActive: boolean;
    constructor() {
    }
}

export class ProjectsDTO{
    public Id: number;
    public ProjectName: string;
    public IsActive: boolean;
    constructor() {
    }
}