export default class MovieModel {
  name: string
  rating: number
  summary: string
  id: number
  first_release_date: Date

  constructor() {
    this.name = ''
    this.rating = 0
    this.summary = ''
    this.id = 0
    this.first_release_date = new Date()
  }
}
