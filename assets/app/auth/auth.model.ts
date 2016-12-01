export class User {
    constructor(public firstName: string,
                public lastName: string,
                public parentName: string,
                public password: string,
                public personalPhone?: string,
                public ipPhone?: string){}
}