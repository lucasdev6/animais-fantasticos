export default function initFetchBitcoin(){


    async function fetchBitcoin(){
        try{
            const bitcoinResponse = await fetch('https://blockchain.info/ticker')
            const bitcoinJson = await (await bitcoinResponse).json()
            const spanValor = document.querySelector(".btc-preco")
            spanValor.innerText = (1000 / bitcoinJson.BRL.buy).toFixed(4)
        }catch(error){
            console.log(error);
        }

    }
    fetchBitcoin()

}