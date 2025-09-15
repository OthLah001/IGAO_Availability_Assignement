export type Peer = {
  image: string | null
  name: string
  last_login: string
  about_me: string
  availability: {
    start: string
    end: string
  }[]
  companies: string[]
  sessions: number
  years_of_experience: number
  location: string
}
