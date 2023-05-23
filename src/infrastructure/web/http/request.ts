import axios from 'axios'
import { IUser } from '../interfaces/dtos/create-user'
import boom from '@hapi/boom'

export async function getUserMicroservice (URI: string, id: number): Promise<any> {
  try {
    const user: IUser = await axios.get(`${URI}/api/v1/users/${id}`)
    return user
  } catch (error: any) {
    // console.log(error.toJSON())
    throw boom.notFound('user OwnerId does not exist')
  }
}
