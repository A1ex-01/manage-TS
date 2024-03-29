import { useStore } from "vuex"

export function usePermission(pageName: string, handleName: string) {
  // 在vux在的login中查权限表,设置对应权限
  const store = useStore()
  const permissions = store.state.login.permissions
  const verufyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item: string) => item === verufyPermission)
}
