import PostCoverImage from '../PostCoverImage'
import { PostSummary } from '../PostSummary'

export default function PostFeatured() {
  const slug = 'qualquer-coisa'
  const postLink = `/post/${slug}`
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group'>
      <PostCoverImage
        linkProps={{ href: postLink, className: 'opacity-100' }}
        imageProps={{
          src: '/images/bryen_0.png',
          width: 1200,
          height: 720,
          priority: true,
          alt: 'Titulo do post',
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt='2025-03-30T07:11:33'
        title='Como a tecnologia impacta nosso bem-estar'
        excerpt='Também ajuda a organizar melhor os arquivos e componentes, o que facilita a manutenção do projeto no longo prazo.'
      />
    </section>
  )
}
