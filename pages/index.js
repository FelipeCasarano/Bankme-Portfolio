import Head from 'next/head'
import About from '../components/About'
import Resume from '../components/Resume'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Why from '../components/Why'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bankme Portfolio</title>
        <meta name="description" content="Esse é meu portfólio para Bankme como Desenvolvedor Full Stack." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Why />
      <Skills />
      <Projects />
      <Resume />
    </div>
  )
}
