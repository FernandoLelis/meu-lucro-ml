export default function Categorias(props) {

    const categorias = [
        {
            nome : "Celulares e SmartFones",
            tipo : ["Clássico", "Premium"]
        },
        {
            nome : "Suplementos",
            tipo : ["Clássico", "Premium"],
        }
    ]

    return(
        <div>
            {props}
        </div>
    )
}
