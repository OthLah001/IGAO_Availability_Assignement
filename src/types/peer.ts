export type Peer = {
  image: string | null
  name: string
  last_login: string
  about_me: string
  availability: string[] // Array of day names like ['Mon', 'Tue', 'Wed']
  companies: string[]
  sessions: number
  years_of_experience: number
  location: string
}
