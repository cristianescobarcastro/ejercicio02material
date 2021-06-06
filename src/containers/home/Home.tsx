import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/LandingMenu"
import ContactForm from "../../components/contact-form/ContactForm"

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4 offset-4">
                    <Header>Landing Page Ejercicio Clase 02 - Material-ui</Header>
                </div>
                <div className="row">
                    <div className="col-4 offset-2">
                        <Menu></Menu>
                    </div>
                </div>
                <div className="col-4 offset-4">
                    <ContactForm></ContactForm>
                </div>
                <div className="col-4 offset-4">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
};

export default Home