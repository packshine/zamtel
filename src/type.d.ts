interface IProduct {
	id:number;
	title:string;
	description:string;
	category:string;
	price:number;
	image:string;
	currency:string;
	exchangeRate:number;
}

interface IExchangeRate {
	id:number;
	currency:string;
	rate:number;
}

type ProductState = {
  products: IProducts[]
}

type ExchangeState = {
  exchangeRate: IExchangeRate;
}


type ExchangeAction = {
    currency: string
    rate:number;
}

type DispatchType = (args: ExchangeAction) => ExchangeAction