import Image from 'next/image'
import saveTheDate from '/public/save_the_date.png'
import { imagem, container, content, footer } from './page.module.css'

const metadata = {
  title:
    'Save the date - XIII Seminário Mineiro de Gastroenterologia, Endoscopia Digestiva e Coloproctologia - 2025',
  description:
    'XIII Seminário Mineiro de Gastroenterologia, Endoscopia Digestiva e Coloproctologia.',
  keywords:
    'Seminário Mineiro de Gastroenterologia, Seminário Mineiro de Endoscopia Digestiva, Seminário Mineiro de Coloproctologia, Gastroenterologia, Endoscopia Digestiva, Coloproctologia, Poços de Caldas, Core, Join Digital Solutions, Juliano Costa Silva, Juliano Costa, apfjuliano',
  openGraph: {
    title: 'GastroEndoProcto/MG - Save the date',
    description: 'XIII Seminário Mineiro de Gastroenterologia, Endoscopia Digestiva e Coloproctologia.',
    type: 'website',
    url: 'https://gastroendoproctomg.com.br',
    images: [
      {
        url: 'https://gastroendoproctomg.com.br/save_the_date_share.png',
        width: 1200,
        height: 630,
        alt: 'GastroEndoProcto/MG - save_the_date.png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMR 2025 - save_the_date.png',
    description: 'XIII Seminário Mineiro de Gastroenterologia, Endoscopia Digestiva e Coloproctologia.',
    image: 'https://gastroendoproctomg.com.br/save_the_date_share.png'
  }
}

export async function generateMetadata() {
  return metadata
}

const Home = () => {
  return (
    <div className={container}>
      <div className={content}>
        <Image
          src={saveTheDate}
          alt="Save the date"
          className={imagem}
          priority
        />
      </div>
      <div className={footer}>
      </div>
    </div>
  )
}

export default Home