import { ICourse } from '../../models/ICourse'
import { courseList } from '../../data/courseList'

export async function fetchCourses(limit?: number): Promise<ICourse[] | null> {
  if (limit) return courseList.slice(0, limit)

  return courseList
}