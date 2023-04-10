import Image from 'next/image'

import type { articleTypes } from '@/entities/article'
import api from '@/shared/config/api'

const MainPage = async () => {
  const staticData = await api.get('/articles/1')
  const data: articleTypes.IArticle = staticData.data
  return (
    <Image src={data.image} alt="Article Image" width={1216} height={600} />
  )
}

export default MainPage
