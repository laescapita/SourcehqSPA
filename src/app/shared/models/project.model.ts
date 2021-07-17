export class Project {
    public title: string;
    public description: string;
    public date: Date;

    constructor(title:string ,description: string , date: Date){
        this.title = title
        this.description = description
        this.date = date
    }
}