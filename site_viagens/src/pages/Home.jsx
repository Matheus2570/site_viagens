import './Home.css'
import Header from "../components/Header"
import Footer1 from "../components/FooterProps1"

function Home() {
  return (
    <div>
      <Header/>
      <Footer1
        email="grupo5@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        sobre="site desenvolvido por grupo 5 em questão de realizar testes de imagem, slide, e outros. Grupo 5 foi formado no ano de 2024 com objtivo de colocar 6 estudantes para trabalharem e desenvolverem sites e Apps juntos gerando experiência social e profissional"
        feedback = "0800-9876"
        reclamacao= "https://www.reclameaqui.com.br"
        />
      

    </div>
  )
}

export default Home