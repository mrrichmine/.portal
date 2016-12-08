export class User {
    constructor(public fullName: string,
                public password: string,
                public firstName?: string,
                public lastName?: string,
                public parentName?: string,
                public birthDate?: string,
                public personalPhone?: string,
                public ipPhone?: string){}
}