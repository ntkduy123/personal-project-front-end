export class Article {
    id: string;
    title: string;
    category: string;
    description: string;
    summary: string;
    reference: string;
    content: string;
    date: number;

    constructor() {
        this.id = '';
        this.title = '';
        this.category = '';
        this.description = '';
        this.summary = '';
        this.reference = '';
        this.content = '';
        this.date = 0;
    }
}
