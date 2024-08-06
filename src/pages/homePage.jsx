import { Gallery } from "../components/galerry";
import { ColecaoDestaqueFirst } from "../components/colecaoDestaqueFirst";
import { ColecaoDestaqueSecond } from "../components/colecaoDestaqueSecond";
import { ProdutosList } from "../components/productListing";
import { OfertaEspecial } from "../components/ofertaEspecial";


export const HomePage = () => {
    const images = [
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },
        { src: "../../public/White-Sneakers-PNG-Clipart1.svg" },

    ];

    return (
        <>
            <div className="w-full bg-[#F9F8FE]">
                <Gallery imagens={images} />
                <ColecaoDestaqueFirst />
                <ColecaoDestaqueSecond />
                <ProdutosList />
                <OfertaEspecial />

            </div>
        </>
    );
}

