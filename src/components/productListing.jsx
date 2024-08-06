import { Section } from "./section"
import { ProdutosCards } from "./productCard"

export const ProdutosList = () => {
    const produtos =[
        {
            name: "K-Swiss V8 - Masculino",
            image: "../../public/tenis.svg",
            price: 200,
            priceDiscount: 149.9,
            type: 'Tênis'
        },
        // {
        //     name: "Nome do produto",
        //     image: "public/product-thumb-2.png",
        //     price: 49.9
        // }
           
      ]

      let lista =[]

      for(let i=0;i<8;i++){
        lista.push(produtos[0])
      }

      
      
    return (
        <>
            <Section title={'Produtos em Alta' } titleAlign={''} link={''}>
                <div className="grid grid-cols-4 gap-4">
                    {lista.map((i, index)=>(
                        <div key={index}>
                            <ProdutosCards nome={i.name} preco={i.price} href={i.image} tipo={i.type}/>
                    
                        </div>
                    ))}
                </div>
            </Section>

        </>
    );
}

