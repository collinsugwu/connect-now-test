import axios from 'axios'

const axiosClient = axios.create({
  baseURL: ' https://public.connectnow.org.uk/applicant-test/'
})

export async function getMovies() {
  try {
    const { data } = await axiosClient.get('/')
    return [data]
  } catch (error) {
    return [error]
  }
}
