'use client'

import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Heading, Subheading } from './text'

interface Blog {
  id: number,
  thumbnail: string,
  title: string,
  excerpt: string,
  category: string
}

const blogData: Blog[] = [
  {
    'id': 1, 
    'thumbnail': '/thumbnails/1.webp',
    'title': 'Manfaat Penggunaan Sanitizer dalam Keseharian', 
    'excerpt': 'Sanitizer bukan hanya sekedar alat pelindung diri, namun juga bisa menjadi bagian dari lifestyle untuk kesehatan yang lebih baik.', 
    'category': 'Sanitizer' 
  },
  {
    'id': 2, 
    'thumbnail': '/thumbnails/2.webp',
    'title': 'Tingkatkan Higienis Dengan Produk Sanitize', 
    'excerpt': 'Bersih dan higienis adalah dua kata kunci dalam menjaga kesehatan. Produk sanitize dapat membantu Anda mencapai keduanya dengan mudah.', 
    'category': 'Hygiene' 
  },
  {
    'id': 3, 
    'thumbnail': '/thumbnails/3.webp',
    'title': 'Sanitizer: Solusi Praktis Jaga Kebersihan di Masa Pandemi', 
    'excerpt': 'Pandemi mewajibkan kita menjaga kebersihan lebih ekstra. Simak ulasan berikut untuk mengetahui bagaimana sanitizer bisa membantu.', 
    'category': 'Pandemic' 
  },
  {
    'id': 4, 
    'thumbnail': '/thumbnails/4.webp',
    'title': '5 Tips Memilih Produk Sanitize yang Berkualitas', 
    'excerpt': 'Produk sanitize kini banyak tersedia di pasaran. Bagaimana cara memilih yang terbaik? Berikut adalah 5 tips yang bisa Anda terapkan.', 
    'category': 'Product Guide' 
  }
]

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className='bg-white-300 rounded-2xl border border-black/20'>
      <div className='max-h-48 overflow-hidden rounded-2xl'>
        <img src={ blog.thumbnail } alt="" className='h-[180px] object-cover w-full' />
      </div>
      <div className='px-8 py-4'>
        <p className="text-md/6 font-semibold text-gray-900 line-clamp-1">{ blog.title }</p>
        <p className="mb-2 text-md/6 text-gray-600 line-clamp-2">{ blog.excerpt }</p>
        <p className="text-sm/6 font-medium">
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            { blog.category }
          </span>
        </p>
      </div>
    </div>
  );
}

export function Blogs() {
  let [setReferenceWindowRef, bounds] = useMeasure()

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Trending News</Subheading>
          <Heading as="h3" className="mt-2">
            Stay Updated With Trendy News.
          </Heading>
        </div>
      </Container>
      <div className="grid lg:grid-cols-4 max-w-2xl lg:max-w-7xl mx-auto gap-8 my-12">
        {blogData.map((blog: Blog) => (<BlogCard blog={blog} key={blog.id} />))}
      </div>
    </div>
  );
}