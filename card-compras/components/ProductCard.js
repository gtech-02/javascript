
export default function ProductCard (props) {
    return `
        <div class="card">
            <img src="https://imgs.casasbahia.com.br/55058313/1g.jpg">
            <div>
                <h1>${props.name}</h1>
                <h2>${props.storage ? props.storage : '' } ${props.color ? props.color : ''}</h2>
                <span>${props.price}</span>
                <button>Comprar</button>
            </div>
        </div>
    `;
}