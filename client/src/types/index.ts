export interface IGlobalContext {
	children: JSX.Element | JSX.Element[];
}

export interface IUser {
	id: string
	name: string
	email: string
	password: string
	address: string
	phoneNumber: number
}

export interface ICleanService {
	id: string
	serviceType: string
	freeTime:Date
	address:string
	price:number
	state:string
}


export interface IEmployee{
	id:string
	name:string
	email: string
	password: string
	address: string
	isaVailable:string
}

export interface IButton{
	text:string
	customClass:string
	onClick: () => void
}

export interface IService{
	src:string
	serviceType:string
	description:string
	alt:string

}