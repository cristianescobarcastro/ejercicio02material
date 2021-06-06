import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/LandingMenu"
import SectionPrincipal from "../../components/section-principal/sectionPrincipal"
import SectionSecondary from "../../components/section-secondary/sectionSecondary"

const Home = () => {
    return (
        <div>
            <div >
                <Header>Landing Page Ejercicio Clase 02 - Material-ui</Header>
            </div>
            <div >
                <Menu></Menu>
            </div>
            <div >
                <SectionPrincipal></SectionPrincipal>
            </div>
            <div >
                <SectionSecondary></SectionSecondary>
            </div>
            <div >
                <Footer></Footer>
            </div>
        </div>
    )
};

export default Home