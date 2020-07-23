export interface CompanyInterface {
  Abn: string
  id: string
  AbnStatus: string
  IsCurrent: boolean
  Name: string
  NameType: string
  Postcode: string
  Score: number
  State: string
}

export interface AppState {
  error: string
  loading: boolean
  companies: CompanyInterface[]
}

export interface Action {
  type: string
  payload: {
    companies: CompanyInterface[]
    error: string
  }
}
