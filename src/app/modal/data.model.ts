export interface Users{
    country: string
    id: string
    isActive: boolean
    name: string
    picture: string
    progress: number
}

export interface Orders{
    delivery_date: string,
    id: string,
    name: string,
    product: string,
    shipping: boolean,
    status: string,
    tracking_no: string
}

export interface Cards{
    header: string,
    sub_header: string,
    value: number
}

export interface AppData{
    new_users: Users[],
    recent_orders: Orders[],
    top_cards: Cards[]
}