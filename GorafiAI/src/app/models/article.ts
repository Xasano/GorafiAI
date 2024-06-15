export class Article {
    constructor(
        public _id: string,
        public titre: string,
        public resume: string,
        public contenu: string,
        public auteur: string,
        public dateCreation: Date,
        public photo: string,
        public mp3: string
    ) { }
}