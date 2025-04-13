import {Review} from './interfaces'

export default class MainProperty {
    src : string
    title : string
    reviews : Review[]

    //This constructor assigns the input values to the class properties
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}