import Link from 'next/link';
import Image from 'next/image';

const ChapterCard = ({chapter}) (
  <Link href={`/chapters/${chapter.name}`}>
    <div>
      <Image    
        alt={chapter.name}
        src={Chapter.image}
        
        width={402}
        height={216}
        layout='resposive' 
        />
     <div>
      <div>
      <div>
        {Chapter.name}
      </div>
      </div>
    </div>
    </div>
  </Link>
  )
}