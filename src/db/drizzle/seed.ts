import { JsonPostRepository } from '@/repositories/post/json-post-repository'
import { drizzleDb } from '.'
import { postsTable } from './schemas'
;(async () => {
  const jsonPostRepository = new JsonPostRepository()
  const posts = await jsonPostRepository.findAll()

  try {
    await drizzleDb.delete(postsTable) // Limpa a base de dados
    await drizzleDb.insert(postsTable).values(posts)

    console.info(`${posts.length} posts foram salvos na base de dados`)
  } catch (error) {
    console.error(error)
  }
})()
