import { useStore } from "vuex"

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verufyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item: string) => item === verufyPermission)
}
