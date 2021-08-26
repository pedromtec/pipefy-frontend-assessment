import { createContext, ReactNode, useContext, useState } from 'react'
import { OrganizationPipe } from '../../graphql/types'

type Context = {
  selectedPipe?: OrganizationPipe
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setSelectedPipe: React.Dispatch<
    React.SetStateAction<OrganizationPipe | undefined>
  >
}

type PipesContextProviderProps = {
  children: ReactNode
}

const PipesContext = createContext<Context>({} as Context)

export function PipesContextProvider({ children }: PipesContextProviderProps) {
  const [search, setSearch] = useState('')
  const [selectedPipe, setSelectedPipe] = useState<
    OrganizationPipe | undefined
  >()

  return (
    <PipesContext.Provider
      value={{ search, selectedPipe, setSearch, setSelectedPipe }}
    >
      {children}
    </PipesContext.Provider>
  )
}

export const usePipesContext = () => {
  const context = useContext(PipesContext)
  if (context === undefined) {
    throw new Error(
      'usePipesContext must be used within a PipesContextProvider'
    )
  }
  return context
}
